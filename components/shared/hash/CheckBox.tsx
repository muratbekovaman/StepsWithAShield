import React, { useState } from 'react';
import {sha256, sha224} from 'js-sha256';
import Select, { SingleValue }  from 'react-select';

const encryptionMethods = [
  { value: 'sha256', label: 'SHA-256' },
  { value: 'sha224', label: 'SHA-224' },
];

const Encryption = () => {
  const [inputText, setInputText] = useState('');
  const [method, setMethod] = useState(encryptionMethods[0]);
  const [result, setResult] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleMethodChange = (selectedMethod: SingleValue<{ value: string; label: string }>) => {
    if (selectedMethod) {
      setMethod(selectedMethod);
    }
  };
  const handleEncryptClick = () => {
    if (method.value === 'sha256') {
      setResult(sha256(inputText));
    } else {
      setResult(sha224(inputText));
    }
  };

  return (
    <div>
      <h1>Text Encryption</h1>
      <textarea className='text-dark-500 w-full rounded-xl pl-20 pt-1' value={inputText} onChange={handleInputChange} />
      <Select options={encryptionMethods} value={method} className='text-dark-500' onChange={handleMethodChange} />
      <button className='p-5 bg-primary rounded-2xl m-3' onClick={handleEncryptClick}>ШИФРОВАТЬ</button>
      <p>{result}</p>
    </div>
  );
};

export default Encryption;