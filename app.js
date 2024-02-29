//Q2
var msg = "Hello Yamman, would you like to learn some Python today?!";
console.log(msg);
//Q3
var perName = "Yamman sheikh";
//Convert to lowercase::
var lowercaseName = perName.toLowerCase();
console.log("Lowercase: ", lowercaseName);
//Convert to Uppercase::
var uppercaseName = perName.toUpperCase();
console.log("UPPERCASE: ", uppercaseName);
// Convert to title::
var titlecaseName = perName.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
console.log("TitleCase: ", titlecaseName);
// Q4
var famQoute = "Billgates once said,'If You Are Born Poor It’s Not Your Mistake, But If You Die Poor It’s Your Mistake'";
console.log(famQoute);
// Q5
var famous_person = "BillGates once said!";
var famous_qoute = "'If You Are Born Poor It’s Not Your Mistake, But If You Die Poor It’s Your Mistake'";
console.log(famous_person + famous_qoute);
// Q6
var nam = "\t \n Rameez \t \n";
console.log(nam);
// Q7
// Add
var addNum = 3 + 5;
console.log("Addition:\t" + addNum);
// Sub
var subNum = 14 - 6;
console.log("substraction:\t" + subNum);
// Multi
var multiNum = 2 * 4;
console.log("Multiply\t" + multiNum);
// Divide
var divNum = 32 / 4;
console.log("Divsion:\t" + divNum);
// Q8
// console.log(7 + 1);
// console.log(18 - 10);
// console.log(4 * 2);
// console.log(40 / 5);
// Q9
var favNum = 5;
var myMsg = "My favourite num is";
console.log(myMsg + " " + favNum);
// Q10
/*Rameez Ramzy ---- Date 19/Feb/2024
i am Learning Typescript using node.js and my programm going to be well.*/
// Q11
var freindsName = ["Rabbi", "Yamman", "Taswwor"];
console.log(freindsName[0]);
console.log(freindsName[1]);
console.log(freindsName[2]);
for (var i = 0; i < freindsName.length; i++) {
    console.log("Freind " + (i + 1) + ": " + freindsName[i]);
}
// Q12
for (var i = 0; i < freindsName.length; i++) {
    console.log("ASSALAM O ALAIKUM ".concat(freindsName[i], "! Have a Great day"));
}
// Q13
var cars = ["Supra Mk4", "vigo", "porshe", "Rolce Royce"];
for (var i = 0; i < cars.length; i++) {
    console.log("I would like to own a ::".concat(cars[i], ":: Car"));
}
// Q14
var dinner_guest = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates"];
for (var i = 0; i < dinner_guest.length; i++) {
    console.log("ASSALAM O ALAIKUM Mr. ".concat(dinner_guest[i], ", you are invited to join me for dinner. It would be an honor to have your company.\n"));
}
// Q15
dinner_guest = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates",];
console.log("Due to some personal reasons Mr.".concat(dinner_guest[2], " will not come in my dinner "));
dinner_guest[2] = "Elon Musk";
console.log("New list of my Freinds who are coming to my dinner\n");
for (var i = 0; i < dinner_guest.length; i++) {
    console.log("".concat(i + 1, ". ").concat(dinner_guest[i]));
}
// Q16
console.log("".concat(dinner_guest, ":\n I have found bigger dinner table than i think to invite three more freinds"));
//adding three more freinds 
//at beginning;
dinner_guest.unshift("Ameen Alam");
//at Middle;
dinner_guest.splice(2, 0, "Guido van Rossum");
//at Last
dinner_guest.push("Adem freemen");
//Print all Guest alongwith message.       
for (var i = 0; i < dinner_guest.length; i++) {
    console.log("Mr ".concat(dinner_guest[i], " you are invited to my dinner"));
}
//Q17
console.log("\n Table is not available I can invite only Two Persons\n");
console.log(dinner_guest.length);
while (dinner_guest.length > 2) {
    var rm_guest = dinner_guest.pop();
    if (rm_guest) {
        console.log("Sorry Mr ".concat(rm_guest, " We have not enough Space, So you are not Invited Yet!\n"));
    }
}
console.log("The final two guests are:\t".concat(dinner_guest, "\n"));
for (var i = 0; i < dinner_guest.length; i++) {
    console.log("Dear ".concat(dinner_guest[i], "  you are still in our List! \n"));
}
dinner_guest.pop();
dinner_guest.pop();
console.log(" we have 0 guests in list : ".concat(dinner_guest));
//Q18
var fav_Place = ["soudia", "Iran", "Turkey", "Malysia", "Iraq"];
console.log(fav_Place);
var sorted_place = fav_Place.slice();
sorted_place.sort();
console.log("Original Guests:  ".concat(fav_Place));
console.log("Sorted Guests: ".concat(sorted_place));
