if (yearsText === "xyz") {
    let xyzIncome = 0;
    xyzIncome += incomeStoreInput;
    let xyzParent = document.getElementById("xyz-parent")
    let xyz = document.getElementById("xyz");
    if(xyzIncome > 0){
        xyz.classList.add("h-25");
        console.log(xyzIncome)
    }if(xyzIncome > 100){
        xyz.classList.add("h-50");
        console.log(xyzIncome)
    }if(xyzIncome > 200){
        xyz.classList.add("h-75");
        console.log(xyzIncome)
    }if(xyzIncome > 300){
        xyzParent.classList.add("selected");
        xyz.classList.add("h-100");
        console.log(xyzIncome)
    }
}