// add solution here
function theBeatlesPlay(arr1, arr2){
  var emptyArr = []
  
  for (var i = 0; i < arr1.length; i++){
    for(var j = 0; j < arr2.length; j++){
      emptyArr.push(arr1[i] + " plays " + arr2[j])
    }
  }
  return emptyArr
}

function johnLennonFacts(factsArr){
  let  x = 0;
  let factsAboutJohn = [];

  while(x <  factsArr.length){
    factsAboutJohn.push( factsArr[x] + "!!!");
    x++;
  }
  
  return factsAboutJohn;
}


let iLoveTheBeatles = (num) => 





