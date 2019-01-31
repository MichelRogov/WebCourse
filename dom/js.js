"use strict";

let obj = {
    innerHeight: 847,
    printThis: function () {
        console.log(this.innerHeight);
    }
};

console.log(obj.printThis);

let objToBind = {
    innerHeight: 400
};

let unBoundFn = obj.printThis;

let boundedFn = unBoundFn.bind(objToBind);

boundedFn();

unBoundFn.call(objToBind);

let arr = [1,2];

function notAnon(item, index, arr) {
    console.log(item, index);
}

arr.forEach(notAnon);

arr.forEach(function (item) {
    console.log(item);
});

funk();

function funk () {
    console.log('funk');
}

var wrong = function () {
    var j = 3;
    for (var i = 0; i<5; i++) {
        var j = 3 + i;
    }

    console.log(j);
}

wrong();

var correct = function () {
    const j = {name: 'Alex'};
    for (let i = 0; i<5; i++) {
        let j = 3 + i;
    }

    j.name = 'Vadim';

    function innerFn() {
        const b = {age: 44};
        function f() {
            console.log(j, b);
        }

        f();
    }

    innerFn();
}

correct();

function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}

let person = new Person('Alex', 'Davidof');

let shortPerson = {
    firstName: 'Peter'
}

console.log(person);
console.log(shortPerson);
console.log(person.fullName());
