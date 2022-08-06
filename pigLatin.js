function translatePigLatin(str) {
    let re = /^[^aeiou]+/i;
    let consonants = str.match(re);
    if(consonants !== null) {
        return str  
            .replace(re,'')
            .concat(consonants)
            .concat('ay')
    }
    return str.concat('way');
  }
  console.log(translatePigLatin("consonant"));

/* Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

*/