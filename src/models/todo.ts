import uid from "../types/uid";
import { v4 as uuid } from "uuid";

class Todo {
  id: uid;
  text: string;
  checked: boolean;

  constructor(text: string) {
    this.id = uuid();
    this.text = text;
    this.checked = false;
  }
}

export default Todo;
