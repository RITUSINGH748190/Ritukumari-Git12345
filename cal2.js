const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialchars = ["%", "*", "/", "-", "+", "="];
let output = " ";

//define function to calculate based on button clicked.
const calculate =(btnValue) =>{
    if(btnValue === "="&& output!== ""){
        //if output has '%', replace with "/100" before evaluating.
        output = eval(output.replace("%","/100"));
    }else if (btnValue === "AC"){
        output = "";
    }else if (btnValue === "DEL"){
        // if del button is clicked, remove the last character from the output.
        output = output.toString().slice(0,-1);
    }else{
        //if output is empty and button is specialchars then return
        if(output === " " && specialchars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

// add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
    //button click listener calls calculate() with dataset Value as argument.
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));
}
);