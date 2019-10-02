(function() {var implementors = {};
implementors["futures_channel"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.Receiver.html\" title=\"struct futures_channel::mpsc::Receiver\">Receiver</a>&lt;T&gt;",synthetic:false,types:["futures_channel::mpsc::Receiver"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.UnboundedReceiver.html\" title=\"struct futures_channel::mpsc::UnboundedReceiver\">UnboundedReceiver</a>&lt;T&gt;",synthetic:false,types:["futures_channel::mpsc::UnboundedReceiver"]},];
implementors["futures_core"] = [];
implementors["futures_test"] = [{text:"impl&lt;Fut:&nbsp;<a class=\"trait\" href=\"futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a>&gt; <a class=\"trait\" href=\"futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"futures_test/future/struct.InterleavePending.html\" title=\"struct futures_test::future::InterleavePending\">InterleavePending</a>&lt;Fut&gt;",synthetic:false,types:["futures_test::interleave_pending::InterleavePending"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()