initSidebarItems({"enum":[["MaybeDone","A future that may have completed."]],"fn":[["abortable","Creates a new `Abortable` future and a `AbortHandle` which can be used to stop it."],["empty","Creates a future which never resolves, representing a computation that never finishes."],["lazy","Creates a new future that allows delayed execution of a closure."],["maybe_done","Wraps a future into a `MaybeDone`"],["poll_fn","Creates a new future wrapping around a function returning [`Poll`]."],["ready","Create a future that is immediately ready with a value."]],"struct":[["AbortHandle","A handle to a `Abortable` future."],["AbortRegistration","A registration handle for a `Abortable` future. Values of this type can be acquired from `AbortHandle::new` and are used in calls to `Abortable::new`."],["Abortable","A future which can be remotely short-circuited using an `AbortHandle`."],["Aborted","Indicator that the `Abortable` future was aborted."],["AndThen","Future for the `and_then` combinator."],["CatchUnwind","Future for the `catch_unwind` combinator."],["Empty","A future which is never resolved."],["ErrInto","Future for the `err_into` combinator."],["Flatten","Future for the `flatten` combinator."],["FlattenSink","Future for the `flatten_sink` combinator."],["FlattenStream","Future for the `flatten_stream` combinator, flattening a future-of-a-stream to get just the result of the final stream as a stream."],["Fuse","A future which \"fuses\" a future once it's been resolved."],["FutureObj","A custom trait object for polling futures, roughly akin to `Box<dyn Future<Output = T> + Send + 'a>`."],["Inspect","Do something with the item of a future, passing it on."],["IntoFuture","Future for the `into_future` combinator."],["IntoStream","A type which converts a `Future` into a `Stream` containing a single element."],["Join","Future for the `join` combinator, waiting for two futures to complete."],["Join3","Future for the `join3` combinator, waiting for three futures to complete."],["Join4","Future for the `join4` combinator, waiting for four futures to complete."],["Join5","Future for the `join5` combinator, waiting for five futures to complete."],["Lazy","A future which, when polled, invokes a closure and yields its result."],["LocalFutureObj","A custom trait object for polling futures, roughly akin to `Box<dyn Future<Output = T> + 'a>`."],["Map","Future for the `map` combinator, changing the type of a future."],["MapErr","Future for the `map_err` combinator."],["MapOk","Future for the `map_ok` combinator."],["OptionFuture","A future representing a value which may or may not be present."],["OrElse","Future for the `or_else` combinator."],["PollFn","A future which wraps a function returning [`Poll`]."],["Ready","A future that is immediately ready with a value"],["Shared","A future that is cloneable and can be polled in multiple threads. Use `Future::shared()` method to convert any future into a `Shared` future."],["Then","Future for the `then` combinator, chaining computations on the end of another future regardless of its outcome."],["UnwrapOrElse","Future for the `unwrap_or_else` combinator."],["WithExecutor","Future for the `with_executor` combinator, assigning an executor to be used when spawning other futures."]],"trait":[["Future","A future represents an asychronous computation."],["FutureExt","An extension trait for `Future`s that provides a variety of convenient adapters."],["TryFuture","A convenience for futures that return `Result` values that includes a variety of adapters tailored to such futures."],["TryFutureExt","Adapters specific to [`Result`]-returning futures"],["UnsafeFutureObj","A custom implementation of a future trait object for `FutureObj`, providing a hand-rolled vtable."]]});