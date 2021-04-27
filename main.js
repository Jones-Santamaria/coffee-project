"use strict"
//Changed from table to <div>. Added styling and made <div> into cards//
function renderCoffee(coffee) {
    var html = '<div class="coffee card col-4 m-2 d-flex bg-dark text-light" >';
    // html += '<td>' + coffee.id + '</td>';
    html += '<div>' + '<h3>' + coffee.name + '<i class="fas fa-coffee"></i>' + '</h3>' + '<p>' + coffee.roast + '</p>' + '<div class="d-flex justify-content-end">' + coffee.price + '</div>' + '</div>';
    // html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}
//This function runs throughout the page. It displays what coffees are available based on user input.
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    if(roastSelection.value === "All") { //This if statement is the select all coffee roast.
        filteredCoffees = coffees;
    } else {
        coffees.forEach(function (coffee) { //This function displays coffee based on roast chosen by user.
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
var submitButton = document.querySelector('#submit');
submitButton.addEventListener('click', updateCoffees); //Runs updates coffee when clicked.

function updateCoffeesUserInput(e) {
    e.preventDefault();
    var userInput = coffeeInput1.value.toLowerCase() // Takes user input from #firstCoffeeInput and puts into lower case. query selector for this is online 50.
    var userCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(userInput)){ //code for searching through coffee object. Event listener is on line 50.
            userCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(userCoffees);
}
var coffeeInput1 = document.querySelector('#firstCoffeeInput');
coffeeInput1.addEventListener('input', updateCoffeesUserInput)

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

function addNewCoffee () { //function runs when second submit button is clicked. Selector/listener on lines 65 & 66.
    var newUserInput = coffeeInput2.value;//query selector on line 63.
    var customRoastInput = newRoastInput.value;//query selector on line 64.
    var customCoffeeObject = {name: newUserInput, roast: customRoastInput, price: '$5.00/lbs.'};
    coffees.push(customCoffeeObject); //pushes into from like 57 into coffee object.
    tbody.innerHTML = renderCoffees(coffees);
}

var coffeeInput2 = document.querySelector('#secondCoffeeInput');
var newRoastInput = document.querySelector('#roastselection2');
var submitButton2 = document.querySelector('#submit2');
submitButton2.addEventListener('click', addNewCoffee);

var coffees = [
    {id: 1, name: 'Light City', roast: 'Light', price:'$2.00/lbs.'},
    {id: 2, name: 'Half City', roast: 'Light', price:'$2.00/lbs.'},
    {id: 3, name: 'Cinnamon', roast: 'Light', price:'$2.00/lbs.'},
    {id: 4, name: 'City', roast: 'Medium', price:'$3.00/lbs.'},
    {id: 5, name: 'American', roast: 'Medium', price:'$3.00/lbs.'},
    {id: 6, name: 'Breakfast', roast: 'Medium', price:'$3.00/lbs.'},
    {id: 7, name: 'High', roast: 'Dark', price:'$4.00/lbs.'},
    {id: 8, name: 'Continental', roast: 'Dark', price:'$4.00/lbs.'},
    {id: 9, name: 'New Orleans', roast: 'Dark', price:'$4.00/lbs.'},
    {id: 10, name: 'European', roast: 'Dark', price:'$4.00/lbs.'},
    {id: 11, name: 'Espresso', roast: 'Dark', price:'$4.00/lbs.'},
    {id: 12, name: 'Viennese', roast: 'Dark', price:'$4.00/lbs.'},
    {id: 13, name: 'Italian', roast: 'Dark', price:'$4.00/lbs.'},
    {id: 14, name: 'French', roast: 'Dark', price:'$4.00/lbs.'},
];

var tbody = document.querySelector('#coffees');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);



