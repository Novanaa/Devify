import { useState, useEffect } from "react";

export const useQuery = (url, q) => {
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [length, setLength] = useState(null);
  const [validate, setValidate] = useState(null);

  const fetchDatas = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const result = await res.json();
      setDatas(result.queries);
      setValidate(result.isValidate);
      setLength(result.queries.length);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, [q]);

  return {
    datas,
    isLoading,
    error,
    length,
    validate,
  };
};
