function div(x,y,str, count){
  let res = str || '';
  let i = count || 0
  let reminder = 0;
  let division = x/y;
  let whole = Math.floor(division)
  reminder = x%y;
  let newY = y

  //Evaluate recursion
  if ((i==50)||(i>=300 && i%300 == 0)) {
    let recur = sweepRecurrent(res)
    if(recur){
      return {res:res,recur:recur}
    }
  }

  if (i != 0){
    if (reminder == 0){

      res += String(whole)
      return {res:res,recur:null}
    } else {
        res += String(whole)
        i+= 1;
        return div(reminder*10,newY,res, i)
    }
  } else {
    if (reminder == 0){
      res+=String(whole)
      return {res:res,recur:null}
    } else {
        res += String(whole)+'.';
        i+=1
        return div(reminder*10,newY,res, i)
      }
  }
}

//function that returns all the substrings of a string as an array
// function allSubstrings(str){
//   sub = []
//   //start from length l=1 to (Without duplicating)
//   for (let l = 1; l<=str.length/2; l--){
//
//     //if its not in the array, add it
//     for (let i = 0; i<str.length; i+=1){
//       let subString = str.substring(i, i+l);
//
//       if (sub.indexOf(subString)==-1){
//         sub.push(subString)
//       }
//     }
//   }
//   //al the substrings with n elements
//   return sub
// }

function sweepRecurrent(str){
  //start from length l=1 to (Without duplicating)
  for (let l = str.length/2; l>=1; l--){

    //if its not in the array, add it
    for (let i = 0; i<str.length; i+=1){
      let subString = str.substring(i, i+l);

      if(recurrent(str, subString)){
        return subString
      }
    }
  }

  return null
}



function recurrent(str, e){
  //get all substrings.
  // Substrings = allSubstrings(str);
      repeatingPattern = ''

  // for (inSt = Substrings.length-1; inSt>=0; inSt--){
      // let e = Substrings[inSt]
      indexOfE = str.indexOf(e)
      lengthOfE = e.length
      isRecurrent = null


      for (let i =indexOfE+lengthOfE; i<str.length-lengthOfE; i+=lengthOfE){
        if(str.indexOf(e, i)==i){
          isRecurrent = true
          let tIndex = i + lengthOfE

          //tail of the string evaluation
          tailString = str.substring(tIndex)
          if (isRecurrent && tailString.length <= e.length && e.indexOf(tailString) != 0){
            isRecurrent = false
            break
          }


        } else {
          isRecurrent = false
          break;
        }
      }
      if (isRecurrent){
        repeatingPattern = e
        // break
      }
  // }

  if(repeatingPattern != ''){
    return repeatingPattern
  }

  return null
}

function longestRecurring(n){
  largest = 0
  d = 0

  for (let i = 3; i<n; i++){
      let recObj =  div(1,i);
      console.log(recObj)

      let division = recObj['res'];
      let recurrentString = recObj['recur'];
        console.log('i = '+ i+' division = '+division +', recurrent: '+ recurrentString);
        if(recurrentString && recurrentString.length>largest){
          largest = recurrentString.length
          d = i
        }
  }
  return d
}

// console.log(longestRecurring(1000))

//Extreme cases test
// console.log(recurrent("0053763440"))
// console.log(recurrent("abcabcabcabcab"))
// console.log(recurrent("abcabcabcabc"))
// console.log(recurrent("xyzxyzxyzxy"))
// console.log(recurrent("xyzxyzxyzxyc"))

console.log(div(1,487))
