class CancelToken {

  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }

    this.promise = new Promise((resolve) => {
      this.resolvePromise = resolve;
    });
    
    executor(() => {
      this.resolvePromise();
    });
  }
}

module.exports = CancelToken;
