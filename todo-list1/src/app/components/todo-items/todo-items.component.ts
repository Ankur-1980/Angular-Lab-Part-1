import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  completed() {
    this.todo.complete = !this.todo.complete;
  }

  // dynamic classes
  onCompletion() {
    let classes = {
      'if-complete': this.todo.complete
    };
    return classes;
  }

  deleteTask(todo) {
    this.deleteTodo.emit(todo);

    // this.todo = this.todo.filter(t => t.task !== todo.task);
  }
}
