import React, { useEffect, useRef, useState } from "react";

export const useFetch = function (url) {
  const [post, setpost] = useState(null);
  const [loading, setloading] = useState(true);

  const fetchdata = async () => {
    let response = await fetch(url);
    let data = await response.json();

    setpost(data);
    setloading(false);
  };

  useEffect(() => {
    fetchdata();
  }, [url]);

  return {
    post,
    loading,
  };
};

export const usePrev = function () {
  const [prev, setprev] = useState(null);

  const fetchprev = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const arr = e.target.result;
      setprev(arr.slice(0, 10));
    };
    reader.onerror = () => {
      setprev("Error occurred");
    };
    if (file) {
      reader.readAsText(file);
    }
  };

  return { prev, fetchprev };
};

export const usePrevious = (state) => {
  const prevref = useRef();

  useEffect(() => {
    prevref.current = state;
  }, [state]);

  return prevref.current;
};
