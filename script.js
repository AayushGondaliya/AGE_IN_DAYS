console.log("Hello World")
function days_calculator(){
    let year = prompt("WHAT YEAR YOU WERE BORN IN: ")
    let age = 2020 - year;
    let days = age*365
    document.getElementById('output').innerHTML = "YOUR AGE IN DAYS IS: " + days
}