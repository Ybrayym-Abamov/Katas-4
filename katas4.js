const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";


function writeToDOM(kataResult, Kata) {

    let header = document.createElement("h2");
    header.textContent = "Kata" + Kata
    document.body.appendChild(header)
    
    let div = document.createElement("div");
    div.textContent = JSON.stringify(kataResult)
    document.body.appendChild(div);  
}


function kata1 () {
    let kataResult = gotCitiesCSV.split(',');   
    let number = "1"
    writeToDOM(kataResult, number);
}
kata1();


function kata2 () {
    let kataResult = bestThing.split(' ')
    let number = "2"
    writeToDOM(kataResult, number)
}
kata2();


function kata3 () {
    let kataResult = gotCitiesCSV.replace(/,/gi, "; ")
    let number = "3"
    writeToDOM(kataResult, number)
}
kata3();


function kata4 () {
    let kataResult = lotrCitiesArray.join(", ");
    let number = "4"
    writeToDOM(kataResult, number)
}
kata4();    
   

function kata5 () {
    let kataResult = lotrCitiesArray.slice(0,5);            
    let number = "5"
    writeToDOM (kataResult, number)
}
kata5();


function kata6 () {
    let kataResult = lotrCitiesArray.slice(3,8)
    let number = "6"
    writeToDOM (kataResult, number)
}
kata6();


function kata7 () {
    let kataResult = lotrCitiesArray.slice(2,5)
    let number = "7"
    writeToDOM (kataResult, number)
}
kata7();


function kata8 () {
    let modedArray1 = lotrCitiesArray.splice(2,1)
    let kataResult = lotrCitiesArray
    let number = "8"
    writeToDOM (kataResult, number)
}
kata8();  


function kata9 () {
    let modedArray2 = lotrCitiesArray.splice(6,2)
    let kataResult = lotrCitiesArray
    let number = "9"
    writeToDOM (kataResult, number)
}
kata9();

function kata10 () {
    let modedArray3 = lotrCitiesArray.splice(2, 0, 'Rohan')
    let kataResult = lotrCitiesArray
    let number = "10"
    writeToDOM (kataResult, number)
}
kata10();


function kata11 () {
    let modedArray4 = lotrCitiesArray.splice(5,1, 'Deadest Marshes')
    let kataResult = lotrCitiesArray
    let number = "11"
    writeToDOM (kataResult, number)
}
kata11();

function kata12 () {
    let kataResult = bestThing.slice(0,14)
    let number = "12"
    writeToDOM (kataResult, number)
}
kata12();


function kata13 () {
    let kataResult = bestThing.slice(64,81)
    let number = "13"
    writeToDOM (kataResult, number)
}
kata13();


function kata14 () {
    let kataResult = bestThing.slice(23, 39)
    let number = "14"
    writeToDOM (kataResult, number)
}
kata14();


function kata15 () {
    let kataResult = bestThing.substring(64, 81)
    let number = "15"
    writeToDOM (kataResult, number)
}
kata15();   

function kata16 () {
    let kataResult = bestThing.substring(23, 39)
    let number = "16"
    writeToDOM (kataResult, number)
}
kata16();


function kata17 () {
    let kataResult = bestThing.indexOf("only")
    let number = "17"
    writeToDOM (kataResult, number)
}
kata17();

function kata18 () {
    let kataResult = bestThing.indexOf("bit")
    let number = "18"
    writeToDOM (kataResult, number)
}
kata18();

function kata19 () {
    let kataResult = []
    let number = "19"
    //for loop over gotcities
    //.include vowels pairs
    // push new array
    let modedString1 = gotCitiesCSV.split(",")
    for (i = 0; i < modedString1.length; i++) {
      if (modedString1[i].includes("aa") || modedString1[i].includes("ee") || modedString1[i].includes("ii") || modedString1[i].includes("uu") || modedString1[i].includes("oo")) {
        kataResult.push(modedString1[i]);
      }
    }
    writeToDOM (kataResult, number)
}
kata19();


function kata20 () {
    let kataResult = lotrCitiesArray.slice(0,2)
    let number = "20"
    writeToDOM (kataResult, number)
}
kata20();


function kata21 () {
    let kataResult = []
    let number = "21"
    let modedString2 = bestThing.split(" ")
    for (i = 0; i < modedString2.length; i ++) {
        if (modedString2[i].startsWith("b")) {
            kataResult.push(modedString2[i]);
        }
    }
    writeToDOM (kataResult, number)
}
kata21();


function kata22 () {
    let kataResult = " "
    let number = "22"
    // let modedString3 = lotrCitiesArray() 
    // for (i = 0; i < lotrCitiesArray.length; i ++)
        if (lotrCitiesArray.includes("Mirkwood")) {
            kataResult = "Yes"
        } else {
            kataResult = "No"
        }
    writeToDOM (kataResult, number)
}
kata22(); 


function kata23 () {
    let kataResult = " "
    let number = "23"
    if (lotrCitiesArray.includes("Hollywood")) {
        kataResult = "Yes"
    } else {
        kataResult = "No"
    }
    writeToDOM (kataResult, number)
}
kata23();


function kata24 () {
    let kataResult = lotrCitiesArray.indexOf("Mirkwood")
    let number = "24"
    writeToDOM (kataResult, number)
}
kata24();


function kata25 () {
    let kataResult = lotrCitiesArray.filter(spacedWord=>spacedWord.includes(" ")) 
    let number = "25"
    writeToDOM (kataResult, number)
}
kata25();
   

function kata26 () {
    let kataResult = lotrCitiesArray.reverse()
    let number = "26"
    writeToDOM (kataResult, number)
}
kata26();


function kata27 () {
    let kataResult = lotrCitiesArray.sort()
    let number = "27"
    writeToDOM (kataResult, number)
}
kata27();


function kata28 () {
    let kataResult = lotrCitiesArray.sort((word1, word2) => (word1.length-word2.length)) 
    let number = "28"
    writeToDOM (kataResult, number)
}
kata28();

// let = popedOffArray = " "

function kata29 () {
    // let kataResult = lotrCitiesArray
    let number = "29"
    popedOffArray = lotrCitiesArray.pop()
    console.log(popedOffArray)
    // let modedArray5 = lotrCitiesArray.pop() 
    // kataResult.push(modedArray5)
    writeToDOM (lotrCitiesArray, number)
    return popedOffArray
}
kata29();


function kata30 () {
    lotrCitiesArray.push(popedOffArray)
    let number = "30"
    writeToDOM (lotrCitiesArray, number)
}
kata30();


function kata31 () {
    shiftedArray = lotrCitiesArray.shift()
    let number = "31"
    writeToDOM (lotrCitiesArray, number)
}
kata31();


function kata32 () {
    lotrCitiesArray.unshift(shiftedArray)
    let number = "32"
    writeToDOM (lotrCitiesArray, number)
}
kata32();