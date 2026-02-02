const { Worker } = require("worker_threads");

// Multi-Threading ---> Creating multiple threads for concurrency

new Worker("./thread1"); // thread 1
new Worker("./thread2"); // thread 2
new Worker("./thread3"); // thread 3
