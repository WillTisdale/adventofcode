$(document).ready(function(){
 "use strict";

 const puzzle = $('#puzzle')

 let puzzleString = puzzle.html()

 // console.log(puzzleString);

 const puzzleArr = puzzleString.split('\n    ')

 // console.log(puzzleArr);

 let test = ["shiny gold bags contain 2 dark red bags.",
 "dark red bags contain 2 dark orange bags.",
 "dark orange bags contain 2 dark yellow bags.",
 "dark yellow bags contain 2 dark green bags.",
 "dark green bags contain 2 dark blue bags.",
 "dark blue bags contain 2 dark violet bags.",
 "dark violet bags contain no other bags."]
 // console.log(test);

 let testArr2 = []
 puzzleArr.forEach(function(string){
  let newArr = string.split(" contain ")
  testArr2.push(newArr)
 })
 // console.log(testArr);

 // let finalArray = []
 // testArr2.forEach(function(array){
 //  let bagTitleArray = []
 //  let contentArray = []
 //  let bagArray = []
 //  bagTitleArray.push(array[0])
 //  contentArray.push(array[1].split(", "))
 //  bagArray.push(bagTitleArray)
 //  bagArray.push(contentArray)
 //  finalArray.push(bagArray)
 // })
 // console.log(finalArray);
 // console.log(testArr2);
let finalArray = [[["shiny gold bags"], [["2 dark red bags"]]],
     [["dark red bags"], [["2 dark orange bags."]]],
     [["dark orange bags"], [["2 dark yellow bags."]]],
     [["dark yellow bags"], [["2 dark green bags."]]],
     [["dark green bags"], [["2 dark blue bags."]]],
     [["dark blue bags"], [["2 dark violet bags."]]],
     [["dark violet bags"], [["no other bags."]]]]

 let searchArr = ["shiny gold bags"]
 searchArr.forEach(function(bag){
  for(var i = 0; i < finalArray.length; i++){
   if(finalArray[i][0][0].includes(bag)){
    if(!finalArray[i][1][0][0].includes("no other")){
     let current = finalArray[i];
     // console.log(current);
     let numOne = Number(current[1][0][0].slice(0, 1))
     // console.log(numOne);
     let firstStr = current[1][0][0].slice(2)
     if(firstStr.includes(".")){
      firstStr = firstStr.slice(0, firstStr.length - 1)
     }
     // console.log(firstStr);
     if(!searchArr.includes(firstStr) && !searchArr.includes(firstStr + "s") && !searchArr.includes(firstStr.slice(0, -1))){
      searchArr.push(firstStr)
     }
     // finalAnswer += numOne * multiply(firstStr)
     if(current[1][0][1] != undefined){
      let numTwo = Number(current[1][0][1].slice(0, 1))
      // console.log(numTwo);
      let secondStr = current[1][0][1].slice(2)
      if(secondStr.includes(".")){
       secondStr = secondStr.slice(0, secondStr.length - 1)
      }
      // console.log(secondStr);
      if(!searchArr.includes(secondStr) && !searchArr.includes(secondStr + "s") && !searchArr.includes(secondStr.slice(0, -1))){
       searchArr.push(secondStr)
      }
      // finalAnswer += numTwo * multiply(secondStr)
     }
     if(current[1][0][2] != undefined){
      let numThree = Number(current[1][0][2].slice(0, 1))
      // console.log(numThree);
      let thirdStr = current[1][0][2].slice(2)
      if(thirdStr.includes(".")){
       thirdStr = thirdStr.slice(0, thirdStr.length - 1)
      }
      // console.log(thirdStr);
      if(!searchArr.includes(thirdStr) && !searchArr.includes(thirdStr + "s") && !searchArr.includes(thirdStr.slice(0, -1))){
       searchArr.push(thirdStr)
      }
      // finalAnswer += numThree * multiply(thirdStr)
     }
     if(current[1][0][3] != undefined){
      let numFour = Number(current[1][0][3].slice(0, 1))
      // console.log(numThree);
      let fourthStr = current[1][0][3].slice(2)
      if(fourthStr.includes(".")){
       fourthStr = fourthStr.slice(0, fourthStr.length - 1)
      }
      // console.log(thirdStr);
      if(!searchArr.includes(fourthStr) && !searchArr.includes(fourthStr + "s") && !searchArr.includes(fourthStr.slice(0, -1))){
       console.log(fourthStr);
       searchArr.push(fourthStr )
      }
      // finalAnswer += numFour * multiply(fourthStr)
     }
    }
   }
  }
 })

searchArr.forEach(function(bag){
  for(var i = 0; i < finalArray.length; i++){
   if(finalArray[i][0][0].includes(bag)){
    if(!finalArray[i][1][0][0].includes("no other")){
     let current = finalArray[i];
     // console.log(current);
     let numOne = Number(current[1][0][0].slice(0, 1))
     // console.log(numOne);
     let firstStr = current[1][0][0].slice(2)
     if(firstStr.includes(".")){
      firstStr = firstStr.slice(0, firstStr.length - 1)
     }
     // console.log(firstStr);
     if(!searchArr.includes(firstStr) && !searchArr.includes(firstStr + "s") && !searchArr.includes(firstStr.slice(0, -1))){
      searchArr.push(firstStr)
     }
     // finalAnswer += numOne * multiply(firstStr)
     if(current[1][0][1] != undefined){
      let numTwo = Number(current[1][0][1].slice(0, 1))
      // console.log(numTwo);
      let secondStr = current[1][0][1].slice(2)
      if(secondStr.includes(".")){
       secondStr = secondStr.slice(0, secondStr.length - 1)
      }
      // console.log(secondStr);
      if(!searchArr.includes(secondStr) && !searchArr.includes(secondStr + "s") && !searchArr.includes(secondStr.slice(0, -1))){
       searchArr.push(secondStr)
      }
      // finalAnswer += numTwo * multiply(secondStr)
     }
     if(current[1][0][2] != undefined){
      let numThree = Number(current[1][0][2].slice(0, 1))
      // console.log(numThree);
      let thirdStr = current[1][0][2].slice(2)
      if(thirdStr.includes(".")){
       thirdStr = thirdStr.slice(0, thirdStr.length - 1)
      }
      // console.log(thirdStr);
      if(!searchArr.includes(thirdStr) && !searchArr.includes(thirdStr + "s") && !searchArr.includes(thirdStr.slice(0, -1))){
       searchArr.push(thirdStr)
      }
      // finalAnswer += numThree * multiply(thirdStr)
     }
     if(current[1][0][3] != undefined){
      let numFour = Number(current[1][0][3].slice(0, 1))
      // console.log(numThree);
      let fourthStr = current[1][0][3].slice(2)
      if(fourthStr.includes(".")){
       fourthStr = fourthStr.slice(0, fourthStr.length - 1)
      }
      // console.log(thirdStr);
      if(!searchArr.includes(fourthStr) && !searchArr.includes(fourthStr + "s") && !searchArr.includes(fourthStr.slice(0, -1))){
       console.log(fourthStr);
       searchArr.push(fourthStr )
      }
      // finalAnswer += numFour * multiply(fourthStr)
     }
    }
   }
  }
 })

searchArr.forEach(function(bag){
  for(var i = 0; i < finalArray.length; i++){
   if(finalArray[i][0][0].includes(bag)){
    if(!finalArray[i][1][0][0].includes("no other")){
     let current = finalArray[i];
     // console.log(current);
     let numOne = Number(current[1][0][0].slice(0, 1))
     // console.log(numOne);
     let firstStr = current[1][0][0].slice(2)
     if(firstStr.includes(".")){
      firstStr = firstStr.slice(0, firstStr.length - 1)
     }
     // console.log(firstStr);
     if(!searchArr.includes(firstStr) && !searchArr.includes(firstStr + "s") && !searchArr.includes(firstStr.slice(0, -1))){
      searchArr.push(firstStr)
     }
     // finalAnswer += numOne * multiply(firstStr)
     if(current[1][0][1] != undefined){
      let numTwo = Number(current[1][0][1].slice(0, 1))
      // console.log(numTwo);
      let secondStr = current[1][0][1].slice(2)
      if(secondStr.includes(".")){
       secondStr = secondStr.slice(0, secondStr.length - 1)
      }
      // console.log(secondStr);
      if(!searchArr.includes(secondStr) && !searchArr.includes(secondStr + "s") && !searchArr.includes(secondStr.slice(0, -1))){
       searchArr.push(secondStr)
      }
      // finalAnswer += numTwo * multiply(secondStr)
     }
     if(current[1][0][2] != undefined){
      let numThree = Number(current[1][0][2].slice(0, 1))
      // console.log(numThree);
      let thirdStr = current[1][0][2].slice(2)
      if(thirdStr.includes(".")){
       thirdStr = thirdStr.slice(0, thirdStr.length - 1)
      }
      // console.log(thirdStr);
      if(!searchArr.includes(thirdStr) && !searchArr.includes(thirdStr + "s") && !searchArr.includes(thirdStr.slice(0, -1))){
       searchArr.push(thirdStr)
      }
      // finalAnswer += numThree * multiply(thirdStr)
     }
     if(current[1][0][3] != undefined){
      let numFour = Number(current[1][0][3].slice(0, 1))
      // console.log(numThree);
      let fourthStr = current[1][0][3].slice(2)
      if(fourthStr.includes(".")){
       fourthStr = fourthStr.slice(0, fourthStr.length - 1)
      }
      // console.log(thirdStr);
      if(!searchArr.includes(fourthStr) && !searchArr.includes(fourthStr + "s") && !searchArr.includes(fourthStr.slice(0, -1))){
       console.log(fourthStr);
       searchArr.push(fourthStr )
      }
      // finalAnswer += numFour * multiply(fourthStr)
     }
    }
   }
  }
 })

searchArr.forEach(function(bag){
  for(var i = 0; i < finalArray.length; i++){
   if(finalArray[i][0][0].includes(bag)){
    if(!finalArray[i][1][0][0].includes("no other")){
     let current = finalArray[i];
     // console.log(current);
     let numOne = Number(current[1][0][0].slice(0, 1))
     // console.log(numOne);
     let firstStr = current[1][0][0].slice(2)
     if(firstStr.includes(".")){
      firstStr = firstStr.slice(0, firstStr.length - 1)
     }
     // console.log(firstStr);
     if(!searchArr.includes(firstStr) && !searchArr.includes(firstStr + "s") && !searchArr.includes(firstStr.slice(0, -1))){
      searchArr.push(firstStr)
     }
     // finalAnswer += numOne * multiply(firstStr)
     if(current[1][0][1] != undefined){
      let numTwo = Number(current[1][0][1].slice(0, 1))
      // console.log(numTwo);
      let secondStr = current[1][0][1].slice(2)
      if(secondStr.includes(".")){
       secondStr = secondStr.slice(0, secondStr.length - 1)
      }
      // console.log(secondStr);
      if(!searchArr.includes(secondStr) && !searchArr.includes(secondStr + "s") && !searchArr.includes(secondStr.slice(0, -1))){
       searchArr.push(secondStr)
      }
      // finalAnswer += numTwo * multiply(secondStr)
     }
     if(current[1][0][2] != undefined){
      let numThree = Number(current[1][0][2].slice(0, 1))
      // console.log(numThree);
      let thirdStr = current[1][0][2].slice(2)
      if(thirdStr.includes(".")){
       thirdStr = thirdStr.slice(0, thirdStr.length - 1)
      }
      // console.log(thirdStr);
      if(!searchArr.includes(thirdStr) && !searchArr.includes(thirdStr + "s") && !searchArr.includes(thirdStr.slice(0, -1))){
       searchArr.push(thirdStr)
      }
      // finalAnswer += numThree * multiply(thirdStr)
     }
     if(current[1][0][3] != undefined){
      let numFour = Number(current[1][0][3].slice(0, 1))
      // console.log(numThree);
      let fourthStr = current[1][0][3].slice(2)
      if(fourthStr.includes(".")){
       fourthStr = fourthStr.slice(0, fourthStr.length - 1)
      }
      // console.log(thirdStr);
      if(!searchArr.includes(fourthStr) && !searchArr.includes(fourthStr + "s") && !searchArr.includes(fourthStr.slice(0, -1))){
       // console.log(fourthStr);
       searchArr.push(fourthStr )
      }
      // finalAnswer += numFour * multiply(fourthStr)
     }
    }
   }
  }
 })

 searchArr.forEach(function(bag){
  for(var i = 0; i < finalArray.length; i++){
   if(finalArray[i][0][0].includes(bag)){
    if(!finalArray[i][1][0][0].includes("no other")){
     let current = finalArray[i];
     // console.log(current);
     let numOne = Number(current[1][0][0].slice(0, 1))
     // console.log(numOne);
     let firstStr = current[1][0][0].slice(2)
     if(firstStr.includes(".")){
      firstStr = firstStr.slice(0, firstStr.length - 1)
     }
     // console.log(firstStr);
     if(!searchArr.includes(firstStr) && !searchArr.includes(firstStr + "s") && !searchArr.includes(firstStr.slice(0, -1))){
      searchArr.push(firstStr)
     }
     // finalAnswer += numOne * multiply(firstStr)
     if(current[1][0][1] != undefined){
      let numTwo = Number(current[1][0][1].slice(0, 1))
      // console.log(numTwo);
      let secondStr = current[1][0][1].slice(2)
      if(secondStr.includes(".")){
       secondStr = secondStr.slice(0, secondStr.length - 1)
      }
      // console.log(secondStr);
      if(!searchArr.includes(secondStr) && !searchArr.includes(secondStr + "s") && !searchArr.includes(secondStr.slice(0, -1))){
       searchArr.push(secondStr)
      }
      // finalAnswer += numTwo * multiply(secondStr)
     }
     if(current[1][0][2] != undefined){
      let numThree = Number(current[1][0][2].slice(0, 1))
      // console.log(numThree);
      let thirdStr = current[1][0][2].slice(2)
      if(thirdStr.includes(".")){
       thirdStr = thirdStr.slice(0, thirdStr.length - 1)
      }
      // console.log(thirdStr);
      if(!searchArr.includes(thirdStr) && !searchArr.includes(thirdStr + "s") && !searchArr.includes(thirdStr.slice(0, -1))){
       searchArr.push(thirdStr)
      }
      // finalAnswer += numThree * multiply(thirdStr)
     }
     if(current[1][0][3] != undefined){
      let numFour = Number(current[1][0][3].slice(0, 1))
      // console.log(numThree);
      let fourthStr = current[1][0][3].slice(2)
      if(fourthStr.includes(".")){
       fourthStr = fourthStr.slice(0, fourthStr.length - 1)
      }
      // console.log(thirdStr);
      if(!searchArr.includes(fourthStr) && !searchArr.includes(fourthStr + "s") && !searchArr.includes(fourthStr.slice(0, -1))){
       console.log(fourthStr);
       searchArr.push(fourthStr )
      }
      // finalAnswer += numFour * multiply(fourthStr)
     }
    }
   }
  }
 })

 searchArr.forEach(function(bag){
  for(var i = 0; i < finalArray.length; i++){
   if(finalArray[i][0][0].includes(bag)){
    if(!finalArray[i][1][0][0].includes("no other")){
     let current = finalArray[i];
     // console.log(current);
     let numOne = Number(current[1][0][0].slice(0, 1))
     // console.log(numOne);
     let firstStr = current[1][0][0].slice(2)
     if(firstStr.includes(".")){
      firstStr = firstStr.slice(0, firstStr.length - 1)
     }
     // console.log(firstStr);
     if(!searchArr.includes(firstStr) && !searchArr.includes(firstStr + "s") && !searchArr.includes(firstStr.slice(0, -1))){
      searchArr.push(firstStr)
     }
     // finalAnswer += numOne * multiply(firstStr)
     if(current[1][0][1] != undefined){
      let numTwo = Number(current[1][0][1].slice(0, 1))
      // console.log(numTwo);
      let secondStr = current[1][0][1].slice(2)
      if(secondStr.includes(".")){
       secondStr = secondStr.slice(0, secondStr.length - 1)
      }
      // console.log(secondStr);
      if(!searchArr.includes(secondStr) && !searchArr.includes(secondStr + "s") && !searchArr.includes(secondStr.slice(0, -1))){
       searchArr.push(secondStr)
      }
      // finalAnswer += numTwo * multiply(secondStr)
     }
     if(current[1][0][2] != undefined){
      let numThree = Number(current[1][0][2].slice(0, 1))
      // console.log(numThree);
      let thirdStr = current[1][0][2].slice(2)
      if(thirdStr.includes(".")){
       thirdStr = thirdStr.slice(0, thirdStr.length - 1)
      }
      // console.log(thirdStr);
      if(!searchArr.includes(thirdStr) && !searchArr.includes(thirdStr + "s") && !searchArr.includes(thirdStr.slice(0, -1))){
       searchArr.push(thirdStr)
      }
      // finalAnswer += numThree * multiply(thirdStr)
     }
     if(current[1][0][3] != undefined){
      let numFour = Number(current[1][0][3].slice(0, 1))
      // console.log(numThree);
      let fourthStr = current[1][0][3].slice(2)
      if(fourthStr.includes(".")){
       fourthStr = fourthStr.slice(0, fourthStr.length - 1)
      }
      // console.log(thirdStr);
      if(!searchArr.includes(fourthStr) && !searchArr.includes(fourthStr + "s") && !searchArr.includes(fourthStr.slice(0, -1))){
       // console.log(fourthStr);
       searchArr.push(fourthStr )
      }
      // finalAnswer += numFour * multiply(fourthStr)
     }
    }
   }
  }
 })

 searchArr.forEach(function(bag){
  for(var i = 0; i < finalArray.length; i++){
   if(finalArray[i][0][0].includes(bag)){
    if(!finalArray[i][1][0][0].includes("no other")){
     let current = finalArray[i];
     // console.log(current);
     let numOne = Number(current[1][0][0].slice(0, 1))
     // console.log(numOne);
     let firstStr = current[1][0][0].slice(2)
     if(firstStr.includes(".")){
      firstStr = firstStr.slice(0, firstStr.length - 1)
     }
     // console.log(firstStr);
     if(!searchArr.includes(firstStr) && !searchArr.includes(firstStr + "s") && !searchArr.includes(firstStr.slice(0, -1))){
      searchArr.push(firstStr)
     }
     // finalAnswer += numOne * multiply(firstStr)
     if(current[1][0][1] != undefined){
      let numTwo = Number(current[1][0][1].slice(0, 1))
      // console.log(numTwo);
      let secondStr = current[1][0][1].slice(2)
      if(secondStr.includes(".")){
       secondStr = secondStr.slice(0, secondStr.length - 1)
      }
      // console.log(secondStr);
      if(!searchArr.includes(secondStr) && !searchArr.includes(secondStr + "s") && !searchArr.includes(secondStr.slice(0, -1))){
       searchArr.push(secondStr)
      }
      // finalAnswer += numTwo * multiply(secondStr)
     }
     if(current[1][0][2] != undefined){
      let numThree = Number(current[1][0][2].slice(0, 1))
      // console.log(numThree);
      let thirdStr = current[1][0][2].slice(2)
      if(thirdStr.includes(".")){
       thirdStr = thirdStr.slice(0, thirdStr.length - 1)
      }
      // console.log(thirdStr);
      if(!searchArr.includes(thirdStr) && !searchArr.includes(thirdStr + "s") && !searchArr.includes(thirdStr.slice(0, -1))){
       searchArr.push(thirdStr)
      }
      // finalAnswer += numThree * multiply(thirdStr)
     }
     if(current[1][0][3] != undefined){
      let numFour = Number(current[1][0][3].slice(0, 1))
      // console.log(numThree);
      let fourthStr = current[1][0][3].slice(2)
      if(fourthStr.includes(".")){
       fourthStr = fourthStr.slice(0, fourthStr.length - 1)
      }
      // console.log(thirdStr);
      if(!searchArr.includes(fourthStr) && !searchArr.includes(fourthStr + "s") && !searchArr.includes(fourthStr.slice(0, -1))){
       console.log(fourthStr);
       searchArr.push(fourthStr )
      }
      // finalAnswer += numFour * multiply(fourthStr)
     }
    }
   }
  }
 })

 searchArr.forEach(function(bag){
  for(var i = 0; i < finalArray.length; i++){
   if(finalArray[i][0][0].includes(bag)){
    if(!finalArray[i][1][0][0].includes("no other")){
     let current = finalArray[i];
     // console.log(current);
     let numOne = Number(current[1][0][0].slice(0, 1))
     // console.log(numOne);
     let firstStr = current[1][0][0].slice(2)
     if(firstStr.includes(".")){
      firstStr = firstStr.slice(0, firstStr.length - 1)
     }
     // console.log(firstStr);
     if(!searchArr.includes(firstStr) && !searchArr.includes(firstStr + "s") && !searchArr.includes(firstStr.slice(0, -1))){
      searchArr.push(firstStr)
     }
     // finalAnswer += numOne * multiply(firstStr)
     if(current[1][0][1] != undefined){
      let numTwo = Number(current[1][0][1].slice(0, 1))
      // console.log(numTwo);
      let secondStr = current[1][0][1].slice(2)
      if(secondStr.includes(".")){
       secondStr = secondStr.slice(0, secondStr.length - 1)
      }
      // console.log(secondStr);
      if(!searchArr.includes(secondStr) && !searchArr.includes(secondStr + "s") && !searchArr.includes(secondStr.slice(0, -1))){
       searchArr.push(secondStr)
      }
      // finalAnswer += numTwo * multiply(secondStr)
     }
     if(current[1][0][2] != undefined){
      let numThree = Number(current[1][0][2].slice(0, 1))
      // console.log(numThree);
      let thirdStr = current[1][0][2].slice(2)
      if(thirdStr.includes(".")){
       thirdStr = thirdStr.slice(0, thirdStr.length - 1)
      }
      // console.log(thirdStr);
      if(!searchArr.includes(thirdStr) && !searchArr.includes(thirdStr + "s") && !searchArr.includes(thirdStr.slice(0, -1))){
       searchArr.push(thirdStr)
      }
      // finalAnswer += numThree * multiply(thirdStr)
     }
     if(current[1][0][3] != undefined){
      let numFour = Number(current[1][0][3].slice(0, 1))
      // console.log(numThree);
      let fourthStr = current[1][0][3].slice(2)
      if(fourthStr.includes(".")){
       fourthStr = fourthStr.slice(0, fourthStr.length - 1)
      }
      // console.log(thirdStr);
      if(!searchArr.includes(fourthStr) && !searchArr.includes(fourthStr + "s") && !searchArr.includes(fourthStr.slice(0, -1))){
       console.log(fourthStr);
       searchArr.push(fourthStr )
      }
      // finalAnswer += numFour * multiply(fourthStr)
     }
    }
   }
  }
 })




 function multiply(string){
  let answer = 0;
  for(var i = 0; i < finalArray.length; i++){
   if(finalArray[i][0][0].includes(string)){
    if(!finalArray[i][1][0][0].includes("no other")){
     let current = finalArray[i];
     let numOne = Number(current[1][0][0].slice(0, 1))
     // console.log(numOne);
     let firstStr = current[1][0][0].slice(2)
     if(firstStr.includes(".")){
      firstStr = firstStr.slice(0, firstStr.length - 1)
     }
     // console.log(firstStr);
     answer += numOne
     if(current[1][0][1] != undefined){
      let numTwo = Number(current[1][0][1].slice(0, 1))
      // console.log(numTwo);
      let secondStr = current[1][0][1].slice(2)
      if(secondStr.includes(".")){
       secondStr = secondStr.slice(0, secondStr.length - 1)
      }
      // console.log(secondStr);
      answer += numTwo
     }
     if(current[1][0][2] != undefined){
      let numThree = Number(current[1][0][2].slice(0, 1))
      // console.log(numThree);
      let thirdStr = current[1][0][2].slice(2)
      if(thirdStr.includes(".")){
       thirdStr = thirdStr.slice(0, thirdStr.length - 1)
      }
      // console.log(thirdStr);
      answer += numThree
     }
     if(current[1][0][3] != undefined){
      let numFour = Number(current[1][0][3].slice(0, 1))
      // console.log(numFour);
      let fourthStr = current[1][0][3].slice(2)
      if(fourthStr.includes(".")){
       fourthStr = fourthStr.slice(0, fourthStr.length - 1)
      }
      // console.log(thirdStr);
      answer += numFour
     }
    }
   }
  }
  return answer
 }
 console.log(searchArr);

let finalAnswer = 0;
 searchArr.forEach(function(bag){
  for(var i = 0; i < finalArray.length; i++){
   if(finalArray[i][0][0].includes(bag)){
    if(!finalArray[i][1][0][0].includes("no other")){
     let current = finalArray[i];
     // console.log(current);
     let numOne = Number(current[1][0][0].slice(0, 1))
     // console.log(numOne);
     let firstStr = current[1][0][0].slice(2)
     if(firstStr.includes(".")){
      firstStr = firstStr.slice(0, firstStr.length - 1)
     }
     // console.log(firstStr);
     finalAnswer += numOne * multiply(firstStr)
     finalAnswer += numOne
     if(current[1][0][1] != undefined){
      let numTwo = Number(current[1][0][1].slice(0, 1))
      // console.log(numTwo);
      let secondStr = current[1][0][1].slice(2)
      if(secondStr.includes(".")){
       secondStr = secondStr.slice(0, secondStr.length - 1)
      }
      // console.log(secondStr);
      finalAnswer += numTwo * multiply(secondStr)
      finalAnswer += numTwo
     }
     if(current[1][0][2] != undefined){
      let numThree = Number(current[1][0][2].slice(0, 1))
      // console.log(numThree);
      let thirdStr = current[1][0][2].slice(2)
      if(thirdStr.includes(".")){
       thirdStr = thirdStr.slice(0, thirdStr.length - 1)
      }
      // console.log(thirdStr);
      finalAnswer += numThree * multiply(thirdStr)
      finalAnswer += numThree
     }
     if(current[1][0][3] != undefined){
      let numFour = Number(current[1][0][3].slice(0, 1))
      // console.log(numThree);
      let fourthStr = current[1][0][3].slice(2)
      if(fourthStr.includes(".")){
       fourthStr = fourthStr.slice(0, fourthStr.length - 1)
      }
      // console.log(thirdStr);
      finalAnswer += numFour * multiply(fourthStr)
      finalAnswer += numFour
     }
    }
   }
  }
 })
 console.log(finalAnswer);

 // for(var i = 0; i < finalArray.length; i++){
 //  if(finalArray[i][0][0].includes("muted plum bags")){
 //   console.log(finalArray[i]);
 //   answer += Number(finalArray[i][1][0][0].slice(0, 1))
 //   if(finalArray[i][1][0][1] !== undefined){
 //    answer += Number(finalArray[i][1][0][1].slice(0, 1))
 //   }
 //   if(finalArray[i][1][0][2] !== undefined){
 //    answer += Number(finalArray[i][1][0][2].slice(0, 1))
 //   }
 //  }
 // }
 // console.log(answer);
 // console.log(answer);
 // for(var i = 0; i < finalArray.length; i++){
 //  if(finalArray[i][0][0].includes("clear chartreuse bags")){
 //   // console.log(finalArray[i]);
 //   answer += Number(finalArray[i][1][0][0].slice(0, 1))
 //   if(finalArray[i][1][0][1] !== undefined){
 //    answer += Number(finalArray[i][1][0][1].slice(0, 1))
 //   }
 //  }
 // }
 // // console.log(answer);
 // for(var i = 0; i < finalArray.length; i++){
 //  if(finalArray[i][0][0].includes("pale plum bags")){
 //   // console.log(finalArray[i]);
 //   answer += Number(finalArray[i][1][0][0].slice(0, 1))
 //   if(finalArray[i][1][0][1] !== undefined){
 //    answer += Number(finalArray[i][1][0][1].slice(0, 1))
 //   }
 //  if(finalArray[i][1][0][2] !== undefined){
 //    answer += Number(finalArray[i][1][0][2].slice(0, 1))
 //   }
 //  }
 // }
 // console.log(answer);
 // for(var i = 0; i < finalArray.length; i++){
 //  if(finalArray[i][0][0].includes("shiny beige bag")){
 //   console.log(finalArray[i]);
 //   answer += Number(finalArray[i][1][0][0].slice(0, 1))
 //   if(finalArray[i][1][0][1] !== undefined){
 //    answer += Number(finalArray[i][1][0][1].slice(0, 1))
 //   }
 //   if(finalArray[i][1][0][2] !== undefined){
 //    answer += Number(finalArray[i][1][0][2].slice(0, 1))
 //   }
 //  }
 // }
 // console.log(answer);
 // for(var i = 0; i < finalArray.length; i++){
 //  if(finalArray[i][0][0].includes("wavy indigo bags")){
 //   console.log(finalArray[i]);
 //   answer += Number(finalArray[i][1][0][0].slice(0, 1))
 //   if(finalArray[i][1][0][1] !== undefined){
 //    answer += Number(finalArray[i][1][0][1].slice(0, 1))
 //   }
 //   if(finalArray[i][1][0][2] !== undefined){
 //    answer += Number(finalArray[i][1][0][2].slice(0, 1))
 //   }
 //  }
 // }
 // console.log(answer);




// let test = ["light red bags contain 1 bright white bag, 2 muted yellow bags.",
//     "dark orange bags contain 3 bright white bags, 4 muted yellow bags.",
//     "bright white bags contain 1 shiny gold bag.",
//     "muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.",
//     "shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.",
//     "dark olive bags contain 3 faded blue bags, 4 dotted black bags.",
//     "vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.",
//     "faded blue bags contain no other bags.",
//     "dotted black bags contain no other bags."]
//  // console.log(test);
// let testArr = []
//  puzzleArr.forEach(function(string){
//   let newArr = string.split(" contain ")
//   testArr.push(newArr)
//  })
//  console.log(testArr);
//
//  let canHoldGold = []
//  testArr.forEach(function(array){
//   for(var i = 1; i < array.length; i++){
//    if (array[i].includes("shiny gold bag")){
//      canHoldGold.push(array[0])
//    }
//   }
//  })
//
//  testArr.forEach(function(array){
//   canHoldGold.forEach(function(bag){
//    if (array[1].includes(bag.substring(0, bag.length -1))) {
//     if(!canHoldGold.includes(array[0])){
//      canHoldGold.push(array[0])
//     }
//    }
//   })
//  })
//
//  testArr.forEach(function(array){
//   canHoldGold.forEach(function(bag){
//    if (array[1].includes(bag.substring(0, bag.length -1))) {
//     if(!canHoldGold.includes(array[0])){
//      canHoldGold.push(array[0])
//     }
//    }
//   })
//  })
//
//  testArr.forEach(function(array){
//   canHoldGold.forEach(function(bag){
//    if (array[1].includes(bag.substring(0, bag.length -1))) {
//     if(!canHoldGold.includes(array[0])){
//      canHoldGold.push(array[0])
//     }
//    }
//   })
//  })
//
//  testArr.forEach(function(array){
//   canHoldGold.forEach(function(bag){
//    if (array[1].includes(bag.substring(0, bag.length -1))) {
//     if(!canHoldGold.includes(array[0])){
//      canHoldGold.push(array[0])
//     }
//    }
//   })
//  })
//
//  testArr.forEach(function(array){
//   canHoldGold.forEach(function(bag){
//    if (array[1].includes(bag.substring(0, bag.length -1))) {
//     if(!canHoldGold.includes(array[0])){
//      canHoldGold.push(array[0])
//     }
//    }
//   })
//  })
//
//  testArr.forEach(function(array){
//   canHoldGold.forEach(function(bag){
//    if (array[1].includes(bag.substring(0, bag.length -1))) {
//     if(!canHoldGold.includes(array[0])){
//      canHoldGold.push(array[0])
//     }
//    }
//   })
//  })
//
//  testArr.forEach(function(array){
//   canHoldGold.forEach(function(bag){
//    if (array[1].includes(bag.substring(0, bag.length -1))) {
//     if(!canHoldGold.includes(array[0])){
//      canHoldGold.push(array[0])
//     }
//    }
//   })
//  })
//  console.log(canHoldGold);

 // THIS WORKS
 // testArr.forEach(function(array){
 //  for(var i = 1; i < array.length; i++){
 //   if (array[i].includes("muted yellow bag")){
 //    if(!canHoldGold.includes(array[0]))
 //    canHoldGold.push(array[0])
 //   }
 //  }
 // })

//  let yes = []
// test.forEach(function(array){
//  let answer = []
//  array.forEach(function(array2){
//   array2.forEach(function(array3){
//    for(var j = 0; j < array3.length; j++){
//     if(!(answer.includes(array3[j]))){
//      answer.push(array3[j])
//      // console.log(array3[j] + " was pushed to answer Array");
//     } else {
//      // console.log(array3[j] + " was NOT pushed to answer Array");
//     }
//    }
//
//   })
//
//  })
//  yes.push(answer.length)
//  // console.log("answer was pushed to yes");
// })
//  console.log(yes);
//  console.log(newArray);
//  var total = 0;
//  yes.forEach(function(number){
//   total += number
//  })
//
//  console.log(total);
//DAY 6 ^^^^


 //DAY 5
//  function checkString(string){
//   let rows = []
//   for(var i = 0; i < 128; i++){
//    rows.push(i)
//   }
//   let columns = []
//   for(var i = 0; i < 8; i++){
//    columns.push(i)
//   }
//   let current = string.split("")
//   for(var i = 0; i < current.length; i++){
//    if(current[i] === "F"){
//     rows.splice(rows.length / 2, rows.length / 2)
//    } else if (current[i] === "B"){
//     rows.splice(0, (rows.length / 2))
//    } else if ( current[i] === "R") {
//     columns.splice(0, (columns.length / 2))
//    } else if ( current[i] === "L") {
//     columns.splice(columns.length / 2, columns.length / 2)
//    }
//    var id = (rows[0] * 8) + columns[0]
//   }
//   return id
//  }
//
// let ids = []
//
//  puzzleArr.forEach(function(string){
//   ids.push(checkString(string))
//  })
//
//  console.log(Math.max(...ids));
 //Day 5 ^^^^


 // console.log(newString);
 //
 // console.log(newArray);


//  let bigArray = [];
//  for(var i = 0; i < newArray.length; i++){
//   let string = newArray[i].split(" ")
//   bigArray.push(string)
//  }
//
//  let newBigArray =[]
//
//  bigArray.forEach(function(array){
//   let eightArr = array.filter(n => n !== "")
//   newBigArray.push(eightArr)
//  })
//
//  let lastFilter = newBigArray.filter(n => n.length >= 7)
//
//  let hasEight = lastFilter.filter(n => n.length === 8)
//  let hasSeven = lastFilter.filter(n => n.length === 7)
//
//  let answer = 0
//  let badIndex = []
//
//  hasSeven.forEach(function(array){
//   for(var i = 0; i < array.length; i++){
//    if(array[i].startsWith("cid")){
//     badIndex.push(array)
//     answer += 1;
//    }
//   }
//  })
//
// for(var i = 0; i < badIndex.length; i ++){
//  hasSeven.splice(hasSeven.indexOf(badIndex[i]), 1)
// }
//  // console.log(hasEight);
//  // console.log(hasSeven);
//
//  function checkBYR(array){
//   array.forEach(function (field){
//    if(field.startsWith("byr")){
//     let byr = field.split(":");
//     let year = Number(byr[1])
//     if(year >= 1920 && year <= 2002){
//      array.splice(array.indexOf(field), 1, "valid")
//     } else {
//      array.splice(array.indexOf(field), 1, "invalid")
//     }
//    }
//   })
//  }
//  function checkIYR(array){
//   array.forEach(function (field){
//    if(field.startsWith("iyr")){
//     let iyr = field.split(":");
//     let year = Number(iyr[1])
//     if(year >= 2010 && year <= 2020){
//      array.splice(array.indexOf(field), 1, "valid")
//     } else {
//      array.splice(array.indexOf(field), 1, "invalid")
//     }
//    }
//   })
//  }
//  function checkEYR(array){
//   array.forEach(function (field){
//    if(field.startsWith("eyr")){
//     let eyr = field.split(":");
//     let year = Number(eyr[1])
//     if(year >= 2020 && year <= 2030){
//      array.splice(array.indexOf(field), 1, "valid")
//     } else {
//      array.splice(array.indexOf(field), 1, "invalid")
//     }
//    }
//   })
//  }
//  function checkHGT(array){
//   array.forEach(function (field){
//    if(field.startsWith("hgt")){
//     let hgt = field.split(":");
//     let height = hgt[1].split("")
//     for(var i = 0; i < height.length; i++){
//      if(!isNaN(parseFloat(height[i]))){
//        height[i] = parseFloat(height[i])
//      }
//     }
//     for(var j = 0; j < height.length; j++){
//      if(typeof height[i] != "number"){
//       let current = height[i]
//       height.splice(height.indexOf(height[i]) - 1, 0, ":")
//       break;
//      }
//     }
//     let newStr = height.join("")
//     let hgtArr = newStr.split(":")
//     let number = Number(hgtArr[0])
//     let msmt = hgtArr[1]
//     if(msmt === "cm") {
//      if (number >= 150 && number <= 193) {
//       array.splice(array.indexOf(field), 1, "valid")
//      } else {
//       array.splice(array.indexOf(field), 1, "invalid")
//      }
//     } else if(msmt = "in"){
//      if (number >= 59 && number <= 76) {
//       array.splice(array.indexOf(field), 1, "valid")
//      } else {
//       array.splice(array.indexOf(field), 1, "invalid")
//      }
//     } else {
//      array.splice(array.indexOf(field), 1, "invalid")
//     }
//    }
//   })
//  }
//  function checkCID(array){
//   array.forEach(function (field){
//    if(field.startsWith("cid")){
//      array.splice(array.indexOf(field), 1, "valid")
//     }
//   })
//  }
//  function checkHCL(array){
//  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
//   let letters = ["a", "b", "c", "d", "e", "f"]
//   array.forEach(function (field){
//    if(field.startsWith("hcl")){
//     let hcl = field.split(":");
//     let color = hcl[1]
//     let colorArr = color.split("")
//     if(colorArr.length !== 7){
//      array.splice(array.indexOf(field), 1, "invalid")
//     } else {
//      if(colorArr[0] === "#"){
//       let count = 0;
//       for(var i = 1; i < colorArr.length; i++){
//        if(numbers.includes(colorArr[i]) || letters.includes(colorArr[i])){
//          count += 1;
//        }
//       }
//       if(count === 6){
//        array.splice(array.indexOf(field), 1, "valid")
//       } else {
//        array.splice(array.indexOf(field), 1, "invalid")
//       }
//      } else {
//       array.splice(array.indexOf(field), 1, "invalid")
//      }
//     }
//
//    }
//   })
//  }
//  function checkECL(array){
//  let colors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
//   array.forEach(function (field){
//    if(field.startsWith("ecl")){
//     let ecl = field.split(":");
//     let color = ecl[1]
//     if(colors.includes(color)){
//      array.splice(array.indexOf(field), 1, "valid")
//     }else{
//      array.splice(array.indexOf(field), 1, "invalid")
//     }
//    }
//   })
//  }
//  function checkPID(array){
//   array.forEach(function (field){
//    if(field.startsWith("pid")){
//     let pid = field.split(":");
//     let number = pid[1]
//     if(number.length === 9){
//      array.splice(array.indexOf(field), 1, "valid")
//     } else {
//      array.splice(array.indexOf(field), 1, "invalid")
//     }
//    }
//   })
//  }
//
//  hasEight.forEach(function(array){
//   checkBYR(array);
//   checkIYR(array)
//   checkEYR(array)
//   checkHGT(array)
//   checkCID(array)
//   checkHCL(array)
//   checkECL(array)
//   checkPID(array)
//  })
//  hasSeven.forEach(function(array){
//   checkBYR(array);
//   checkIYR(array)
//   checkEYR(array)
//   checkHGT(array)
//   checkHCL(array)
//   checkECL(array)
//   checkPID(array)
//  })
//  let valid = 0;
//  let invalid = 0;
//  hasEight.forEach(function(array){
//   if (array.includes("invalid")){
//    invalid += 1
//   } else {
//    valid += 1
//   }
//  })
//  hasSeven.forEach(function(array){
//   if (array.includes("invalid")){
//    invalid += 1
//   } else {
//    valid += 1
//   }
//  })
//  console.log("Valid passports: " + valid);
//  console.log("Invalid passports: " + invalid);
 // 2*l*w + 2*w*h + 2*h*l
//  let total = 0;
// for(var i = 0; i < puzzleArr.length; i++){
//  let eachArr = puzzleArr[i].split("x")
//  let numArr = eachArr.map(n => Number(n))
//  let l = numArr[0]
//  let w = numArr[1]
//  let h = numArr[2]
//  // total += (2*l*w + 2*w*h + 2*h*l)
//  if(Math.max(...numArr) === l){
//   total += w+w+h+h
//   total += l*w*h
//   continue;
//  }
//  if(Math.max(...numArr) === w){
//   total += l+l+h+h
//   total += l*w*h
//   continue;
//  }
//  if(Math.max(...numArr) === h){
//   total += l+l+w+w
//   total += l*w*h
//   continue;
//  }
// }
//
//  console.log(total);

 // let floor = 0;
 // for(var i = 0; i < puzzleArr.length; i++){
 //  if(puzzleArr[i] === ")"){
 //   floor -= 1
 //  }
 //  if(puzzleArr[i] === "("){
 //   floor += 1
 //  }
 //  if(floor === -1){
 //   console.log(i + 1)
 //   break;
 //  }
 // }

 // console.log(floor);

//  let start = 0
//  let answer = 0;
//  let num = 0
// for(var i = 1; i < puzzleArr.length; i++){
//  let current = puzzleArr[i];
//     start += 1;
//     if (start === 31) {
//      start = 0
//     }
//     if (current[start] === "#") {
//      answer += 1;
//     }
// }
//  console.log(num);
//  console.log(answer)



 // let argArr = [];
 //
 //  for (let i = 0; i < puzzleArr.length; i++) {
 //    let initialArr = []
 //    let newArray = puzzleArr[i].split(":")
 //    let inputFour = newArray[1].slice(1)
 //    let firstArr = newArray[0].split(" ")
 //    let inputThree = firstArr[1]
 //    let secondArr = firstArr[0].split("-")
 //    let inputOne = secondArr[0]
 //    let inputTwo = secondArr[1]
 //    initialArr.push(inputOne)
 //    initialArr.push(inputTwo)
 //    initialArr.push(inputThree)
 //    initialArr.push(inputFour)
 //    argArr.push(initialArr)
 //  }
 //
 //   let answer = [];
 //   argArr.forEach(function(array) {
 //    let count = 0
 //    let min = Number(array[0]) - 1
 //    let max = Number(array[1]) - 1
 //    let key = array[2]
 //    let string = array[3].split("")
 //    if(string[min] === key){
 //     count += 1
 //    }
 //    if(string[max] === key){
 //     count += 1
 //    }
 //    if(count === 1){
 //     answer.push(array)
 //    }
 //   })
 // console.log(answer.length);


 // let newArr = numArr.map( n => Number(n))
 //
 // // console.log(newArr);
 //
 // function twoEqualTarget(array, number) {
 //  var newArr = [];
 //  for (var i = 0; i < array.length; i++) {
 //   for (var j = 1; j < array.length; j++) {
 //    for (var k = 1; k < array.length; k++) {
 //    if (Number(array[i]) + Number(array[j]) + Number(array[k]) === number) {
 //     var first = Number(array[i])
 //     var second = Number(array[j])
 //     var third = Number(array[k])
 //     var fourth = first + second + third
 //     var fifth = first * second * third
 //     newArr.push(first);
 //     newArr.push(second);
 //     newArr.push(third);
 //     newArr.push(fourth);
 //     newArr.push(fifth);
 //     return newArr
 //    }
 //    }
 //   }
 //  }
 // }
 //
 // console.log(twoEqualTarget(numArr, 2020));//[2, 3]


})


