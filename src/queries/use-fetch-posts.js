import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchPosts() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    console.log("it is mounted");

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (isMounted) {
          setData(response.data);
        }
      } catch (error) {
        if (isMounted) {
          setIsError(true);
          setError(error.message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      console.log("it is unmounted");
    };
  }, []);

  return { data, isLoading, isError, error };
}
