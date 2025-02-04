import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import CommonModule and FormsModule
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: string[] = []; // Stores tasks
  newTodo: string = ''; // Stores user input

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push(this.newTodo.trim()); // Add task
      this.newTodo = ''; // Clear input
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1); // Remove task
  }
}
