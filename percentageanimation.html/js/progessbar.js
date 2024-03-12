let btn = document.querySelector(".btn");
let input = document.querySelector("input");
let progressbar = document.querySelector(".group");
let spanvalue = document.querySelector(".group-control");

// console.log(btn, input, progressbar, spanvalue); 

let value = 0;

btn.addEventListener("click", blah);


function blah (){
    if(input.valur != "" && parseInt(input.value) <= input.max){   
        let progress = setInterval(() => {
        if(value < input.value){
            value++;
        }else{
            value--;
        }
        // console.log(value);

        spanvalue.textContent = `${value}%`
        progressbar.style.background = `conic-gradient(#C19976 ${value *3.6}deg, #ededed 0%)`;

        if (value == input.value){
            clearInterval(progress);
            input.value = "";
            input.focus();

        }

       
    });}
    
};