import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'alphabets', label: 'Alphabets' },
  { value: 'numbers', label: 'Numbers' },
  { value: 'highest_lowercase_alphabet', label: 'Highest lowercase alphabet' }
];

const ResponseDisplay = ({ response }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  const filteredResponse = Object.keys(response)
    .filter(key => selectedOptions.some(option => option.value === key))
    .reduce((obj, key) => {
      obj[key] = response[key];
      return obj;
    }, {});

  return (
    <div>
      <Select
        isMulti
        options={options}
        onChange={handleChange}
        value={selectedOptions}
      />
      <pre>{JSON.stringify(filteredResponse, null, 2)}</pre>
    </div>
  );
};

export default ResponseDisplay;