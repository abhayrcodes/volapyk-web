'use client'

// pages/somepage.tsx
import React, { useState, useEffect } from 'react';

const SomePage: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Define the URL of your API route
    const apiUrl = '/api/database';

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (data === null) {
    // Loading state while data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data from API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default SomePage;
