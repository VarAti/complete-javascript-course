function isPangram(string) {
  //...
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  const str = [...string.toLowerCase()];
  console.log(str);

  for (let c of str) {
    if (c.match('[a-z]')) {
      const index = alphabet.indexOf(c);
      if (index >= 0) {
        alphabet.splice(index, 1);
      }
    }
  }
  console.log(alphabet);
  return alphabet.length == 0;
}
let s =
  'A pangram is a sentence that contains every single letter of the alphabet at least once.';
// console.log(isPangram(s));

function tribonacci(signature, n) {
  //your code here
  if (n === 0) return [];
  if (n === 1) return [1];
  const res = [...signature];
  for (let i = 0; i < n - 3; i++) {
    res.push(
      res.slice(i, i + 3).reduce(function (x, y) {
        return x + y;
      }, 0)
    );
  }
  return res.slice(0, n);
}

//const result = tribonacci([1, 1, 1], 1);
//console.log(result);

function orderWeight(strng) {
  // your code
  origArr = [];
  for (let data of strng.split(' ')) {
    const obj = {};
    obj.origWeight = data;
    obj.calcWeight = (function (data) {
      sum = 0;
      data.split('').forEach((element) => {
        sum += +element;
      });
      return sum;
    })(data);
    origArr.push(obj);
  }
  const result = [];
  origArr.sort(compareFn).forEach((a) => result.push(a.origWeight));
  const resultStr = result.join(' ');
  console.log(resultStr);
  return resultStr;

  function compareFn(a, b, ch = 0) {
    if (a.calcWeight - b.calcWeight < 0) {
      console.log('compare -1');
      return -1;
    } else if (a.calcWeight - b.calcWeight > 0) {
      console.log('compare 1');
      return 1;
    } else {
      if (a.origWeight.charAt(ch) && b.origWeight.charAt(ch)) {
        if (a.origWeight.charAt(ch) - b.origWeight.charAt(ch) < 0) return -1;
        else if (a.origWeight.charAt(ch) - b.origWeight.charAt(ch) > 0)
          return 1;
        else return compareFn(a, b, ++ch);
      } else return a.origWeight.length - b.origWeight.length;
    }
  }
}
//orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123');

function solution(roman) {
  // complete the solution by transforming the
  // string roman numeral into an integer
  const romanDigits = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  sum = 0;
  romanNumber = [...roman];
  for (const [index, value] of romanNumber.entries()) {
    let add = 0;

    if (['I', 'X', 'C'].includes(value)) {
      switch (romanNumber[index + 1]) {
        case 'V':
          add = value === 'I' ? -1 : romanDigits.get(value);
          break;
        case 'X':
          add = value === 'I' ? -1 : romanDigits.get(value);
          break;
        case 'L':
          add = value === 'X' ? -10 : romanDigits.get(value);
          break;
        case 'C':
          add = value === 'X' ? -10 : romanDigits.get(value);
          break;
        case 'D':
          add = value === 'C' ? -100 : romanDigits.get(value);
          break;
        case 'M':
          add = value === 'C' ? -100 : romanDigits.get(value);
          break;
        default:
          add = romanDigits.get(value);
      }
    } else {
      add = romanDigits.get(value);
    }
    sum += add;
    console.log(sum);
  }
  return sum;
}

//console.log(solution('MMCCCLXXXIX'));

let d = new Date();
//console.log(d);

function pigIt(str) {
  //Code here
  result = [];
  str = str.split(' ');
  for (let word of str) {
    if (word.match('[^a-zA-Z]{1}')) {
      result.push(word);
      continue;
    }
    word = word.split('');
    const firstChar = word.shift();
    word.push(firstChar);
    const newWord = word.join('') + 'ay';
    result.push(newWord);
  }
  return result.join(' ');
}
//console.log(pigIt('Pig latin is cool !'));

function count(string) {
  console.log(string);
  if (!string) return {};
  result = {};
  for (let char of [...string]) {
    result[char] = result[char] ? result[char] + 1 : 1;
  }
  return result;
}

//console.table(count('aba'));

function findMissingLetter(array) {
  let codePoint = array[0].codePointAt(0);
  for (let char of array) {
    if (codePoint != char.codePointAt(0)) {
      return String.fromCodePoint(codePoint);
    }
    codePoint++;
  }
}

// console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.pages = [];
    let page = [];
    this.index = {};
    for (const [i, item] of collection.entries()) {
      if (page.length == itemsPerPage) {
        this.pages.push(page);
        page = [];
      }
      this.index[i] = {};
      this.index[i].itemPages = this.pages.length;
      this.index[i].itemPage = page.length;
      page.push(item);
    }
    if (page.length > 0) this.pages.push(page);
    //console.table(index);
    //console.table(pages);
  }
  itemCount() {
    // returns the number of items within the entire collection
    return Object.keys(this.index).length;
  }
  pageCount() {
    // returns the number of pages
    return this.pages.length;
  }
  pageItemCount(pageIndex) {
    const validPageIndex =
      pageIndex >= 0 ? this.pages.at(pageIndex) : undefined;
    return validPageIndex ? validPageIndex.length : -1;
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
  }
  pageIndex(itemIndex) {
    try {
      return this.index[itemIndex].itemPages;
    } catch (error) {
      return -1;
    }
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
  }
}

const collection = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];
const helper = new PaginationHelper(collection, 10);
// console.log(helper.pageItemCount(-1));

function cakes(recipe, available) {
  const ingredientsForCakes = [];
  for (const ing of Object.keys(recipe)) {
    if (!available[ing]) return 0;
    const ingForCake = Math.floor(available[ing] / recipe[ing]);
    ingredientsForCakes.push(ingForCake);
  }
  return Math.min(...ingredientsForCakes);
}
recipe = { flour: 500, sugar: 200, eggs: 1 };
available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
//console.log(cakes(recipe, available));

const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;

const regFromCW = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;

const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^\p{P}\p{S}]?[a-zA-Z0-9]{6,}$/u;

const temp = /^[^\p{P}\p{S}]+$/u;

const pwd = 'UbzSH1';

//console.log(pwdRegex.test(pwd));

function rgb(r, g, b) {
  // complete this function
  r = r > 255 ? 255 : r < 0 ? 0 : r;
  g = g > 255 ? 255 : g < 0 ? 0 : g;
  b = b > 255 ? 255 : b < 0 ? 0 : b;

  red = r < 16 ? '0' + r.toString(16) : r.toString(16);
  green = g.toString(16);
  blue = b.toString(16);

  return red + ' ' + green + ' ' + blue;
}

//console.log(rgb(17, 16, 0));

Array.prototype.sameStructureAs = function (other) {
  if (this.length != other.length) return false;

  for (let [i, item] of this.entries()) {
    if (Array.isArray(item)) {
      if (Array.isArray(other[i])) {
        return item.sameStructureAs(other[i]);
      } else if (Array.isArray(other[-1 - i])) {
        console.log(other[-1 - i]);
        return item.sameStructureAs(other[-1 - i]);
      } else {
        return false;
      }
    } else if (Array.isArray(other[i]) || Array.isArray(other[-1 - i])) {
      return false;
    }
  }
  return true;
  // Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.

  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.
};

// console.log([1, '[', ']'].sameStructureAs(['[', ']', 1]));
// console.log([1, [1, 1]].sameStructureAs([2, [2, 2]]));
// console.log([1, 2].sameStructureAs([[3], 3]));

// uppercase letters 65-90
// lowercase letters 97-122
// console.log('t'.charCodeAt(0));
// console.log(String.fromCharCode(103));

function rot13(message) {
  const calculateCypehredCode = function (letter) {
    const latinLetters = /[a-zA-Z]/;

    if (!latinLetters.test(letter)) return letter;

    const letterCode = letter.charCodeAt(0);
    const isUpperCase = 65 <= letterCode && letterCode <= 90;
    const upperBoundary = isUpperCase ? 90 : 122;
    const lowerBoundary = isUpperCase ? 65 : 97;

    const cypheredCode = letterCode + 13;
    const diff = cypheredCode - upperBoundary;

    const cypheredLetter = diff > 0 ? lowerBoundary + diff - 1 : cypheredCode;
    return String.fromCharCode(cypheredLetter);
  };

  const letters = message.split('');
  const result = letters.map((letter) => calculateCypehredCode(letter));

  return result.join('');
}

// console.log(rot13('test'));
