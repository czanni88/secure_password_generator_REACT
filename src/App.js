import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import { ListOfPasswords } from './components/ListOfPasswords';
import {
  generateRegularChars,
  generateSpecialChars,
  generateCharsAsNumber,
} from './functions/functions';

function App() {
  const formInputsValues = {
    minLength: '',
    specialCharacters: '',
    charactersAsNumber: '',
    quantityOfPasswords: 1,
  };

  const [formValues, setFormValues] = useState(formInputsValues);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [severalSecurePasswords, setSeveralSecurePasswords] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: parseInt(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    const {
      minLength,
      specialCharacters,
      charactersAsNumber,
      quantityOfPasswords,
    } = formValues;

    let quantOfRegularChars = 0;
    if (minLength > specialCharacters + charactersAsNumber) {
      quantOfRegularChars =
        minLength - (specialCharacters + charactersAsNumber);
    }

    let severalSecurePasswords = [];

    for (let i = 0; i < quantityOfPasswords; i++) {
      // Each function generate one array of random characters of the same type

      let randomSpecialChars = generateSpecialChars(specialCharacters);

      let randomCharsAsNumber = generateCharsAsNumber(charactersAsNumber);

      let randomRegularChars = generateRegularChars(quantOfRegularChars);

      let singleSecurePassword = [
        ...randomCharsAsNumber,
        ...randomSpecialChars,
        ...randomRegularChars,
      ].join('');

      severalSecurePasswords.push(singleSecurePassword);

      setSeveralSecurePasswords(severalSecurePasswords);
      console.log(severalSecurePasswords);
    }
  };

  return (
    <div className='App'>
      <h1>Secure Password Generator</h1>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formValues={formValues}
      />
      {isSubmitted && (
        <ListOfPasswords severalSecurePasswords={severalSecurePasswords} />
      )}
    </div>
  );
}

export default App;
