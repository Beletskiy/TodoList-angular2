import {Component, OnInit} from 'angular2/core';
import {Todo} from './todo';
import {TodoList} from './todo_list';
import {TodoForm} from './todo_form';
import {TodoService} from './todo.service';

@Component({
    //changeDetection: ChangeDetectionStrategy.OnPush, for perfomance?
    selector: 'todo-app',
    templateUrl: 'app/todo_app.html',
    styles: ['a { cursor: pointer; cursor: hand; }'],
    directives: [TodoList, TodoForm],
    providers: [TodoService]
})
export class TodoApp implements OnInit {
    todos:Todo[];

    constructor(private _todoService:TodoService) {
    }

    getServices() {
        this.todos = this._todoService.getServices();
    }

    get remaining() {
        return this.todos.reduce((count:number, todo:Todo) => count + +!todo.done, 0);
    }

    archive():void {
        var oldTodos = this.todos;
        this.todos = [];
        oldTodos.forEach((todo:Todo) => {
            if (!todo.done) this.todos.push(todo);
        });
    }

    addTask(task:Todo) {
        this.todos.push(task);
    }

    ngOnInit() {
        this.getServices();
    }
}
