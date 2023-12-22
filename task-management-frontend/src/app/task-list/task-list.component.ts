import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: any[] = []; // Input property to receive tasks from parent component
  @Output() taskSelected: EventEmitter<any> = new EventEmitter<any>(); // Output event to emit selected task

  selectTask(task: any): void {
    this.taskSelected.emit(task); // Emit the selected task to the parent component
  }
}
