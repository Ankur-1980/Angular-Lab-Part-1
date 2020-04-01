import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosMainComponent } from './components/todos-main/todos-main.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';
import { HeaderComponent } from './components/header/header.component';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { FilterFormComponent } from './components/filter-form/filter-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosMainComponent,
    TodoItemsComponent,
    HeaderComponent,
    TaskInputComponent,
    FilterFormComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
