const calculate = document.getElementById("calculate");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const years = document.getElementById("years");

const incomeStore = document.getElementById("income-store");
const expenseStore = document.getElementById("expense-store");

const barGet = document.getElementsByClassName("bar");

function inputValue(input){
    const inputVal = input.value;
    return inputVal;
}

function innerText(element){
    const textVal = element.innerText;
    const textInt = parseInt(textVal);
    return textInt;
}

calculate.addEventListener('click',function(){
    const incomeInput = inputValue(income);
    const expenseInput = inputValue(expense);
    const yearsText = inputValue(years);
    if(incomeInput === ""){
        alert("Income input can't be empty");
    } else if(expenseInput === ""){
        alert("Expense input can't be empty");
    } else if(yearsText === ""){
        alert("Year input can't be empty");
    } else {
        let incomeStoreInput = innerText(incomeStore);
        let expenseStoreInput = innerText(expenseStore);
        incomeStoreInput += parseInt(incomeInput);
        expenseStoreInput += parseInt(expenseInput);
        incomeStore.innerText = incomeStoreInput.toString();
        expenseStore.innerText = expenseStoreInput.toString();
        income.value = "";
        expense.value = "";
        years.value = "";
        if (yearsText === "January") {
            let januaryIncome = 0;
            let geInt = parseInt(incomeInput)
            januaryIncome += geInt;
            let januaryParent = document.getElementById("january-parent")
            let january = document.getElementById("january");
            if(januaryIncome > 0){
                january.classList.add("h-25");
                console.log(januaryIncome)
            }
            if(januaryIncome > 100){
                january.classList.add("h-50");
                console.log(januaryIncome)
            }
            if(januaryIncome > 200){
                january.classList.add("h-75");
                console.log(januaryIncome)
            }
            if(januaryIncome > 300){
                januaryParent.classList.add("selected");
                january.classList.add("h-100");
                console.log(januaryIncome)
            }
        }
        if (yearsText === "February") {
            let februaryIncome = 0;
            let geInt = parseInt(incomeInput)
            februaryIncome += geInt;
            let februaryParent = document.getElementById("february-parent")
            let february = document.getElementById("february");
            if(februaryIncome > 0){
                february.classList.add("h-25");
                console.log(februaryIncome)
            }
            if(februaryIncome > 100){
                february.classList.add("h-50");
                console.log(februaryIncome)
            }
            if(februaryIncome > 200){
                february.classList.add("h-75");
                console.log(februaryIncome)
            }
            if(februaryIncome > 300){
                februaryParent.classList.add("selected");
                february.classList.add("h-100");
                console.log(februaryIncome)
            }
        }
        if (yearsText === "March") {
            let marchIncome = 0;
            let geInt = parseInt(incomeInput)
            marchIncome += geInt;
            let marchParent = document.getElementById("march-parent")
            let march = document.getElementById("march");
            if(marchIncome > 0){
                march.classList.add("h-25");
                console.log(marchIncome)
            }
            if(marchIncome > 100){
                march.classList.add("h-50");
                console.log(marchIncome)
            }
            if(marchIncome > 200){
                march.classList.add("h-75");
                console.log(marchIncome)
            }
            if(marchIncome > 300){
                marchParent.classList.add("selected");
                march.classList.add("h-100");
                console.log(marchIncome)
            }
        }
        if (yearsText === "April") {
            let aprilIncome = 0;
            let geInt = parseInt(incomeInput)
            aprilIncome += geInt;
            let aprilParent = document.getElementById("april-parent")
            let april = document.getElementById("april");
            if(aprilIncome > 0){
                april.classList.add("h-25");
                console.log(aprilIncome)
            }if(aprilIncome > 100){
                april.classList.add("h-50");
                console.log(aprilIncome)
            }if(aprilIncome > 200){
                april.classList.add("h-75");
                console.log(aprilIncome)
            }if(aprilIncome > 300){
                aprilParent.classList.add("selected");
                april.classList.add("h-100");
                console.log(aprilIncome)
            }
        }
        if (yearsText === "May") {
            let mayIncome = 0;
            let geInt = parseInt(incomeInput)
            mayIncome += geInt;
            let mayParent = document.getElementById("may-parent")
            let may = document.getElementById("may");
            if(mayIncome > 0){
                may.classList.add("h-25");
                console.log(mayIncome)
            }if(mayIncome > 100){
                may.classList.add("h-50");
                console.log(mayIncome)
            }if(mayIncome > 200){
                may.classList.add("h-75");
                console.log(mayIncome)
            }if(mayIncome > 300){
                mayParent.classList.add("selected");
                may.classList.add("h-100");
                console.log(mayIncome)
            }
        }
        if (yearsText === "June") {
            let juneIncome = 0;
            let geInt = parseInt(incomeInput)
            juneIncome += geInt;
            let juneParent = document.getElementById("june-parent")
            let june = document.getElementById("june");
            if(juneIncome > 0){
                june.classList.add("h-25");
                console.log(juneIncome)
            }if(juneIncome > 100){
                june.classList.add("h-50");
                console.log(juneIncome)
            }if(juneIncome > 200){
                june.classList.add("h-75");
                console.log(juneIncome)
            }if(juneIncome > 300){
                juneParent.classList.add("selected");
                june.classList.add("h-100");
                console.log(juneIncome)
            }
        }
        if (yearsText === "July") {
            let julyIncome = 0;
            let geInt = parseInt(incomeInput)
            julyIncome += geInt;
            let julyParent = document.getElementById("july-parent")
            let july = document.getElementById("july");
            if(julyIncome > 0){
                july.classList.add("h-25");
                console.log(julyIncome)
            }if(julyIncome > 100){
                july.classList.add("h-50");
                console.log(julyIncome)
            }if(julyIncome > 200){
                july.classList.add("h-75");
                console.log(julyIncome)
            }if(julyIncome > 300){
                julyParent.classList.add("selected");
                july.classList.add("h-100");
                console.log(julyIncome)
            }
        }
        if (yearsText === "August") {
            let augustIncome = 0;
            let geInt = parseInt(incomeInput)
            augustIncome += geInt;
            let augustParent = document.getElementById("august-parent")
            let august = document.getElementById("august");
            if(augustIncome > 0){
                august.classList.add("h-25");
                console.log(augustIncome)
            }if(augustIncome > 100){
                august.classList.add("h-50");
                console.log(augustIncome)
            }if(augustIncome > 200){
                august.classList.add("h-75");
                console.log(augustIncome)
            }if(augustIncome > 300){
                augustParent.classList.add("selected");
                august.classList.add("h-100");
                console.log(augustIncome)
            }
        }
        if (yearsText === "September") {
            let septemberIncome = 0;
            let geInt = parseInt(incomeInput)
            septemberIncome += geInt;
            let septemberParent = document.getElementById("september-parent")
            let september = document.getElementById("september");
            if(septemberIncome > 0){
                september.classList.add("h-25");
                console.log(septemberIncome)
            }if(septemberIncome > 100){
                september.classList.add("h-50");
                console.log(septemberIncome)
            }if(septemberIncome > 200){
                september.classList.add("h-75");
                console.log(septemberIncome)
            }if(septemberIncome > 300){
                septemberParent.classList.add("selected");
                september.classList.add("h-100");
                console.log(septemberIncome)
            }
        }
        if (yearsText === "October") {
            let octoberIncome = 0;
            let geInt = parseInt(incomeInput)
            octoberIncome += geInt;
            let octoberParent = document.getElementById("october-parent")
            let october = document.getElementById("october");
            if(octoberIncome > 0){
                october.classList.add("h-25");
                console.log(octoberIncome)
            }if(octoberIncome > 100){
                october.classList.add("h-50");
                console.log(octoberIncome)
            }if(octoberIncome > 200){
                october.classList.add("h-75");
                console.log(octoberIncome)
            }if(octoberIncome > 300){
                octoberParent.classList.add("selected");
                october.classList.add("h-100");
                console.log(octoberIncome)
            }
        }
        if (yearsText === "November") {
            let novemberIncome = 0;
            let geInt = parseInt(incomeInput)
            novemberIncome += geInt;
            let novemberParent = document.getElementById("november-parent")
            let november = document.getElementById("november");
            if(novemberIncome > 0){
                november.classList.add("h-25");
                console.log(novemberIncome)
            }if(novemberIncome > 100){
                november.classList.add("h-50");
                console.log(novemberIncome)
            }if(novemberIncome > 200){
                november.classList.add("h-75");
                console.log(novemberIncome)
            }if(novemberIncome > 300){
                novemberParent.classList.add("selected");
                november.classList.add("h-100");
                console.log(novemberIncome)
            }
        }
        if (yearsText === "December") {
            let decemberIncome = 0;
            let geInt = parseInt(incomeInput)
            decemberIncome += geInt;
            let decemberParent = document.getElementById("december-parent")
            let december = document.getElementById("december");
            if(decemberIncome > 0){
                december.classList.add("h-25");
                console.log(decemberIncome)
            }if(decemberIncome > 100){
                december.classList.add("h-50");
                console.log(decemberIncome)
            }if(decemberIncome > 200){
                december.classList.add("h-75");
                console.log(decemberIncome)
            }if(decemberIncome > 300){
                decemberParent.classList.add("selected");
                december.classList.add("h-100");
                console.log(decemberIncome)
            }
        }
    }
});