function countWords(sentence:string):number{
  return sentence.split(' ').length;
}
var n:number = countWords('my names is is khaled t moussa. I am 29 years old.');
console.log(n);
