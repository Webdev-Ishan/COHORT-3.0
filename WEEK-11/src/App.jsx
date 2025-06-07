import React, { useEffect, useState } from "react";

const useFetch = function () {
  const [post, setpost] = useState(null);

  const fetchdata = async () => {
    let response = await fetch("https://randomuser.me/api/");
    let data = await response.json();

    setpost(data);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return {
    post,
    fetchdata,
  };
};

const App = () => {
  const { post } = useFetch();

  return (
   <div>
      {post && post.results && post.results[0] && (
        <div>
          {post.results[0].name.first} {post.results[0].name.last}
        </div>
      )}
    </div>
  )
};

export default App;
