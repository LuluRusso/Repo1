let num = "";
let acum = "";
let operator = "";
let result = "";
let flag = false;
let sound = new Audio('assets/boton.mp3')

function clean() {
    sound.currentTime = 0; 
    sound.play();
    num = "";
    acum = "";
    acum = "";
    operator = "";
    print(num);
    console.log("Entra en clean")
}
function print(value) {
    document.getElementById("display").value = value;
}
function press(value) {
    sound.currentTime = 0; 
    sound.play();
    if(flag==true){
        clean()
        console.log("por aqui")}
    flag=false
    num += value;
    print(num);


}

function operation(value) {
    sound.currentTime = 0; 
    sound.play();
    if (acum !== "" && flag == false) {
        calculate()
        flag=false
        console.log("if acum no esta vacio")
    }
    else if (flag == false) {
        acum = num;
        console.log("else if flag no pasó por calculate")
    }
    else {
        flag = false;
        console.log("else paso por calculate")
    }
    operator = value;
    num = "";
    print(operator);
    console.log(flag)
    console.log("op")
    console.log("acum", acum)
    console.log("num limpio num", num)
}

function calculate() {
    sound.currentTime = 0; 
    sound.play();
    console.log("=")
    console.log("acum", acum)
    console.log("num", num)
    if (acum!=="" && num!==""){
        switch (operator) {
            case "+":
                acum = String(Number(acum) + Number(num));
                break;
            case "-":
                acum = String(Number(acum) - Number(num));
                break;
            case "*":
                acum = String(Number(acum) * Number(num));
                break;
            case "/":
                acum = String(Number(acum) / Number(num));
                break;
        }
        flag = true;
        print(acum);}
    else{
        clean()
        console.log("Borra")}
    
}