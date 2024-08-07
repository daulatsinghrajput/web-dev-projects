let btn1  = document.getElementById("mybutton1");
let btn2  = document.getElementById("mybutton2");
let copyCode = document.getElementById("copyCode")

let colorValue1 = "#ffa500";
let colorValue2 = "#87ceeb";




function hexValue(){
    let value = "0123456789abcdef";
    let hex = "#";
    for(let i=0; i<6; i++){
        hex = hex + value[Math.floor(Math.random()*16)];
    }
    return hex;
};

const clickButton1 = () => {
    colorValue1 = hexValue();
    console.log(colorValue1);
    document.body.style.background= `linear-gradient(to right,${colorValue1}, ${colorValue2})`;
    btn1.textContent = colorValue1;
    btn1.style.backgroundColor = colorValue1;
    copyCode.textContent =  `background: linear-gradient(${colorValue1},${colorValue2});`;
}

const clickButton2 = () => {
    colorValue2 = hexValue();
    console.log(colorValue2);
    document.body.style.background= `linear-gradient(to right,${colorValue1}, ${colorValue2})`;
    btn2.textContent = colorValue2;
    btn2.style.backgroundColor = colorValue2;
    copyCode.textContent =  `background: linear-gradient( ${colorValue1},${colorValue2});`;
    
}

copyCode.addEventListener('click', () =>{
    navigator.clipboard.writeText(copyCode.innerText);
    alert("copied");
})




btn1.addEventListener('click', clickButton1);
btn2.addEventListener('click', clickButton2);


