
import { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('http://localhost:3000/dummy')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  );
};

export default App;
