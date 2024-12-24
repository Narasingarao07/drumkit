
var drumset=document.querySelectorAll(".drum1").length;

// For mouse event
for(var i=0;i<drumset;i++){
// console.log(i);
document.querySelectorAll(".drum1")[i].addEventListener("click",  function (){
    console.log(this.getAttribute("id"));
   let temp=this.getAttribute("id");
    if (temp=="d1"){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if(temp=="d2"){
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(temp=="d3"){
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if(temp=="d4"){
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
    else if(temp=="d5"){
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if(temp=="d6"){
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    else{
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    // console.log(i);


    
});

// function greet()
// {
//     alert("hello");
// }

}

// For keyboard Event
document.addEventListener("keypress",function(event){
    let keyname=event.key;
    // this.alert(keyname+" keypressed");aw

    if(keyname=="w"){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if(keyname=="a"){
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(keyname=="s"){
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if(keyname=="d"){
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
    else if(keyname=="j"){
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if(keyname=="k"){
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    else if(keyname=="l"){
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    

});