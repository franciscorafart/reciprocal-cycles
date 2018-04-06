//function that divides with strings
let i = 0
console.log(div(1,3))

function div(x,y,str, count){
  let res = str || '';
  let i = count || 0

  let reminder = 0;
  let division = x/y;
  let whole = Math.floor(division)
  reminder = x%y;
  let newY = y

  if (i > 50){
    return res;
  }

  if (i == 0){
    if (reminder == 0){
      res+=String(whole)
      return res
    } else {
        res += String(whole)+'.';
        i+=1
        return div(reminder*10,newY,res, i)
    }
  }

  if (i != 0){
    if (reminder == 0){
      res += String(whole)
      return res
    } else {
        res += String(whole)
        i+= 1;
        return div(reminder*10,newY,res, i)
    }
  }
}

const findRecurrent = str => {
  //find indexes of first item
  let firstChar = str.charAt(0);
  let allIndexes = [0]

  for (let pos =1; pos<str.length; pos++){
    let index = str.indexOf(firstChar,pos)

    if (index>=0){
        allIndexes.push(index)
        pos = index+1
    }
  }
  return allIndexes

  //compare the following ones

  //if it reaches the other indexes theres a pattern

}


console.log(findRecurrent('abcabcabc'));
//evaluate recurring pattern
//1. store all numbers of division until a limit
//2. get index of all starting numbers and store in array.
