class Singleton {
  constructor() {
      if (!Singleton.instance) {
          Singleton.instance = this;
      }
      return Singleton.instance;
  }

  static getInstance() {
      if (!this.instance) {
          this.instance = new Singleton();
      }
      return this.instance;
  }

  sayHello() {
      console.log("Hello, I am the singleton!");
  }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true
instance1.sayHello(); // Hello, I am the singleton!