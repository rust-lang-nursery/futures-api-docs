(function() {var implementors = {};
implementors["futures_util"] = [{text:"impl&lt;A, B&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"enum\" href=\"futures_util/future/enum.Either.html\" title=\"enum futures_util::future::Either\">Either</a>&lt;A, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>,&nbsp;</span>",synthetic:false,types:["futures_util::future::either::Either"]},{text:"impl&lt;St&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/try_stream/struct.IntoAsyncRead.html\" title=\"struct futures_util::try_stream::IntoAsyncRead\">IntoAsyncRead</a>&lt;St&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;St: <a class=\"trait\" href=\"futures_core/stream/trait.TryStream.html\" title=\"trait futures_core::stream::TryStream\">TryStream</a>&lt;Error = <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;St::<a class=\"type\" href=\"futures_core/stream/trait.TryStream.html#associatedtype.Ok\" title=\"type futures_core::stream::TryStream::Ok\">Ok</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;,&nbsp;</span>",synthetic:false,types:["futures_util::try_stream::into_async_read::IntoAsyncRead"]},{text:"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://docs.rs/tokio-io/0.1.12/tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead01</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/compat/struct.Compat01As03.html\" title=\"struct futures_util::compat::Compat01As03\">Compat01As03</a>&lt;R&gt;",synthetic:false,types:["futures_util::compat::compat01as03::Compat01As03"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.AllowStdIo.html\" title=\"struct futures_util::io::AllowStdIo\">AllowStdIo</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,&nbsp;</span>",synthetic:false,types:["futures_util::io::allow_std::AllowStdIo"]},{text:"impl&lt;R:&nbsp;<a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.BufReader.html\" title=\"struct futures_util::io::BufReader\">BufReader</a>&lt;R&gt;",synthetic:false,types:["futures_util::io::buf_reader::BufReader"]},{text:"impl&lt;R:&nbsp;<a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a>&gt; <a class=\"trait\" href=\"futures_util/io/trait.AsyncRead.html\" title=\"trait futures_util::io::AsyncRead\">AsyncRead</a> for <a class=\"struct\" href=\"futures_util/io/struct.ReadHalf.html\" title=\"struct futures_util::io::ReadHalf\">ReadHalf</a>&lt;R&gt;",synthetic:false,types:["futures_util::io::split::ReadHalf"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
