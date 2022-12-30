// // This function clear all the values
clearScreen= () =>{
    document.getElementById('result').value=' ';
}

// // This function display values
display = (value) => {
    document.getElementById('result').value += value;
}

// // This function evaluates the expression and returns result
calculate = () =>{
    const p = document.getElementById('result').value;
    const q = eval(p);
    document.getElementById('result').value=q;
}

// This function clear all the values
// function clearScrean() {
//     document.getElementById("result").value = " ";
// }


// This function display values
// function display(value) {
//         document.getElementById("result").value += value;
// }
//      
    // This function evaluates the expression and returns result
// function calculate() {
//         var p = document.getElementById("result").value;
//         var q = eval(p);
//         document.getElementById("result").value = q;
//     }