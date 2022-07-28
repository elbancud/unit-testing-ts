import React, { useState, useEffect } from 'react';

function FetchComponent() {
  const [data, setData] = useState();
  useEffect(() => {
    let isMounted = true;
    fetch('/api')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (isMounted) {
          setData(data);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);
  return <div>{data && <div role='contentinfo'>Name is {data.name}</div>}</div>;
}
export default FetchComponent;
