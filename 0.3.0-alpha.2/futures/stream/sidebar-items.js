initSidebarItems({"fn":[["empty","Creates a stream which contains no elements."],["futures_ordered","Converts a list of futures into a `Stream` of results from the futures."],["futures_unordered","Converts a list of futures into a [`Stream`] of outputs from the futures."],["iter","Converts an `Iterator` into a `Stream` which is always ready to yield the next value."],["once","Creates a stream of single element"],["poll_fn","Creates a new stream wrapping around a function returning `Poll`."],["repeat","Create a stream which produces the same item repeatedly."],["unfold","Creates a `Stream` from a seed and a closure returning a `Future`."]],"struct":[["BufferUnordered","An adaptor for a stream of futures to execute the futures concurrently, if possible, delivering results as they become available."],["Buffered","An adaptor for a stream of futures to execute the futures concurrently, if possible."],["CatchUnwind","Stream for the `catch_unwind` combinator."],["Chain","An adapter for chaining the output of two streams."],["Chunks","An adaptor that chunks up elements in a vector."],["Collect","A future which collects all of the values of a stream into a vector."],["Concat","A stream combinator to concatenate the results of a stream into the first yielded item."],["Empty","A stream which contains no elements."],["ErrInto","Stream for the `err_into` combinator."],["Filter","A stream combinator used to filter the results of a stream and only yield some values."],["FilterMap","A combinator used to filter the results of a stream and simultaneously map them to a different type."],["Flatten","A combinator used to flatten a stream-of-streams into one long stream of elements."],["Fold","A future used to collect all the results of a stream into one generic type."],["ForEach","A stream combinator which executes a unit closure over each item on a stream."],["Forward","Future for the `Stream::forward` combinator, which sends a stream of values to a sink and then flushes the sink."],["Fuse","A stream which \"fuse\"s a stream once it's terminated."],["FuturesOrdered","An unbounded queue of futures."],["FuturesUnordered","A set of futures which may complete in any order."],["Inspect","Do something with the items of a stream, passing it on."],["Iter","A stream which is just a shim over an underlying instance of `Iterator`."],["Map","A stream combinator which will change the type of a stream from one type to another."],["Next","A future of the next element of a stream."],["Once","A stream which emits single element and then EOF."],["Peekable","A `Stream` that implements a `peek` method."],["PollFn","A stream which adapts a function returning `Poll`."],["Repeat","Stream that produces the same element repeatedly."],["ReuniteError","Error indicating a `SplitSink<S>` and `SplitStream<S>` were not two halves of a `Stream + Split`, and thus could not be `reunite`d."],["Select","An adapter for merging the output of two streams."],["Skip","A stream combinator which skips a number of elements before continuing."],["SkipWhile","A stream combinator which skips elements of a stream while a predicate holds."],["SplitSink","A `Sink` part of the split pair"],["SplitStream","A `Stream` part of the split pair"],["StreamFuture","A combinator used to temporarily convert a stream into a future."],["Take","A stream combinator which returns a maximum number of elements."],["TakeWhile","A stream combinator which takes elements from a stream while a predicate holds."],["Then","A stream combinator which chains a computation onto each item produced by a stream."],["TryCollect","A future which attempts to collect all of the values of a stream."],["TryForEach","A stream combinator which attempts to execute an async closure over each future in a stream."],["TryNext","A future which attempts to collect all of the values of a stream."],["Unfold","A stream which creates futures, polls them and return their result"],["Zip","An adapter for merging the output of two streams."]],"trait":[["Stream","A stream of values produced asynchronously."],["StreamExt","An extension trait for `Stream`s that provides a variety of convenient combinator functions."],["TryStream","A convenience for streams that return `Result` values that includes a variety of adapters tailored to such futures."],["TryStreamExt","Adapters specific to `Result`-returning streams"]]});