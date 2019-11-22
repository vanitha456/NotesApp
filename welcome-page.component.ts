import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router/"
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
 public userName: string =""
  constructor(private router:Router) { }
public showMessage =""
  ngOnInit() {
  }
  clickMade(){
      if(this.userName == ""){
          this.showMessage="Please enter your Name"
      }else{
      this.router.navigate(["notes"])
      localStorage.setItem("userName",this.userName)
      }
  }
  changeName(){
      this.showMessage = ""
  }

}
