"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee card col-4 bg-dark text-light" >';
    // html += '<td>' + coffee.id + '</td>';
    html += '<div>' + '<h3>' + coffee.name + '</h3>' + '<p>' + coffee.roast + '</p>' + coffee.price + '</div>';
    // html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

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
    if(roastSelection.value === "all") {
        filteredCoffees = coffees;
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
    }
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function updateCoffeesUserInput(e) {
    e.preventDefault();
    var userInput = coffeeInput1.value.toLowerCase()
    var userCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toLowerCase().includes(userInput)){
            userCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(userCoffees);
}

var coffeeInput1 = document.querySelector('#firstCoffeeInput');
coffeeInput1.addEventListener('input', updateCoffeesUserInput)

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

function addNewCoffee () {
    var newUserInput = coffeeInput2.value;
    var customRoastInput = newRoastInput.value;
    var customCoffeeObject = {name: newUserInput, roast: customRoastInput};
    coffees.push(customCoffeeObject);
    tbody.innerHTML = renderCoffees(coffees);
}

var coffeeInput2 = document.querySelector('#secondCoffeeInput');
var newRoastInput = document.querySelector('#roastselection2');

/*var number = [];

function myFunction()
{
    var x = document.getElementById("box");
    number.push(document.getElementById("input").value);
    x.innerHTML = number.join('<br/>');
}*/

var coffees = [
    {id: 1, name: 'Light City', roast: 'light', price:'$3.00/lbs.'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var submitButton2 = document.querySelector('#submit2');


tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
submitButton2.addEventListener('click', addNewCoffee);
