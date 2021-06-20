function calculate() {
    let field1=document.getElementById('num1').value ;
    let field2=document.getElementById('num2').value ;
    let total=parseFloat(field1) + parseFloat(field2) ;
    if(!isNaN(total)){document.getElementById("answer").innerHTML="The answer is "+total;}
}