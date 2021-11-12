const Form = ({ handleChange, formValues, handleSubmit }) => {
  const {
    minLength,
    specialCharacters,
    charactersAsNumber,
    quantityOfPasswords,
  } = formValues;
  return (
    <>
      <form className='securePasswordForm' onSubmit={handleSubmit}>
        <div className='formInput'>
          <label htmlFor='minLength'>
            What is the minimum length desired for your password?
          </label>
          <input
            type='number'
            name='minLength'
            id='minLength'
            placeholder='Input value here'
            min={0}
            onChange={handleChange}
            value={minLength}
          />
        </div>

        <div className='formInput'>
          <label htmlFor='specialCharacters'>
            How many "Special Characters" would you like?
          </label>
          <input
            type='number'
            name='specialCharacters'
            id='specialCharacters'
            placeholder='Input value here'
            min={0}
            onChange={handleChange}
            value={specialCharacters}
          />
        </div>
        <div className='formInput'>
          <label htmlFor='charactersAsNumber'>
            How many "Characters as Number" would you like?
          </label>
          <input
            type='number'
            name='charactersAsNumber'
            id='charactersAsNumber'
            placeholder='Input value here'
            min={0}
            onChange={handleChange}
            value={charactersAsNumber}
          />
        </div>
        <div className='formInput'>
          <label htmlFor='quantityOfPasswords'>
            How may Secure Passwords would you like to generate?
          </label>
          <input
            type='number'
            name='quantityOfPasswords'
            id='quantityOfPasswords'
            min={1}
            onChange={handleChange}
            value={quantityOfPasswords}
          />
        </div>
        <button type='submit'>Generate Secure Password</button>
      </form>
    </>
  );
};

export default Form;
