function fearNotLetter(str) {
    let firstCharCode = str.charCodeAt(0);
    let target = undefined;
  
    str
      .split("")
      .forEach(char => {
        if (char.charCodeAt(0) === firstCharCode) {
          firstCharCode++;
        } else {
          target = String.fromCharCode(firstCharCode);
        }
      });
  
    return target;
  }

  console.log(fearNotLetter("abce"));

/*Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
0. regex matchAll or match then convert to string
1. could use two lists. list of every value between the begining and end, and a list of the str given. 
2. could use filter? we have the alphabet, and we want to return everything NOT present in str

*/