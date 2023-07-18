// --------- threading ------------ //

/*

Threading in programming languages refers to the concept of executing multiple threads of code concurrently within a single program. A thread is a lightweight unit of execution that can run independently and concurrently with other threads within the same process.

Threads allow programs to perform multiple tasks simultaneously, taking advantage of modern multi-core processors and improving overall performance and responsiveness. Different programming languages provide various mechanisms to support threading, and the details and capabilities can vary.

Here are some key points related to threading in programming languages:

Thread Creation: Most programming languages provide built-in constructs or libraries to create and manage threads. These constructs allow developers to create new threads and specify the code that each thread should execute concurrently.

Concurrency and Parallelism: Threading enables concurrent execution, which means multiple threads can make progress at the same time, even on a single processor. However, true parallelism is achieved when multiple threads execute simultaneously on multiple processors or cores.

Shared Memory: Threads within a process typically share the same memory space, allowing them to access and modify shared data. However, this shared memory can introduce synchronization and data consistency issues, which need to be carefully managed using synchronization mechanisms like locks, semaphores, or atomic operations.

Thread Scheduling: The operating system or language runtime is responsible for scheduling and managing the execution of threads. Schedulers allocate CPU time to threads based on various policies, such as priority, fairness, or time slicing.

Thread Coordination and Communication: Threads often need to coordinate their activities or exchange data. Programming languages provide synchronization mechanisms (e.g., mutexes, condition variables, barriers) and inter-thread communication mechanisms (e.g., message passing, shared queues) to facilitate coordination and communication between threads.

Thread Safety: Writing thread-safe code is crucial when working with multiple threads. Thread safety ensures that concurrent access to shared resources or data does not result in data corruption or unexpected behavior. Techniques like locking, atomic operations, and avoiding shared mutable state are used to achieve thread safety.

It's important to note that threading introduces complexities and challenges, such as race conditions, deadlocks, and synchronization overhead. Some languages provide higher-level abstractions, such as futures, promises, or async/await, to simplify concurrent programming and mitigate the complexities associated with low-level thread management.

Overall, threading is a powerful tool that enables concurrent and parallel execution in programming languages, allowing developers to harness the capabilities of modern hardware and improve the performance and responsiveness of their applications.


*/



// Javascript is synchronous and single threaded

/*
JavaScript is primarily known as a single-threaded and synchronous programming language. This means that JavaScript executes code sequentially, one line at a time, and only one operation can be processed at a given time.

When JavaScript encounters a time-consuming operation, such as making an HTTP request or performing a complex computation, it can block the execution of subsequent code until that operation is completed. This behavior is often referred to as blocking or synchronous behavior. During the blocking period, the JavaScript engine is effectively idle.

However, JavaScript also has built-in support for asynchronous operations through the use of callbacks, Promises, and more recently, async/await. These mechanisms allow developers to work with non-blocking code, where time-consuming operations can be initiated, and the JavaScript engine can continue executing other code without waiting for the operation to complete. Once the asynchronous operation finishes, a callback is executed, or a Promise is resolved, and the corresponding code is executed.

It's important to note that while JavaScript supports asynchronous operations, it still operates within a single thread. This means that even with asynchronous code, only one task is being executed at a time. Asynchronous operations in JavaScript are typically handled by event loops, which manage the execution of asynchronous tasks and ensure that callbacks or Promise resolutions are processed when appropriate.

The single-threaded nature of JavaScript simplifies its programming model and helps ensure consistency and predictability. However, it also means that long-running or blocking operations can impact the responsiveness of the program or user interface. To mitigate this, developers can leverage asynchronous programming techniques to delegate time-consuming tasks to background threads or utilize Web Workers for parallel execution in web applications.

It's worth mentioning that recent advancements in JavaScript, such as WebAssembly and the Worker API, provide support for multi-threading in certain contexts, allowing developers to perform heavy computations in separate threads. However, these features are not part of the core JavaScript language and have specific use cases and limitations.
*/