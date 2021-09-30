function compute()
{
    validateForm();
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var resultAmount = parseInt(principal) + parseInt(interest);
    var result = "If you deposit " + principal + ", \<br\>at an interest rate of " + rate + "%. You will receive an amount of " + 
                resultAmount + ", in the year " + year + "\<br\>";
    document.getElementById("result").innerText = result;
}

function validateForm()
{
    var principal = document.getElementById("principal").value;
    if(parseInt(principal) <= 0){
        alert("Enter a positive number");
        return false;
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}