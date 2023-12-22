import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/tasks'; // Replace this with your backend API URL for tasks

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any[]> {
    // Fetch tasks from the backend API
    return this.http.get<any[]>(this.apiUrl);
  }

  getTaskById(id: number): Observable<any> {
    // Fetch a specific task by ID from the backend API
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createTask(taskData: any): Observable<any> {
    // Create a new task by sending data to the backend API
    return this.http.post<any>(this.apiUrl, taskData);
  }

  updateTask(id: number, updatedTask: any): Observable<any> {
    // Update an existing task by sending updated data to the backend API
    return this.http.put<any>(`${this.apiUrl}/${id}`, updatedTask);
  }

  deleteTask(id: number): Observable<any> {
    // Delete a task by ID using the backend API
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
