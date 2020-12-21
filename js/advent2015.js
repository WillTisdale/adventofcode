$(document).ready(function(){
    "use strict";

    let info = $('#info')

    info = info.html()

    info = info.split("\n    ")

    info = info.map(function(position){
        return position.split(" ")
    })

    let newInfo = []
    info.forEach(function(array){
        array.forEach(function(string){
            newInfo.push(string.split(""))
        })
    })

    let numbers = ["0","1","2","3","4","5","6","7","8","9"]

    let oldInfo = []
    newInfo.forEach(function(array){
        numbers.forEach(function(number){
            if(array.includes(number)){
                if(!oldInfo.includes(array)){
                    oldInfo.push(array)
                }
            }
        })
    })

    info = oldInfo.map(function(array){
        return array.join("")
    })

    oldInfo = [];
    newInfo = [];
    let allInfo = [];
    let count = 0
    for(var i = 0; i < info.length; i++){
        count += 1
        newInfo.push(info[i])
        if(count % 2 === 0){
            oldInfo.push(newInfo)
            allInfo.push(oldInfo)
            newInfo = []
            oldInfo = []
        }
    }

    for (var i = 0; i < allInfo.length; i++){
        for(var j = 0; j < allInfo[i].length; j++){
            for(var k = 0; k < allInfo[i][j].length; k++){
                allInfo[i][j][k] = allInfo[i][j][k].split("-")
            }
        }
    }

    console.log(allInfo[0][0][1]);

    let myTicket = $('#myTicket')

    myTicket = myTicket.html()

    myTicket = myTicket.split(",")

    console.log(myTicket);

    let nearbyTickets = $('#nearbyTickets')

    nearbyTickets = nearbyTickets.html()

    nearbyTickets = nearbyTickets.split("\n    ")

    nearbyTickets = nearbyTickets.map(string => string.split(","))

    console.log(nearbyTickets);

    let doesNotFit = [];

    const newNearbyTickets = []

    nearbyTickets.forEach(function(ticket){
        ticket.forEach(function(number){
            number = Number(number);
            count = 0;
            var fits = 0
            for (var i = 0; i < allInfo.length; i++){
                for(var j = 0; j < allInfo[i].length; j++){
                    for(var k = 0; k < allInfo[i][j].length; k++){
                        for(var l = 0; l < 1; l++) {
                            if (number < Number(allInfo[i][j][k][l + 1]) && number > Number(allInfo[i][j][k][l])) {
                                fits += 1
                            }
                        }
                    }
                }
            }
            if(fits < 1){
                doesNotFit.push(number)
                nearbyTickets.splice(nearbyTickets.indexOf(ticket), 1)
            }
        })
    })

    console.log(doesNotFit);

    const answer = doesNotFit.reduce((total, current) => {
        return total += current;
    }, 0)

    var newTicket = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]]

    console.log(nearbyTickets.length);

    function checkTickets(n, o, lowLow, lowHigh, highLow, highHigh){
        let count = 0;
        nearbyTickets.forEach(function(ticket){
            for(var m = n; m < o; m++){
                let newNumber = Number(ticket[m])
                let index = allInfo.indexOf(allInfo[i])
                if((newNumber >= lowLow && newNumber <= lowHigh) || (newNumber >= highLow && newNumber <= highHigh)){
                    count += 1
                }
            }
        })
        return count
    }

    // function newFunc(){
    //     for (var i = 0; i < allInfo.length; i++){
    //         for(var j = 0; j < allInfo[i].length; j++){
    //             var lowHigh = undefined
    //             var lowLow = undefined
    //             var highHigh = undefined
    //             var highLow = undefined
    //             for(var k = 0; k < allInfo[i][j].length; k++){
    //                 for(var l = 0; l < 1; l++) {
    //                     if(k === 0){
    //                         lowHigh = Number(allInfo[i][j][k][l + 1])
    //                         lowLow = Number(allInfo[i][j][k][l])
    //                     } else if(k === 1){
    //                         highHigh = Number(allInfo[i][j][k][l + 1])
    //                         highLow = Number(allInfo[i][j][k][l])
    //                     }
    //                 }
    //                 if(highLow !== undefined){
    //                     for(let p = 0; i < 20; p++){
    //                         if(checkTickets(p, p+1, lowLow, lowHigh, highLow, highHigh) >= 195){
    //                             console.log(allInfo[i][j] + "could be index " + p)
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }

    // newFunc()

    // console.log(checkTickets(0, 1, 41, 526, 547, 973));


    console.log(newTicket);

    console.log(answer);


    // const puzzle = $('#puzzle')
    //
    // let puzzleStr = puzzle.html()
    //
    // let puzzleArr = puzzleStr.split(",")
    //
    // console.log(puzzleArr);
    //
    // puzzleArr = puzzleArr.map(n => Number(n))
    //
    // function findCount(i){
    //     let count = 0
    //     for(var j = 0; j < puzzleArr.length; j++){
    //         if(puzzleArr[i - 1] === puzzleArr[j]){
    //             count += 1
    //         }
    //     }
    //     return count
    // }
    //
    // function findDifference(i){
    //     for(var j = puzzleArr.length - 2; j >= 0; j--){
    //         if(puzzleArr[i - 1] === puzzleArr[j]){
    //             let index = j
    //             let difference = (i) - (index + 1)
    //             return difference
    //         }
    //     }
    // }
    //
    // const num = 2020
    //
    // for(var i = 0; i < num; i++){
    //     if(puzzleArr[i] === undefined){
    //         if(findCount(i) === 1){
    //             puzzleArr.push(0)
    //         } else if(findCount(i) > 1){
    //             puzzleArr.push(findDifference(i))
    //         }
    //         if(i === num -1){
    //             var answer = puzzleArr[i];
    //         }
    //     }
    // }
    //
    // console.log(answer);

//     const time    = performance.now(),
//
//         //assign the last index a number occurred to a property of the unique object
//         add     = (number, i) => { unique[number] = i; };
//
//     let   numbers = [1,0,18,10,19,6],
//         unique  = {},
//         i       = 0;
//
// //add input numbers (excluding the last one) to unique object
//     while (i < numbers.length - 1) { add(numbers[i], i); i++; }
//
// //starting with the final number in the input array, play the game
//     while (numbers.length < 30000000) {
//         const index = numbers.length - 1;
//
//         //hasOwnProperty is much faster than lastIndexOf in this case
//         const prev = unique.hasOwnProperty(numbers[index]) ? unique[numbers[index]] : -1;
//
//         const answer = prev < 0 ? 0 : index - prev;
//         numbers.push(answer);
//         add(numbers[index], i);
//         i++;
//     }
//
// //how many milliseconds did it take?
//     console.log(performance.now() - time);
//
// //what is the answer?
//     console.log(numbers[numbers.length - 1]);
})

