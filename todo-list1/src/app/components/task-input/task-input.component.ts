import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  task: string;
  id: number = 6;

  constructor() {}

  ngOnInit(): void {}

  addTask() {
    const todo = {
      id: this.id++,
      task: this.task,
      completed: false
    };

    this.addTodo.emit(todo);
  }
}
