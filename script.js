

function calculateTip5(){
    let amount = document.querySelector("#amount").value;
    let people = document.querySelector("#people").value

    if (amount === '' || people === ''){
        alert("Please enter values");
    }
    
    if(people < 1){
        people = 1;
    }
    let total = (amount * 0.05) ;
    total = total.toFixed(2);

    let totalPerPerson = total / people;
    totalPerPerson = total.toFixed(2);

    console.log(total)
}


