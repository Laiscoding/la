let getcon = document.querySelector(".container");
let getbtn = document.querySelector(".container-btn");

// console.log(getcon, getbtn);

getbtn.addEventListener("click", () => {

    getcon.classList.toggle("active");
})

console.log(getcon, getbtn);