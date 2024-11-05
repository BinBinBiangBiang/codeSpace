class Subject {
  constructor() {
      this.observers = [];
  }

  addObserver(observer) {
      this.observers.push(observer);
  }

  removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index > -1) {
          this.observers.splice(index, 1);
      }
  }

  notify(data) {
      this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  update(data) {
      console.log(`Observer notified with data: ${data}`);
  }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify("Hello Observers!"); // Observer notified with data: Hello Observers! (两次输出)