import uid from '../types/uid';
import { v4 as uuid } from 'uuid';

class Todo {
    id: uid;
    text: string;
    checked: boolean = false;

    constructor(text: string) {
        this.id = uuid();
        this.text = text;
    }
}

export default Todo;
