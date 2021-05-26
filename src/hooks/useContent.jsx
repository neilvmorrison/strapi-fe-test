import { useState, useEffect } from 'react';
import axios from 'axios';

const useContent = (url) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getContent = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(url);
        console.log(data);
        setContent(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getContent();
  }, []);
  return { loading, content, error };
};

export default useContent;
