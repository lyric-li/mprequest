class InterceptorManager {

  handlers = [];

  use(fulfilledFn, rejectedFn) {
    this.handlers.push({
      fulfilledFn,
      rejectedFn,
    });
  }
}

export default InterceptorManager;
