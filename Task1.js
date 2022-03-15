function longestWord(str) {
  // let regex = /([^A-Z a-z])+/g;
  // let words = str.replace(regex, "").split(" ");
    let words = str.split(" "); 
    let longestWord = "";
  
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    
    return longestWord;
    }
  
    console.log(longestWord("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"));