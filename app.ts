//Q2
let msg = "Hello Yamman, would you like to learn some Python today?!";
console.log(msg);

//Q3
let perName = "Yamman sheikh";

//Convert to lowercase::
let lowercaseName = perName.toLowerCase();
console.log("Lowercase: ", lowercaseName);

//Convert to Uppercase::
let uppercaseName = perName.toUpperCase();
console.log("UPPERCASE: ", uppercaseName);

// Convert to title::
let titlecaseName = perName.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
console.log("TitleCase: ", titlecaseName);

// Q4
let famQoute = "Billgates once said,'If You Are Born Poor It’s Not Your Mistake, But If You Die Poor It’s Your Mistake'"
console.log(famQoute);

// Q5
let famous_person = "BillGates once said!";
let famous_qoute = "'If You Are Born Poor It’s Not Your Mistake, But If You Die Poor It’s Your Mistake'"
console.log(famous_person + famous_qoute);

// Q6
let nam = "\t \n Rameez \t \n";
console.log(nam);

// Q7
// Add
let addNum = 3 + 5;
console.log("Addition:\t" + addNum);

// Sub
let subNum = 14 - 6;
console.log("substraction:\t" + subNum);

// Multi
let multiNum = 2 * 4;
console.log("Multiply\t" + multiNum);

// Divide
let divNum = 32 / 4;
console.log("Divsion:\t" + divNum);

// Q8
// console.log(7 + 1);
// console.log(18 - 10);
// console.log(4 * 2);
// console.log(40 / 5);

// Q9
let favNum = 5;
let myMsg = "My favourite num is";
console.log(myMsg + " " + favNum);

// Q10
/*Rameez Ramzy ---- Date 19/Feb/2024
i am Learning Typescript using node.js and my programm going to be well.*/

// Q11
let freindsName = ["Rabbi", "Yamman", "Taswwor"];
console.log(freindsName[0]);
console.log(freindsName[1]);
console.log(freindsName[2]);
for (let i = 0; i < freindsName.length; i++) {
    console.log("Freind " + (i + 1) + ": " + freindsName[i])
}

// Q12
for (let i = 0; i < freindsName.length; i++) {
    console.log(`ASSALAM O ALAIKUM ${freindsName[i]}! Have a Great day`)
}

// Q13
let cars = ["Supra Mk4", "vigo", "porshe", "Rolce Royce"];
for (let i = 0; i < cars.length; i++) {
    console.log(`I would like to own a ::${cars[i]}:: Car`);
}

// Q14
let dinner_guest = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates"];
for (let i = 0; i < dinner_guest.length; i++) {
    console.log(`ASSALAM O ALAIKUM Mr. ${dinner_guest[i]}, you are invited to join me for dinner. It would be an honor to have your company.\n`);
}

// Q15
dinner_guest = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates",];
console.log(`Due to some personal reasons Mr.${dinner_guest[2]} will not come in my dinner `);
dinner_guest[2] = "Elon Musk";

console.log(`New list of my Freinds who are coming to my dinner\n`)
for (let i = 0; i < dinner_guest.length; i++) {
    console.log(`${i + 1}. ${dinner_guest[i]}`);
}

// Q16
console.log(`${dinner_guest}:\n I have found bigger dinner table than i think to invite three more freinds`);

//adding three more freinds 
//at beginning;
dinner_guest.unshift("Ameen Alam");

//at Middle;
dinner_guest.splice(2, 0, "Guido van Rossum");

//at Last
dinner_guest.push("Adem freemen");

//Print all Guest alongwith message.       
for (let i = 0; i < dinner_guest.length; i++) {
    console.log(`Mr ${dinner_guest[i]} you are invited to my dinner`);
}

//Q17

console.log(`\n Table is not available I can invite only Two Persons\n`);
console.log(dinner_guest.length);

while (dinner_guest.length > 2) {
    let rm_guest = dinner_guest.pop();
    if (rm_guest) {
        console.log(`Sorry Mr ${rm_guest} We have not enough Space, So you are not Invited Yet!\n`);
    }
}
console.log(`The final two guests are:\t${dinner_guest}\n`);
for (let i = 0; i < dinner_guest.length; i++) {
    console.log(`Dear ${dinner_guest[i]}  you are still in our List! \n`);
}
dinner_guest.pop()
dinner_guest.pop()
console.log(` we have 0 guests in list : ${dinner_guest}`);

//Q18
let fav_Place = ["soudia", "Iran", "Turkey", "Malysia", "Iraq"];
console.log(fav_Place);

let sorted_place = fav_Place.slice();
sorted_place.sort();

console.log(`Original Guests:  ${fav_Place}`);
console.log(`Sorted Guests: ${sorted_place}`);




