// -------- event loop --------- //

/*
The event loop is a critical component of the JavaScript runtime environment that manages the execution of asynchronous operations, such as callbacks and events, in a single-threaded manner. It is responsible for processing and dispatching events, ensuring that asynchronous tasks are executed at the appropriate times.

Here's an overview of how the event loop works in JavaScript:

1. call stack -> The call stack is a data structure that keeps track of the currently executing functions or tasks. When a function is called, it is added to the top of the call stack, and when a function completes, it is removed from the stack.

2. Task Queue -> the task queue, also known as callback queue or message queue, holds tasks or events that are ready to be processed. These tasks can include callbacks from asynchronous operations, user interactions, timer events or other events.

3. Event loop -> The event loop is continuously running process that checks the state of the call stack and the task queue. If the call stack is empty, the event loop for the tasks in the task queue.

4. Execution Of Tasks -> When the event loop finds a task in the task queue, it pushes the corresponding callback function onto the call stack for execution. The callback runs untill completion, potentially triggering more functions or initiating further asynchronous tasks.

5. Microtasks -> In addition to task queue, Javascript also has a microtask queue, which holds tasks with higher priority, such as promise callbacks(resolved or rejected promises).
Microtasks are processed  before the next task is taken from the task queue, This ensures that microtasks are executed as soon as possible, even if the event loop is still processing other tasks.


The event loop follows this cycle, continuously checking the call stack annd task queue, and processing tasks one by one.
It prevents long-running or blocking operations from stalling the execution of other code and allows JavaScript to handle asynchronous tasks effectively.
*/