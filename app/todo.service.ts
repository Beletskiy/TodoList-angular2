import {TODOS} from './mock-services';
import {Injectable} from 'angular2/core';

@Injectable()
export class TodoService {
    getServices() {
        return TODOS;
    }
}
