import React, { useState } from "react";
import { useFetch, usePrev, usePrevious, useDebounce } from "./Hooks";

const App = () => {
  const { post, loading } = useFetch("https://randomuser.me/api/");
  const { prev, fetchprev } = usePrev();
  const [val, setval] = useState(0);
  const value = usePrevious(val);
  const sendrequest = async () => {
    console.log("Hello");
  };
  const response = useDebounce(sendrequest);

  const showfetch = async () => {
    console.log(prev);
  };
  if (loading) {
    return <div>loading..</div>;
  }

  return (
    <div>
      {post && post.results && post.results[0] && (
        <div>
          {post.results[0].name.first} {post.results[0].name.last}
        </div>
      )}
      <br />
      <div>
        <input type="file" onChange={fetchprev} />
        <button type="submit" onSubmit={showfetch}>
          Fetch
        </button>
      </div>

      {prev && (
        <div>
          <button
            onClick={() => {
              setval((val) => {
                val + 1;
              });
            }}
          >
            {value}
          </button>
        </div>
      )}

      <br />
      <button onClick={() => setval((v) => v + 1)}>
        Previous: {value}, Current: {val}
      </button>
      <br />

      <input type="text" onChange={response} />
    </div>
  );
};

export default App;
