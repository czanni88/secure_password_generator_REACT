export const ListOfPasswords = ({ severalSecurePasswords }) => {
  return (
    <>
      <h2>
        Here {severalSecurePasswords.length > 1 ? 'are' : 'is'} your Secure
        Password{severalSecurePasswords.length > 1 ? 's' : ''}
      </h2>
      <ul>
        {severalSecurePasswords.map((uniquePassword, index) => (
          <li key={index}>{uniquePassword}</li>
        ))}
      </ul>
    </>
  );
};
