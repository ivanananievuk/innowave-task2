
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let c = document.getElementById("the-slider");
c.style.backgroundImage = "url('./slider/img1.png')"

let mode = 1;
let x = 0;

function Picture(){

    if(mode == 1){
     c.style.backgroundImage = "url('./slider/img1.png')"
   

    }
    if(mode ==2){
        c.style.backgroundImage = "url('./slider/img2.jpg')"
    }
    if(mode ==3){
        c.style.backgroundImage = "url('./slider/img3.jpg')"
    }

}

function make_number(){
    if(mode == 0){
        mode = 3;
    }

    if(mode == 4){
        mode = 1;
    }

    Picture();

    console.log(mode);

}


function Down(){
    mode -= 1;
    make_number();

}

function Up(){
    mode += 1;
    make_number();

}


btn1.addEventListener("click", ()=>{
    console.log("hey");
    Down();
    

});

btn2.addEventListener("click", ()=>{
    console.log("hey");
    Up();

    
});

function TikTok(){
    if(x == 35){
        console.log("its 10");
        x = 0;
        Up();

    }

}


setInterval(()=>{
    x += 1;
    console.log(x);
    TikTok();

}, 1000);










let elm = document.getElementById("elm");
let shift = 1;


function decider(){
    if(shift == 1){
        elm.style.backgroundImage = "url('./logo/melon.png')"
    }
    if(shift ==2){
        elm.style.backgroundImage = "url('./logo/man.png')"

    }
    if(shift ==3){
        elm.style.backgroundImage = "url('./logo/bird.png')"

    }
}


function calculator(){

    if(shift == 4){
        shift = 1;
    }

    decider();
    

}








elm.addEventListener("click", ()=>{
    shift ++;
    calculator()
    
    
})

elm.style.backgroundImage = "url('./logo/melon.png')"

