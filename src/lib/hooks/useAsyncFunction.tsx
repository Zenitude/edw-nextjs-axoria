/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";

export const useAsyncFunction = (fn: any) => {
  const [ loading, setLoading ] = useState(false);
  const [ result, setResult ] = useState(null);
  const [ error, setError ] = useState<string | null>(null);

  const getResult = useCallback(async (fn: any) => {
    setLoading(true);
    setError(null);

    try {
      const result = await fn();
      setResult(result);
    } catch(error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [fn]);

  useEffect(() => {
    getResult(fn);
  }, []);

  return { result, loading, error}
}