// #1 +++
function palindrome(str) {
  console.log(str);
  let orig = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").toLowerCase().split(' ').join('').trim();
  let reverse = orig.toLowerCase().split("").reverse().join("").trim()

  console.log(orig, reverse)
  return orig === reverse ? true : false
}

// console.log(palindrome('!  An n,a'));
// console.log(palindrome('Te ne!t'));
// console.log(palindrome('John'));
// console.log(palindrome('!J,oh n'));


// #2 +++
function annagram(word1, word2) {
  let clean1 = word1.replace(/[.,\/#№?\d@!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ").toLowerCase().split(' ').join('').trim();
  let clean2 = word2.replace(/[.,\/#№?\d@!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ").toLowerCase().split(' ').join('').trim();
  console.log(clean1, clean2)

  let newStr1 = clean1.split('').sort().join('')
  let newStr2 = clean2.split('').sort().join('')
  console.log(newStr1, newStr2)

  if (newStr1.length === newStr2.length) {
    return newStr1 === newStr2 ? true : false
  } else {
    return false
  }
}

// annagram("!! 44б №а ?*вба", "ва ,, б345аб")
// console.log(annagram("!! 44б №а ?*вба", "ва ,, б345аб"))
// console.log(annagram("@! $% hel33l ?! o", "5555 d"))


// #3 +++
function numberOfVowels(str3) {
  let arr3 = str3.split('')
  console.log(arr3)

  let arrV = ['a', 'e', 'i', 'o', 'u']
  let counter = 0;

  arr3.forEach(item => {
    if (arrV.includes(item) ) {
      counter++
    }
  })
  console.log("кол-во гласных: ", counter)
}

// numberOfVowels('anna')
// numberOfVowels('begimai')
// numberOfVowels('aaa')
// numberOfVowels('ddd')


// #4 +++
let arr4 = []

function recursion(x, y){
  let a = 0
  let b = 0

  if(x > y) {
    a = y;
    b = x;
  } else if(x < y) {
    a = x;
    b = y;
  } else {
     return arr4
  }
  if(b % 2 === 0) arr4.push(b)
  return recursion(a, b - 1)

  
}

// console.log(recursion(10, 1))
// console.log(recursion(1, 10))



