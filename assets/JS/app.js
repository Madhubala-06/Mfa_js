
/*get the number of characters*/
function charLength() {

    let charLength = document.getElementById('length').value;
    document.getElementById('result').innerHTML = charLength;
    return charLength;

}

// let charLength = document.getElementById('length').value;

document.getElementById('length').addEventListener('change', charLength)

function uppercase(charLgth){
    let uppercase=document.getElementById("uppercase")
    let charLength = document.getElementById('length').value;

 for(i=0;i<=charLength.length;i++){
    return uppercase.charLength(i).toUpperCase();

 }
}

function disabled(){
    
    if(uppercase()){
    document.getElementById("btn").removeAttribute("disabled","")}
}

let result_pass=document.getElementById("password_result")
function generate(){
    
    
    if(uppercase.checked){
        return uppercase=true;
     }
     
     for(var i=0; i < charLength.length; i++ ){
        text += char_list.charAt(Math.floor(Math.random() * char_length.length));
    }
    return text;
 
    }
result_pass.innerHTML=text

  




    
    