//created array variables to detect for keys not need and for the alphabets to play the sound for each letter
var notWanted = ['Backspace', 'Enter', 'Shift', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'PageDown', 'PageUp', 'Alt', 'Control', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-'];

var alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// alert("Kindly reduce your volume 😬")


//event listener looking out for a keypress in the textarea
$("textarea").keyup(function(event){
    var value = this.value;

    //for loop to look through the notWanted array
    for(var i = 0; i < notWanted.length; i++){
        if(event.key === notWanted[i]){
        event.key = "";
    }else{
        var end = 200 - value.length; //ending counter to let users know they're at their limit
        var caps = event.key.toUpperCase();//to convert the keys to capital letters to match the strings in the variables

        $("#text").text(value);//manipulating the text of the H1
        $("#counterUp").text(counter(value.length));//Letting the user know how many letters have been inputed
        $("#counterDown").text(end);//Letting the user know how many letters they have left to input
        playSound(caps);//plays the audio for each letter

        //conditional statement to give effects when a user has reached a particular input number
        if(value.length >= 100){
            $("#text").css("font-size", "2rem")

            if(value.length >= 200){
                $("textarea").prop("readonly", "true");
                $("#counterUp").css("color", "rgb(16, 230, 16)");
                $("#counterDown").css("color", "red");
            }
        }
        
    }
    }
    
})

function counter(name){
    return name++;
}

function playSound(name){
    //for loop to loop through the alphabet array so it can play audios for the user
    for(var i = 0; i < alphabets.length; i++){
        if(name == alphabets[i]){
           var audio = new Audio("sounds/"+alphabets[i]+".wav");
        audio.play(); 
        }
        
    }
}