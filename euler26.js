//function that divides with strings
let i = 0
console.log(div(1,3))

function div(x,y,str){
  let res = str || '';

  let reminder = 0;
  let division = x/y;
  let whole = Math.floor(division)
  reminder = x%y;
  let newY = y

  if (i > 3){
    return res;
  }

  if (i == 0){
    if (reminder == 0){
      res+=String(whole)
      return res
    } else {
        res += String(whole)+'.';
        i+=1
        return div(reminder*10,newY,res)
    }
  }

  if (i != 0){
    if (reminder == 0){
      res += String(whole)
      return res
    } else {
        res += String(whole)
        i+= 1;
        return div(reminder*10,newY,res)
    }
  }
}

//evaluate recurring pattern
//1. store all numbers of division until a limit
//2. get index of all starting numbers and store in array.
