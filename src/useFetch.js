import React, { useEffect, useState } from "react";
const Api_Endpoint = "https://www.googleapis.com/books/v1/volumes?";
const useFetch = (urlparams) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchBook(`${Api_Endpoint}${urlparams}`);
  }, [urlparams]);
  const fetchBook = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setData(data.items);
    setLoading(false);
  };

  return { loading, data };
};

export default useFetch;
