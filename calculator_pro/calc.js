function calculateResult(){

let name=document.getElementById("name").value;

let marks=[
Number(document.getElementById("sub1").value),
Number(document.getElementById("sub2").value),
Number(document.getElementById("sub3").value),
Number(document.getElementById("sub4").value),
Number(document.getElementById("sub5").value)
];

let day=document.getElementById("day").value;


// Validation

for(let i=0;i<marks.length;i++){

if(marks[i]<0 || marks[i]>100 || isNaN(marks[i])){

alert("Please enter marks between 0 and 100");

return;

}

}


// Total using loop

let total=0;

for(let i=0;i<marks.length;i++){

total+=marks[i];

}

let average=total/5;

let percentage=(total/500)*100;


// Grade

let grade;

if(percentage>=90){

grade="A+";

}
else if(percentage>=80){

grade="A";

}
else if(percentage>=70){

grade="B";

}
else if(percentage>=60){

grade="C";

}
else{

grade="Fail";

}


// Highest and Lowest

let highest=Math.max(...marks);

let lowest=Math.min(...marks);


// Motivational Message

let message="";

switch(day){

case "Monday":
message="New week, new goals!";
break;

case "Tuesday":
message="Keep improving every day!";
break;

case "Wednesday":
message="Halfway to success!";
break;

case "Thursday":
message="Never stop learning!";
break;

case "Friday":
message="Finish strong!";
break;

case "Saturday":
message="Practice makes perfect!";
break;

case "Sunday":
message="Recharge and prepare!";
break;

default:
message="Have a wonderful day!";
}


// Display Subject Marks using Loop

let subjectList="";

for(let i=0;i<marks.length;i++){

subjectList+="Subject "+(i+1)+": "+marks[i]+"<br>";

}


document.getElementById("output").innerHTML=`

<h2>Result</h2>

<b>Name:</b> ${name}<br><br>

${subjectList}

<b>Total:</b> ${total}<br>

<b>Average:</b> ${average.toFixed(2)}<br>

<b>Percentage:</b> ${percentage.toFixed(2)}%<br>

<b>Grade:</b> ${grade}<br>

<b>Highest Marks:</b> ${highest}<br>

<b>Lowest Marks:</b> ${lowest}<br>

<b>Message:</b> ${message}

`;

}