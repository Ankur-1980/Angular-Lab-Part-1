import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosMainComponent } from './components/todos-main/todos-main.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosMainComponent,
    TodoItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
