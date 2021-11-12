const charsDataBase = {
  regularChars: [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ],
  specialChars: ['!', '§', '$', '%', '&', '/', '(', ')', '=', '?', 'ß'],
};

// Each function generate one array of random characters of the same type

export const generateSpecialChars = (specialCharsInput) => {
  let arrOfSpecialChars = [];

  for (let i = 0; i < specialCharsInput; i++) {
    arrOfSpecialChars.push(
      charsDataBase.specialChars[
        Math.floor(Math.random() * charsDataBase.specialChars.length)
      ]
    );
  }
  return arrOfSpecialChars;
};

export const generateCharsAsNumber = (charsAsNumberInput) => {
  let arrOfCharsAsNumber = [];

  for (let i = 0; i < charsAsNumberInput; i++) {
    arrOfCharsAsNumber.push(Math.floor(Math.random() * 10));
  }
  return arrOfCharsAsNumber;
};

export const generateRegularChars = (quantOfRegularChars) => {
  let arrOfRegularChars = [];

  for (let i = 0; i < quantOfRegularChars; i++) {
    arrOfRegularChars.push(
      charsDataBase.regularChars[
        Math.floor(Math.random() * charsDataBase.regularChars.length)
      ]
    );
  }
  return arrOfRegularChars;
};
