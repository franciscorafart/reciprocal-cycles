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

    if (reminder == 0){
      res += String(whole)
      return {res:res,recur:null}
    } else {
        if (i != 0){
          res += String(whole)
          i+= 1;
          return div(reminder*10,newY,res, i)
        } else {
          res += String(whole)+'.';
          i+=1
          return div(reminder*10,newY,res, i)
        }
    }

}

function sweepRecurrent(str){
  //start from the largest length
  for (let l = str.length/2; l>=1; l--){
    for (let i = 0; i<str.length; i+=1){
      let subString = str.substring(i, i+l);

      let firstRecur = recurrent(str, subString)

      if(firstRecur){
        let secRecur = sweepRecurrent(firstRecur)
        if (secRecur){
          return sweepRecurrent(firstRecur)
        } else {
          return subString
        }

      }
    }
  }
  return null
}


//function that tells if e is recurrent in str
function recurrent(str, e){
      let indexOfE = str.indexOf(e)

      isRecurrent = false

      for (let i =indexOfE+e.length; i<str.length-e.length; i+=e.length){
        if(str.indexOf(e, i)==i){
          isRecurrent = true
          let tIndex = i + e.length

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
        return e
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
//
console.log(longestRecurring(1000))

//TODO: Smaller recurrents are wrong
// console.log(recurrent('3636','36'))
// console.log(recurrent('364364','364'))
