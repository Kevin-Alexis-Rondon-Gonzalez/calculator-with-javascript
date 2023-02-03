const display = document.getElementById("display")
const buttons = document.querySelectorAll("button")
//Optimize the use of operator 
buttons.forEach((item)=>{
    item.onclick=()=>{
        if (item.id =="clear") {
            display.innerText = ""
        }else if (item.id == "backspace") {
            let string = display.innerText.toString()
            display.innerText = string.substring(0,string.length - 1)
        }else if (display.innerText != "" && item.id == "aqual"){
            //Optimize the use of eval by wrapping it inside a function to avoid security holes
            display.innerText = eval(display.innerText)
        }else if (display.innerText == "" && item.id == "equal"){
            display.innerText("Null")
            setTimeout(()=>(display.innerText = ""),2000)
        }else{
            display.innerText += item.id
            //2+/2
        }
    } 
})

