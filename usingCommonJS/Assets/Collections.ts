interface Collection<T> {
  push(value: T): void;
  pop(): T;
  peek(): T;
  isEmpty(): boolean;
}

class Stack<T> implements Collection<T>{
  _store: T[] = [];

  push(value: T) {
    this._store.push(value);
  }
  pop(): T | undefined {
    return this._store.pop();
  }

  peek() : T | undefined {
      return this._store[0];
  }

  isEmpty() : boolean {
      return (this._store.length == 0);
  }
}

class Queue<T> implements Collection<T> {
  _store: T[] = [];

  push(value: T) {
    this._store.push(value);
  }

  pop(): T | undefined {
    return this._store.shift();
  }

  peek(): T | undefined {
      return this._store[0];
  }

  isEmpty() : boolean {
      return (this._store.length == 0);
  }
}