import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service'; // Import your task service

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tasks: any[] = []; // Assuming tasks are stored as an array of objects

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTasks(); // Fetch tasks on component initialization
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(
      (data: any[]) => {
        this.tasks = data; // Assign retrieved tasks to component property
      },
      error => {
        console.error('Error fetching tasks', error);
      }
    );
  }
}
