import React, { useState } from 'react';
import { processBfhlData } from '../services/api';

const BfhlForm = ({ setResponse }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const parsedInput = JSON.parse(input);
      if (!parsedInput.data || !Array.isArray(parsedInput.data)) {
        throw new Error('Invalid input format');
      }

      const result = await processBfhlData(parsedInput);
      setResponse(result);
    } catch (err) {
      setError('Invalid JSON input');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Enter JSON data (e.g., {"data": ["A","1","B","2"]})'
      />
      <button type="submit">Submit</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default BfhlForm;