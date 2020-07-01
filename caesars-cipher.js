function rot13(str) {
  let caesarsCipherStringResult = "";
  let startingLetterOfTheEnglishAlphabet = "abcdefghijklm".toUpperCase();
  let endingLetterOfTheEnglishAlphabet = "nopqrstuvwxyz".toUpperCase();

  for (let i = 0; i < str.length; i++) {
    let letterOfTheEnglishAlphabetToDecipher = str[i];

    if (startingLetterOfTheEnglishAlphabet.indexOf(letterOfTheEnglishAlphabetToDecipher) >= 0) {
      caesarsCipherStringResult += endingLetterOfTheEnglishAlphabet[startingLetterOfTheEnglishAlphabet.indexOf(letterOfTheEnglishAlphabetToDecipher)];
    } else if (endingLetterOfTheEnglishAlphabet.indexOf(letterOfTheEnglishAlphabetToDecipher) >= 0) {
      caesarsCipherStringResult += startingLetterOfTheEnglishAlphabet[endingLetterOfTheEnglishAlphabet.indexOf(letterOfTheEnglishAlphabetToDecipher)];
    } else {
      caesarsCipherStringResult += letterOfTheEnglishAlphabetToDecipher;
    }
  }
  return caesarsCipherStringResult;
}

rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC"));