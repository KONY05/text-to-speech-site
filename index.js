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

// function playSound(name){
//     switch (name) {
//         case "a":
//         case "A":
//             var A = new Audio ("sounds/A.wav");
//             A.play();
//             break;
    
//         case "b":
//         case "B":
//             var B = new Audio ("sounds/B.wav");
//             B.play();
//             break;
    
//         case "c":
//         case "C":
//             var C = new Audio ("sounds/C.wav");
//             C.play();
//             break;
    
//         case "d":
//         case "D":
//             var D = new Audio ("sounds/D.wav");
//             D.play();
//             break;
    
//         case "e":
//         case "E":
//             var E = new Audio ("sounds/E.wav");
//             E.play();
//             break;
    
//         case "f":
//         case "F":
//             var F = new Audio ("sounds/F.wav");
//             F.play();
//             break;
    
//         case "g":
//         case "G":
//             var G = new Audio ("sounds/G.wav");
//             G.play();
//             break;
    
//         case "h":
//         case "H":
//             var H = new Audio ("sounds/H.wav");
//             H.play();
//             break;
    
//         case "i":
//         case "I":
//             var I = new Audio ("sounds/I.wav");
//             I.play();
//             break;
    
//         case "j":
//         case "J":
//             var J = new Audio ("sounds/J.wav");
//             J.play();
//             break;
    
//         case "k":
//         case "A":
//             var A = new Audio ("sounds/A.wav");
//             A.play();
//             break;
    
//         case "l":
//         case "L":
//             var L = new Audio ("sounds/L.wav");
//             L.play();
//             break;
    
//         case "m":
//         case "M":
//             var M = new Audio ("sounds/M.wav");
//             M.play();
//             break;
    
//         case "n":
//         case "N":
//             var N = new Audio ("sounds/N.wav");
//             N.play();
//             break;
    
//         case "o":
//         case "O":
//             var O = new Audio ("sounds/O.wav");
//             O.play();
//             break;
    
//         case "p":
//         case "P":
//             var P = new Audio ("sounds/P.wav");
//             P.play();
//             break;
    
//         case "q":
//         case "Q":
//             var Q = new Audio ("sounds/Q.wav");
//             Q.play();
//             break;
    
//         case "r":
//         case "R":
//             var R = new Audio ("sounds/R.wav");
//             R.play();
//             break;
    
//         case "s":
//         case "S":
//             var S = new Audio ("sounds/S.wav");
//             S.play();
//             break;
    
//         case "t":
//         case "T":
//             var T = new Audio ("sounds/T.wav");
//             T.play();
//             break;
    
//         case "u":
//         case "U":
//             var U = new Audio ("sounds/U.wav");
//             U.play();
//             break;
    
//         case "v":
//         case "V":
//             var V = new Audio ("sounds/V.wav");
//             V.play();
//             break;

//         case "w":
//         case "W":
//             var W = new Audio ("sounds/W.wav");
//             W.play();
//             break;
            
//         case "x":
//         case "A":
//             var X = new Audio ("sounds/X.wav");
//             X.play();
//             break;

//         case "y":
//         case "Y":
//             var Y = new Audio ("sounds/Y.wav");
//             Y.play();
//             break;

//         case "z":
//         case "Z":
//             var Z = new Audio ("sounds/Z.wav");
//             Z.play();
//             break;
    
//         default:
//             console.log(name)
//             break;
//     }
// }