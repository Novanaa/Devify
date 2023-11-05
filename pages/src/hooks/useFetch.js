import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const result = await res.json();
      setIsLoading(false);
      setDatas(result);
    } catch (err) {
      setIsLoading(false);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    datas,
    isLoading,
    error,
  };
};

export default useFetch;
