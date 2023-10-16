function reverseWordsInSentence(sentence) {
    
    const words = sentence.split(/\s+/);
    
 
    const reversedWords = words.map(word => reverseWord(word));

   
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
   
    return word.split('').reverse().join('');
}

const input = "This is a sunny day in JavaScript";
const reversedSentence = reverseWordsInSentence(input);
console.log(reversedSentence);
