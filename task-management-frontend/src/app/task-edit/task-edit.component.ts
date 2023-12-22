import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent {
  @Input() taskToEdit: any; // Input property to receive the task to be edited from parent component
  @Output() updateTask: EventEmitter<any> = new EventEmitter<any>(); // Event emitter to send updated task data

  editedTask: any; // Local copy of the task to be edited

  ngOnChanges(): void {
    // When the taskToEdit changes, update the editedTask to reflect changes
    this.editedTask = { ...this.taskToEdit }; // Create a copy to avoid modifying the original task
  }

  saveEditedTask(): void {
    // Check if required fields are filled before updating the task
    if (this.editedTask.title && this.editedTask.description) {
      this.updateTask.emit(this.editedTask); // Emit the updated task to the parent component
    } else {
      alert('Please fill in required fields.'); // Show an alert if required fields are missing
    }
  }
}


