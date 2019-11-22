import {Component, OnInit} from '@angular/core';
import {GrdFilterPipe} from "../grd-filter.pipe"
@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
    public searchText: string;
    public createNoteBook: boolean = false
    public readNoteBook: boolean = true
    public deleteNoteBook: boolean = false
    public editNoteBook: boolean = false
    public note: any = {title: "", description: "", date: new Date()}
    public noteList: any = []
    public displayNotes: any = []
    public dispalyNoteonSidebar: any = []
    public showSuccessMessage: boolean = false
    public showMessage: boolean = false
    public showMessageforSuccess: string = ""
    constructor() {}

    ngOnInit() {
        if (localStorage.getItem("notesList") != undefined || localStorage.getItem("notesList") != null) {
            this.displayNotes = JSON.parse(localStorage.getItem("notesList"))
            this.dispalyNoteonSidebar = JSON.parse(localStorage.getItem("notesList"))
        }
        if (this.displayNotes == "" || this.displayNotes == [] || this.displayNotes == undefined || this.displayNotes == null) {
            this.showMessage = true
        }
    }
    /**
  * @author Vanitha
  * @description To create note data
  */
    createNotesData() {
        this.createNoteBook = false
        if (localStorage.getItem("notesList") != undefined || localStorage.getItem("notesList") != null) {
            this.noteList = JSON.parse(localStorage.getItem("notesList"))
        }
        this.noteList.push(this.note)
        localStorage.setItem("notesList", JSON.stringify(this.noteList))
        this.showSuccessMessage = true
        setTimeout(() => {
            this.showSuccessMessage = false
            this.readNote()
            this.ngOnInit()
        }, 2000)

    }
   /**
  * @author Vanitha
  * @description To SelectNote
  */
    selectNote(note) {
        var array = []
        array.push(note)
        this.displayNotes = array
    }
 /**
  * @author Vanitha
  * @description To click create button
  */
    createNote() {
        this.showMessage = false
        this.createNoteBook = true
        this.readNoteBook = false
        this.deleteNoteBook = false
        this.editNoteBook = false
    }
    /**
  * @author Vanitha
  * @description To click read button
  */
    readNote() {
        this.createNoteBook = false
        this.readNoteBook = true
        this.deleteNoteBook = false
        this.editNoteBook = false
    }
    /**
  * @author Vanitha
  * @description To read create button
  */
    editNote() {
        this.createNoteBook = false
        this.readNoteBook = false
        this.deleteNoteBook = false
        this.editNoteBook = true
    }
    /**
  * @author Vanitha
  * @description To delete create button
  */
    deleteNote() {
        this.createNoteBook = false
        this.readNoteBook = false
        this.deleteNoteBook = true
        this.editNoteBook = false

    }
/**
  * @author Vanitha
  * @description To delete note book
  */
    deleteNoteBookdata(note) {
        var ind = this.displayNotes.findIndex(function (element) {
            return element.title === note.title;
        })
        var ind2 = this.dispalyNoteonSidebar.findIndex(function (element) {
            return element.title === note.title;
        })
        if (ind2 !== -1) {
            this.dispalyNoteonSidebar.splice(ind, 1)
        }
        if (ind !== -1) {
            this.displayNotes.splice(ind, 1)
        }
        localStorage.setItem("notesList", JSON.stringify(this.displayNotes))
        this.ngOnInit()
    }
/**
  * @author Vanitha
  * @description To update note button
  */
    updateNoteBook(note) {
        this.editNoteBook = false
        this.showMessageforSuccess = "NotBook updated successfully"
        setTimeout(() => {
            localStorage.setItem("notesList", JSON.stringify(this.displayNotes))
            this.showMessageforSuccess = ""
            this.readNote()
            this.ngOnInit()
        }, 2000)
    }

}
