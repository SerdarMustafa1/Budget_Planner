var whatDoYouDo = function(job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'john'));
console.log(whatDoYouDo('designer', 'jane'));
console.log(whatDoYouDo('retired', 'mark'));


//initialise new arrray
var names = ['john', 'mark', 'jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

//mutate array data
names[1] = 'ben';
names[5] = 'mary';
console.log(names);


//different data types

var john = ['john', 'smith', 1990, 'teacher', false];
// add to end
john.push('blue');
//add to beginning
john.unshift('mr');
console.log(john);

//remove from end 
john.pop();
// remove from beginning
john.shift();
console.log(john);

// returns position of element
john.indexOf();
//remove index of element
john.pop();



function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
    	percentage = .1;
    }
    return percentage * bill;
}

console.log(tipCalculator(100));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
    tipCalculator(bills[1]),
    tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]];

console.log(tips, finalValues);


var john = {
	firstName: 'john',
	lastName: 'smith',
	birthYear: 1990,
	family: ['jane', 'mark', 'bob', 'emily'],
	job: 'teacher',
	isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'mutate';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.name = 'jane';
jane.birthYear = 1969;
jane['lastName'] = 'smith';
console.log(jane);






//For loop
for (var i = 0; i < 10; i++) {
	console.log(i)
}


var john = ['john', 'smith', 1990, 'teacher', false];


for (var i = 0; i < john.length; i++) {
console.log(john[i]);
}





















