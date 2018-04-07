//function that divides with strings
for (let d =2;d<1000;d++){
  console.log(div(1,d))
}



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

const allIndexesFirst = str => {
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
}

const recurrent = str =>{
  let firstIndexes = allIndexes(str)
  stringArray = []
  //divide in parts
  for (let i = 0;i<firstIndexes.length;i++){

  }
}

//evaluate recurring pattern
//1. store all numbers of division until a limit
//2. get index of all starting numbers and store in array.
