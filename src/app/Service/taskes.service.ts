import { Injectable } from '@angular/core';
import { Tasks } from '../interfaces/tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskesService {

  tasks : Tasks[] = [
    {
      titel : "Assiment os"  ,
      description : "Report 6 pages for os course about Linux "
    },
    {
      titel : "Assiment Algorithm "  ,
      description : "Report 6 pages for os course about Linux "
    }

  ]
  constructor() { }

  deleteTask(i:number){
    this.tasks.splice(i,1);
  }
}
