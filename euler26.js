//function that divides with strings
// for (let d =2;d<1000;d++){
//   console.log(div(1,d))
// }

console.log(div(1,7))


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

function allIndexesFirst(str){
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

//function that returns all the substrings of a string as an array
function allSubstrings(str){
  sub = []
  //start from length l=1 to (Without duplicating)
  for (let l = 1; l<=str.length/2; l++){

    //if its not in the array, add it
    for (let i = 0; i<str.length; i+=1){
      let subString = str.substring(i, i+l);

      //TODO:This is not evaluating corretly
      if (sub.indexOf(subString)==-1){
        sub.push(subString)
      }
    }
  }
  //al the substrings with n elements
  return sub
}

function recurrent(str){
  //get all substrings.
  //TODO: Refactor to pure function
  Substrings = allSubstrings(str);
  repeatingPattern = ''

  for (inSt = 0; inSt<Substrings.length; inSt++){
      let e = Substrings[inSt]
      indexOfE = str.indexOf(e)
      lengthOfE = e.length
      isRecurrent = true

      for (let i =indexOfE+lengthOfE; i<str.length; i+=lengthOfE){
        if(str.indexOf(e, i)==i){
          isRecurrent = true
        } else {
          isRecurrent = false
          break;
        }
      }
      if (isRecurrent){
        repeatingPattern = e
        break
      }
  }


  if(repeatingPattern != ''){
    return repeatingPattern
  }

  return null
}
