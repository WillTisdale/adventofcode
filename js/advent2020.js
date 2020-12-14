$(document).ready(function(){
 "use strict";

 const puzzle = $('#puzzle1')

 const timeStamp = $('#puzzle2')

 let puzzleString = puzzle.html()

 let time = Number(timeStamp.html())

 console.log(time);

 // console.log(puzzleString);

 const puzzleArr = puzzleString.split(',')

 console.log(puzzleArr);
 let t = 0
puzzleArr.forEach(function(bus){
 let array = []
 do{
  array.push(t).repeat(t)
  array.push(Number(bus))
 }while()
})
// // Part 1
 // let finalArray = []
 // puzzleArr.forEach(function(bus){
 //  let array = [0]
 //  do{
 //   array.push(Number(bus) + array[array.length -1])
 //  }while(Math.max(...array) < time * 1.1)
 //  finalArray.push(array)
 // })
 //
 // console.log(finalArray);
 //
 // let newArray = []
 // finalArray.forEach(function(array){
 //  array = array.filter(n => n >= time)
 //  newArray.push(array)
 // })
 //
 // console.log(newArray);
 //
 // let smallTime = 0;
 // let bus;
 // newArray.forEach(function(array){
 //  let current = Math.min(...array)
 //  if(smallTime === 0) {
 //   smallTime = current
 //  }
 //  if(current < smallTime){
 //   bus = array[1] - array[0];
 //   smallTime = current
 //  }
 // })
 // console.log(bus);
 // console.log(smallTime);
 // console.log((bus * (smallTime - time)));
 // //DAY 13^^^

 // //DAY 12
//  const puzzle = $('#puzzle1')
//
//  let puzzleString = puzzle.html()
//
//  // console.log(puzzleString);
//
//  const puzzleArr = puzzleString.split('\n    ')
//
//  console.log(puzzleArr);
//
//  let puzzArr = []
//  puzzleArr.forEach(function(direction){
//   let letter = direction.slice(0, 1)
//   let number = direction.slice(1, direction.length)
//   let newArr = [letter, Number(number)]
//   puzzArr.push(newArr)
//  })
//
//  console.log(puzzArr);
// let coords = [0, 0]
//  let waypoint = [1, 10]
//  puzzArr.forEach(function(array){
//   let letter = array[0]
//   let number = array[1]
//    if(letter === "N"){
//     waypoint[0] += number
//    } else if(letter === "S"){
//     waypoint[0] -= number
//    } else if(letter === "E"){
//     waypoint[1] += number
//    } else if(letter === "W"){
//     waypoint[1] -= number
//    } else if(letter === "L"){
//     if(number === 90){
//      waypoint = [waypoint[1], waypoint[0] * -1]
//     } else if(number === 180){
//      waypoint = [waypoint[0] * -1, waypoint[1] * -1]
//     } else if(number === 270){
//      waypoint = [waypoint[1] * -1, waypoint[0]]
//     }
//    } else if(letter === "R"){
//     if(number === 90){
//      waypoint = [waypoint[1] * -1, waypoint[0]]
//     } else if(number === 180){
//      waypoint = [waypoint[0] * -1, waypoint[1] * -1]
//     } else if(number === 270){
//      waypoint = [waypoint[1], waypoint[0] * -1]
//     }
//    } else if(letter === "F"){
//     coords[0] += waypoint[0] * number
//     coords[1] += waypoint[1] * number
//    }
//  })
//
//  console.log(coords);

// //DAY 12 ^^^^

//  //DAY 11
 // const puzzle = $('#puzzle1')
 //
 // let puzzleString = puzzle.html()
 //
 // // console.log(puzzleString);
 //
 // const puzzleArr = puzzleString.split('\n    ')
 //
 // console.log(puzzleArr);
 //
 // let newArray = []
 // puzzleArr.forEach(function(string){
 //  newArray.push(string.split(""))
 // })
 //
 // const lookRight = (i, j) => {
 //  let count = 0
 //  if (i >= 0 && i <= newArray.length - 1 && j >= 0 && j <= newArray[i].length - 1) {
 //   if (newArray[i][j + 1] === "#") {
 //    count += 1
 //   }
 //   if (newArray[i][j + 1] === ".") {
 //    j += 1
 //    if (i >= 0 && i <= newArray.length - 1 && j >= 0 && j <= newArray[i].length - 1) {
 //     count += lookRight(i, j)
 //    }
 //   }
 //  }
 //  return count
 // }
 // const lookLeft = (i, j) => {
 //  let count = 0
 //  if (i >= 0 && i <= newArray.length - 1 && j >= 0 && j <= newArray[i].length - 1) {
 //   if (newArray[i][j - 1] === "#") {
 //    count += 1
 //   }
 //   if (newArray[i][j - 1] === ".") {
 //    j -= 1
 //    if (i >= 0 && i <= newArray.length - 1 && j >= 0 && j <= newArray[i].length - 1) {
 //     count = lookLeft(i, j)
 //    }
 //   }
 //  }
 //  return count
 // }
 // const lookUp = (i, j) => {
 //  let count = 0
 //  if (i > 0 && i <= newArray.length - 1 && j >= 0 && j <= newArray[i].length - 1) {
 //   if (newArray[i - 1][j] === "#") {
 //    count += 1
 //   }
 //   if (newArray[i - 1][j] === ".") {
 //    i -= 1
 //    if (i > 0 && i <= newArray.length - 1 && j >= 0 && j <= newArray[i].length - 1) {
 //     count += lookUp(i, j)
 //    }
 //   }
 //  }
 //  return count
 // }
 // const lookUpAndRight = (i, j) => {
 //  let count = 0
 //  if (i > 0 && i <= newArray.length - 1 && j >= 0 && j < newArray[i].length - 1) {
 //   if (newArray[i - 1][j + 1] === "#") {
 //    count += 1
 //   }
 //   if (newArray[i - 1][j + 1] === ".") {
 //    j += 1
 //    i -= 1
 //    if (i > 0 && i <= newArray.length - 1 && j >= 0 && j < newArray[i].length - 1) {
 //     count += lookUpAndRight(i, j)
 //    }
 //   }
 //  }
 //  return count
 // }
 // const lookUpAndLeft = (i, j) => {
 //  let count = 0
 //  if (i > 0 && i <= newArray.length - 1 && j > 0 && j <= newArray[i].length - 1) {
 //   if (newArray[i - 1][j - 1] === "#") {
 //    count += 1
 //   }
 //   if (newArray[i - 1][j - 1] === ".") {
 //    i -= 1
 //    j -= 1
 //    if (i > 0 && i <= newArray.length - 1 && j > 0 && j <= newArray[i].length - 1) {
 //     count += lookUpAndLeft(i, j)
 //    }
 //   }
 //  }
 //  return count
 // }
 // const lookDown = (i, j) => {
 //  let count = 0
 //  if (i >= 0 && i < newArray.length - 1 && j >= 0 && j <= newArray[i].length - 1) {
 //   if (newArray[i + 1][j] === "#") {
 //    count += 1
 //   }
 //   if (newArray[i + 1][j] === ".") {
 //    i += 1
 //    if (i >= 0 && i < newArray.length - 1 && j >= 0 && j <= newArray[i].length - 1) {
 //     count += lookDown(i, j)
 //    }
 //   }
 //  }
 //  return count
 // }
 // const lookDownAndRight = (i, j) => {
 //  let count = 0
 //  if (i >= 0 && i < newArray.length - 1 && j >= 0 && j < newArray[i].length - 1) {
 //   if (newArray[i + 1][j + 1] === "#") {
 //    count += 1
 //   }
 //   if (newArray[i + 1][j + 1] === ".") {
 //    i += 1
 //    j += 1
 //    if (i >= 0 && i < newArray.length - 1 && j >= 0 && j < newArray[i].length - 1) {
 //     count += lookDownAndRight(i, j)
 //    }
 //   }
 //  }
 //  return count
 // }
 // const lookDownAndLeft = (i, j) => {
 //  let count = 0
 //  if (i >= 0 && i < newArray.length - 1 && j > 0 && j <= newArray[i].length - 1) {
 //   if (newArray[i + 1][j - 1] === "#") {
 //    count += 1
 //   }
 //   if (newArray[i + 1][j - 1] === ".") {
 //    i += 1
 //    j -= 1
 //    if (i >= 0 && i < newArray.length - 1 && j > 0 && j <= newArray[i].length - 1) {
 //     count += lookDownAndLeft(i, j)
 //    }
 //   }
 //  }
 //  return count
 // }
 //
 // function findCount(i, j) {
 //  let count = 0;
 //   count += lookRight(i, j, count)
 //   count += lookLeft(i, j, count)
 //   count += lookUp(i, j, count)
 //   count += lookUpAndRight(i, j, count)
 //   count += lookUpAndLeft(i, j, count)
 //   count += lookDown(i, j, count)
 //   count += lookDownAndRight(i, j, count)
 //   count += lookDownAndLeft(i, j, count)
 //  return count
 //  }
 //
 //
 // function assignSeats(array){
 //  array.forEach(function(thing){
 //   var i = thing[0]
 //   var j = thing[1]
 //   var char = thing[2]
 //   newArray[i][j] = char
 //  })
 // }
 //
 // function seatingRound() {
 //  let indexes = []
 //  for (let i = 0; i < newArray.length; i++) {
 //   for (let j = 0; j < newArray[i].length; j++) {
 //    if (newArray[i][j] === "L") {
 //
 //     let count = findCount(i, j);
 //
 //     if (count === 0 || isNaN(count)) {
 //      indexes.push([i, j, "#"])
 //     }
 //    }
 //    if (newArray[i][j] === "#") {
 //     let count = findCount(i, j);
 //     if (count >= 5) {
 //
 //      indexes.push([i, j, "L"])
 //     }
 //    }
 //   }
 //  }
 //  assignSeats(indexes)
 //  return newArray
 // }
 //
 //
 //
 //
 //
 //
 // function settleSeats(){
 //  let answer = 0;
 //  console.log(seatingRound());
 //  seatingRound().forEach(function(array){
 //   array.forEach(function(char){
 //    if(char === "#"){
 //     answer += 1;
 //    }
 //   })
 //  })
 //  console.log(answer);
 // }
 //
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()
 // settleSeats()

//  //DAY 11^^^^


//   //DAY 10
//  const puzzle = $('#puzzle2')
//
//  let puzzleString = puzzle.html()
//
//  // console.log(puzzleString);
//
//  const puzzleArr = puzzleString.split('\n    ')
//
//  console.log(puzzleArr);
//
//  puzzleArr.push("0")
//
//
//  // const numberArr = puzzleArr.map(n => Number(n))
//
//  function findMin(array){
//   var lowest = Math.min(...array)
//   array.splice(array.indexOf(lowest.toString()), 1)
//   var next = Math.min(...array)
//   if(next - lowest === 1){
//    plusOne += 1
//   } else {
//    plusThree += 1
//   }
//   return lowest
//  }
//
//  let plusOne = 0
//  let plusThree = 1
//  let newArray = []
//  for(var i = 0; puzzleArr.length > 1;){
//   newArray.push(findMin(puzzleArr))
//  }
//
//  console.log(plusOne);
//  console.log(plusThree);
//  console.log(`Answer: ${plusOne * plusThree}`);
//  console.log(newArray);
// newArray.push(19)
// newArray.push(22)
//  console.log(newArray);
//
//

 //DAY 10 ^^^^

//  //DAY 9
// const puzzle = $('#puzzle')
//
//  let puzzleString = puzzle.html()
//
//  // console.log(puzzleString);
//
//  const puzzleArr = puzzleString.split('\n    ')
//
//  console.log(puzzleArr);
//
// for(var i = 25; i < puzzleArr.length; i++){
//  let preamble = []
//  let current = Number(puzzleArr[i])
//  let works = false
//  for(var j = i - 25; j < i; j++){
//   preamble.push(Number(puzzleArr[j]))
//  }
//  for(var k = 0; k < preamble.length; k++) {
//   for (var l = 0; l < preamble.length; l++) {
//    if (preamble[k] !== preamble[l]) {
//     if (preamble[k] + preamble[l] === current) {
//      works = true
//     }
//    }
//   }
//  }
//  if(!works){
//   console.log(current);
//  }
// }
//
// function maxSubSum(arr) {
//  const answer1 = 15353384;
//    for(var i = 0; i < arr.length; i++){
//     var newArray = [];
//        var charAt = Number(arr[i])
//        newArray.push(charAt)
//        for(var j = i + 1; j < arr.length; j++){
//            var nextChar = Number(arr[j])
//            newArray.push(nextChar)
//            charAt += nextChar
//            if(charAt === answer1){
//             let theAnswer = Math.max(...newArray) + Math.min(...newArray)
//             return theAnswer
//            }
//
//        }
//    }
// }
//
//  console.log(maxSubSum(puzzleArr));
// //DAY 9 ^^^^^


 // //DAY 8
 // const puzzle = $('#puzzle')
 //
 // let puzzleString = puzzle.html()
 //
 // // console.log(puzzleString);
 //
 // const puzzleArr = puzzleString.split('\n    ')
 //
 // // console.log(puzzleArr);

//  let newArr = []
//  puzzleArr.forEach(function(puzzle){
//   let tinyArr = puzzle.split(" ")
//   newArr.push(tinyArr)
//  })
//  // console.log(newArr);
//  // for(var i = 57; i <= 57; i++){
//  //  newArr[i][0] = "nop"
//  // }
//  for(var i = 297; i <= 297; i++){
//   newArr[i][0] = "nop"
//  }
//  console.log(newArr);
//  let accumulator = 0
//  let codeIndex = []
//  function calculateAcc(array){
//   let indexes = []
//   for(let i = 0; i < array.length;){
//    if(indexes.includes(i)){
//     console.log(accumulator);
//     return "no";
//    } else{
//     if(array[i][0] === "acc"){
//      indexes.push(i)
//      accumulator += parseFloat(array[i][1])
//      ++i
//     } else if (array[i][0] === "jmp"){
//      indexes.push(i)
//      codeIndex.push(["jmp", "nop", i])
//      i += parseFloat(array[i][1])
//     } else if(array[i][0] === "nop") {
//      indexes.push(i)
//      codeIndex.push(["nop", "jmp", i])
//      ++i
//     }
//    }
//   }
//   return accumulator + "success!"
//  }
// let wrong = []
//
//  console.log(calculateAcc(newArr));
//  function calculateAcc2(array){
//   let indexes = []
//   for(let i = 0; i < array.length;){
//    if(indexes.includes(i)){
//     wrong.push(accumulator);
//     return "no";
//    } else{
//     if(array[i][0] === "acc"){
//      indexes.push(i)
//      accumulator += parseFloat(array[i][1])
//      ++i
//      continue
//     } else if (array[i][0] === "jmp"){
//      indexes.push(i)
//      i += parseFloat(array[i][1])
//      continue
//     } else if(array[i][0] === "nop") {
//      indexes.push(i)
//      ++i
//      continue
//     }
//    }
//   }
//  return accumulator
//  }
//
// calculateAcc(newArr)
//
//
//
//  console.log(codeIndex)
//
//
//   function checkIndexes(array){
//    let index = array[2]
//    let change = array[1]
//    let original = array[0]
//    newArr[index][0] = change
//    console.log(calculateAcc2(newArr));
//    newArr[index][0] = original
//   }
//
//   for(var k = 0; k < codeIndex.length; k++){
//    checkIndexes(codeIndex[k])
//   }
//  console.log(wrong);

//  //DAY 8 ^^^^^

 //   // DAY 7
//  const puzzle = $('#puzzle')
//  let puzzleString = puzzle.html()
//  const puzzleArr = puzzleString.split('\n    ')
//
//  let testArr2 = []
//  puzzleArr.forEach(function(string){
//   let newArr = string.split(" contain ")
//   testArr2.push(newArr)
//  })
//
//  let finalArray = []
//  testArr2.forEach(function(array){
//   let bagTitleArray = []
//   let contentArray = []
//   let bagArray = []
//   bagTitleArray.push(array[0])
//   contentArray.push(array[1].split(", "))
//   bagArray.push(bagTitleArray)
//   bagArray.push(contentArray)
//   finalArray.push(bagArray)
//  })
//
//  let searchArr = ["shiny gold bags"]
//
//  function multiply(string){
//   let answer = 0;
//   for(var i = 0; i < finalArray.length; i++){
//    if(finalArray[i][0][0].includes(string)){
//     if(!finalArray[i][1][0][0].includes("no other")){
//      let current = finalArray[i];
//      let numOne = Number(current[1][0][0].slice(0, 1))
//      let firstStr = current[1][0][0].slice(2)
//      if(firstStr.includes(".")){
//       firstStr = firstStr.slice(0, firstStr.length - 1)
//      }
//      if(multiply(firstStr) === 0){
//       answer += numOne
//      } else {
//       answer += numOne * multiply(firstStr) + numOne
//      }
//      if(current[1][0][1] != undefined){
//       let numTwo = Number(current[1][0][1].slice(0, 1))
//       let secondStr = current[1][0][1].slice(2)
//       if(secondStr.includes(".")){
//        secondStr = secondStr.slice(0, secondStr.length - 1)
//       }
//       if(multiply(secondStr) === 0){
//        answer += numTwo
//       } else {
//        answer += numTwo * multiply(secondStr) + numTwo
//       }
//      }
//      if(current[1][0][2] != undefined){
//       let numThree = Number(current[1][0][2].slice(0, 1))
//       let thirdStr = current[1][0][2].slice(2)
//       if(thirdStr.includes(".")){
//        thirdStr = thirdStr.slice(0, thirdStr.length - 1)
//       }
//       if(multiply(thirdStr) === 0){
//        answer += numThree
//       } else {
//        answer += numThree * multiply(thirdStr) + numThree
//       }
//      }
//      if(current[1][0][3] != undefined) {
//       let numFour = Number(current[1][0][3].slice(0, 1))
//       let fourthStr = current[1][0][3].slice(2)
//       if (fourthStr.includes(".")) {
//        fourthStr = fourthStr.slice(0, fourthStr.length - 1)
//       }
//       if (multiply(fourthStr) === 0) {
//        answer += numFour
//       } else {
//        answer += numFour * multiply(fourthStr) + numFour
//       }
//      }
//     }
//    }
//   }
//   return answer
//  }
//
// let realAnswer = 1
//
//  searchArr.forEach(function(bag){
//   let finalAnswer = 0;
//   for(var i = 0; i < finalArray.length; i++){
//    if(finalArray[i][0][0].includes(bag)){
//     if(!finalArray[i][1][0][0].includes("no other")){
//      let current = finalArray[i];
//      let numOne = Number(current[1][0][0].slice(0, 1))
//      let firstStr = current[1][0][0].slice(2)
//      if(firstStr.includes(".")){
//       firstStr = firstStr.slice(0, firstStr.length - 1)
//      }
//      if(multiply(firstStr) === 0){
//        finalAnswer += numOne
//      } else {
//        finalAnswer += numOne * multiply(firstStr) + numOne
//      }
//      if(current[1][0][1] != undefined){
//       let numTwo = Number(current[1][0][1].slice(0, 1))
//       let secondStr = current[1][0][1].slice(2)
//       if(secondStr.includes(".")){
//        secondStr = secondStr.slice(0, secondStr.length - 1)
//       }
//       if(multiply(secondStr) === 0){
//         finalAnswer += numTwo
//       } else {
//         finalAnswer += numTwo * multiply(secondStr) + numTwo
//       }
//      }
//      if(current[1][0][2] != undefined){
//       let numThree = Number(current[1][0][2].slice(0, 1))
//       let thirdStr = current[1][0][2].slice(2)
//       if(thirdStr.includes(".")){
//        thirdStr = thirdStr.slice(0, thirdStr.length - 1)
//       }
//       if(multiply(thirdStr) === 0){
//         finalAnswer += numThree
//       } else {
//         finalAnswer += numThree * multiply(thirdStr) + numThree
//       }
//      }
//      if(current[1][0][3] != undefined){
//       let numFour = Number(current[1][0][3].slice(0, 1))
//       let fourthStr = current[1][0][3].slice(2)
//       if(fourthStr.includes(".")){
//        fourthStr = fourthStr.slice(0, fourthStr.length - 1)
//       }
//       if(multiply(fourthStr) === 0){
//         finalAnswer += numFour
//       } else {
//         finalAnswer += numFour * multiply(fourthStr) + numFour
//       }
//      }
//     }
//    }
//   }
//   realAnswer *= finalAnswer
//  })
//  console.log(realAnswer);
// //DAY 7 ^^^^^



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


