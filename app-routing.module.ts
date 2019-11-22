import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
    {path:"",component:WelcomePageComponent,pathMatch:"full"},
    {path:"notes",component:NotesComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
        
  exports: [RouterModule]
})
export class AppRoutingModule { }
