const operator = prompt(("Choose an operation number, either 1, 2,3 or 4:\n 1. For addition\n 2. For Subtraction \n3. For multiplication\n 4. For division."));


if(operator==1){
    const a = parseFloat (prompt("Enter a number you want to add"));
    const b = parseFloat (prompt("Enter another number you want to add"));
    const answer= a+b;
    console.log(answer);
    document.write('<br>The result for the addition is:'+ answer);
}

else if(operator==2){
    
        const a = parseFloat (prompt("Enter a number you want to subtract"));
        const b = parseFloat (prompt("Enter another number you want to subtract"));
        const answer= a-b;
        console.log(answer);
        document.write('<br>The result for the subtraction is:'+ answer);
    }
   
    else if(operator==3){
    
        const a = parseFloat (prompt("Enter a number you want to multiply"));
        const b = parseFloat (prompt("Enter another number you want to multiply"));
        const answer= a*b;
        console.log(answer);
        document.write('<br>The result for the multiplication is:'+ answer);
    }
   
    else if(operator==4){
    
        const a = parseFloat (prompt("Enter a number you want to divide"));
        const b = parseFloat (prompt("Enter another number you want to divide"));
        const answer= a/b;
        console.log(answer);
        document.write('The result for the division is:'+ answer);
    }
   else{
    alert("Please choose an operation");

   }





