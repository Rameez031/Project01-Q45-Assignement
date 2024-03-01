//Question 2
let msg = "Hello Yamman, would you like to learn some Python today?!";
console.log(msg);

//Question 3
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

// Question 4
let famQoute = "Billgates once said,'If You Are Born Poor It’s Not Your Mistake, But If You Die Poor It’s Your Mistake'"
console.log(famQoute);

// Question 5
let famous_person = "BillGates once said!";
let famous_qoute = "'If You Are Born Poor It’s Not Your Mistake, But If You Die Poor It’s Your Mistake'"
console.log(famous_person + famous_qoute);

// Question 6
let nam = "\t \n Rameez \t \n";
console.log(nam);

// Question 7
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

// Question 8
// console.log(7 + 1);
// console.log(18 - 10);
// console.log(4 * 2);
// console.log(40 / 5);

// Question 9
let favNum = 5;
let myMsg = "My favourite num is";
console.log(myMsg + " " + favNum);

// Question 10
/*Rameez Ramzy ---- Date 19/Feb/2024
i am Learning Typescript using node.js and my programm going to be well.*/

// Question 11
let freindsName = ["Rabbi", "Yamman", "Taswwor"];
console.log(freindsName[0]);
console.log(freindsName[1]);
console.log(freindsName[2]);
for (let i = 0; i < freindsName.length; i++) {
    console.log("Freind " + (i + 1) + ": " + freindsName[i])
}

// Question 12
for (let i = 0; i < freindsName.length; i++) {
    console.log(`ASSALAM O ALAIKUM ${freindsName[i]}! Have a Great day`)
}

// Question 13
let cars = ["Supra Mk4", "vigo", "porshe", "Rolce Royce"];
for (let i = 0; i < cars.length; i++) {
    console.log(`I would like to own a ::${cars[i]}:: Car`);
}

// Question 14
let dinner_guest = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates"];
for (let i = 0; i < dinner_guest.length; i++) {
    console.log(`ASSALAM O ALAIKUM Mr. ${dinner_guest[i]}, you are invited to join me for dinner. It would be an honor to have your company.\n`);
}

// Question 15
dinner_guest = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates",];
console.log(`Due to some personal reasons Mr.${dinner_guest[2]} will not come in my dinner `);
dinner_guest[2] = "Elon Musk";

console.log(`New list of my Freinds who are coming to my dinner\n`)
for (let i = 0; i < dinner_guest.length; i++) {
    console.log(`${i + 1}. ${dinner_guest[i]}`);
}

// Question 16
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

// Question 17

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

//Question 18
let fav_Place = ["soudia", "Malysia", "Iran", "Turkey", "America"];
console.log(fav_Place);

let sorted_place = fav_Place.slice();
sorted_place.sort();

console.log(`Original Places:  ${fav_Place}`);
console.log(`Sorted Places: ${sorted_place}`);
console.log(`still in its original order:\n ${fav_Place}`);

let revFavPlace = fav_Place.slice();
revFavPlace.reverse();

console.log(`Original places: \n ${fav_Place}`);
console.log(`Reverse Favourit Places:\n ${revFavPlace}`);

fav_Place.reverse();
console.log(`reverse: ${fav_Place}`);

fav_Place.sort();
console.log(`sorted: ${fav_Place}`);

fav_Place.reverse();
console.log(`reverse: ${fav_Place}`);

// Question 19
dinner_guest = ["Brenden Erich", "Sam Altmen", "Elbert ainstien", "BillGates"];
console.log(`Hey! Dear Mr ${dinner_guest} you are invited again😌`);

// Question 20
let prog_language = ["Python", "JavaScript", "Java", "ReactNative", "Next.js"];
console.log(`List of Programming Languages:\n ${prog_language}`);

// Question 21 and 22
let object_Lang: { Language: string; year: number; }[] = [
    { Language: "Python", year: 1991 },
    { Language: "JavaScript", year: 1995 },
    { Language: "Java", year: 1991 },
    { Language: "C++", year: 1979 }
];
let invalid_index = object_Lang[3];
if (object_Lang.length > 3) {
    let valid_index = object_Lang[3];
    console.log("language at index 3: ", valid_index);
} else {
    console.log("Invalid index access. The array lenght is:", object_Lang.length);
}

// Question 23
//Comparison Operator
let car = 'subaru'
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'kawasaki'? I predict False.");
console.log(car == 'kawasaki');

console.log("Is five grater than 4? I predict True.");
console.log(5 > 4);

console.log("Is 10 less than 20? I predict True.");
console.log(10 < 20);

console.log("Is mango start with n? I predict False.");
console.log("mango".startsWith("n"));

console.log("Is mango end with o? I predict True.");
console.log("mango".endsWith("o"));

console.log("Is mango contain t? I predict False.");
console.log("mango".includes("t"));

console.log("Is true && false? I predict False.");
console.log(true && false);

console.log("Is true || false? I predict True.");
console.log(true || false);

console.log("Is false ? I predict False.");
console.log(false);

// Question 24
let fruit_king: string = "Mango"
console.log("Is Apple is king of fruit? I predict False.");
console.log("Apple" == fruit_king);

console.log("Is Mango is king of fruit? I predict True.");
console.log("Mango" == fruit_king);

let my_name: string = "Rameez"
console.log("Is rameeez is my name in lowercase? I predict True.");
console.log(my_name.toLowerCase() == "rameez");

console.log("Is Rameez is my name in lowercase? I predict False.");
console.log(my_name.toLowerCase() == "Rameez");

console.log("is Six greater than two? I predict True.")
console.log(6 > 2)

console.log("is Six lesser than two? I predict False.")
console.log(6 < 2)

console.log("is Six divisible by two? I predict True.")
console.log(6 % 2 == 0)

console.log("is seven is divisible by two? I predict False.")
console.log(7 % 2 == 0)

console.log("is israel is State? i predict False.")
console.log(true && false)

console.log("is Palestine is State? i predict True.")
console.log(true || false)
