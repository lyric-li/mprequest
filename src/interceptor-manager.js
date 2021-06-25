class InterceptorManager {

  handlers = [];

  use(fulfilledFn, rejectedFn) {
    this.handlers.push({
      fulfilledFn,
      rejectedFn,
    });
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

export default InterceptorManager;
