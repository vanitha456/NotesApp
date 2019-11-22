import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router/"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public userName:string =""
  constructor(private router:Router) { }

  ngOnInit() {
      if(localStorage.getItem("userName") != null && localStorage.getItem("userName") != undefined)
       this.userName = localStorage.getItem("userName")
  }
  logout(){
      localStorage.clear()
      sessionStorage.clear()
      this.router.navigate(["/"])
  }

}
