const words = (str) => {

//Declared array to hold splitted words
  let splittedWords;

  if (/\r|\n/.exec(str)) {
    //Eliminates Multiline
      splittedWords = str.split("\n");
  }
  else if (/\r|\t/.exec(str)) {
    //Elimantes Tabs
      splittedWords = str.split("\t");
  }
  else {
    //Else split using single spaces
      splittedWords = str.split(" ");
  }
  //Initialize Empty Boject to be returned
  let wordCounter = {};
//to handle property that exist on object's prototype
  if(splittedWords.indexOf('toString')) {
      splittedWords[splittedWords.indexOf('toString')] = "ToString";
  }

//loop through each word in splittedWords, increase the number if the word is in wordCounter, if not set it equal to 1
  for (let i=0; i<splittedWords.length; i++){
      if(wordCounter[splittedWords[i]] === undefined) {
        wordCounter[splittedWords[i]] = 1;
      }
      else{
        wordCounter[splittedWords[i]]++;
      }
  }

//return wordCounter as a JSON object
  return wordCounter;
}
// console.log(words("olly olly in come free"));

export default words;