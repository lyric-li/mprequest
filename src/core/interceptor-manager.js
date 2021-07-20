class InterceptorManager {

  handlers = [];

  use(fulfilledFn, rejectedFn) {
    this.handlers.push({
      fulfilledFn,
      rejectedFn,
    });
    return this.handlers.length - 1;
  }

  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  foreach(fn) {
    const { handlers } = this;
    while (handlers.length) {
      const { fulfilledFn, rejectedFn } = handlers.shift();       
      try {
        fn(fulfilledFn, rejectedFn);
      } catch (error) {
        break;
      }
    }
  }
}

module.exports = InterceptorManager;
