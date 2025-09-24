import { useEffect, useState } from "react";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const useGenre = () => {
  const [data, setData] = useState<Genre[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      try {
        setData(genres);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
        setIsLoading(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return { data, isLoading, error };
};
