import { Component, OnInit } from '@angular/core';
import { TaskesService } from '../../Service/taskes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})



export class HomeComponent  {

constructor(public tasksService : TaskesService){

}
deleteTask(i:number){
  this.tasksService.deleteTask(i);
}

}
