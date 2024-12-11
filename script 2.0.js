console.log("---CONSOLE---")

function changeTitle() {
    const heading = document.getElementById('heading')
    const selection = document.getElementById('select')
    if (selection.value === '--Select New Title idk--'){
        heading.textContent = "Abheer 2.0";
        console.error("ERROR: No Item Selected::REVERTED_TO_DEAFULT")
    } else {
        heading.textContent = selection.value;
        console.log("Title Changed to '"+selection.value+"' lol")
    }

}

function createText() {

    const result = document.createElement("p")
    result.textContent = "LOL"
    document.body.appendChild(result)
    console.log("Inserted Paragraph: '"+result.textContent+"'")


}

function calculate() {
    const firstNo = parseFloat(document.getElementById("firstNo").value)
    const secondNo = parseFloat(document.getElementById("secondNo").value)
    const operation = document.getElementById("Operation").value
    const anstext = document.getElementById('ans')

    if (operation === "+") {
        let ans = firstNo + secondNo;
        anstext.textContent = "Result is " + ans
        console.log("Calculation Complete")
    } else if (operation === "-") {
        let ans = firstNo - secondNo;
        anstext.textContent = "Result is " + ans
        console.log("Calculation Complete")
    } else if (operation === "*") {
        let ans = firstNo * secondNo;
        anstext.textContent = "Result is " + ans
        console.log("Calculation Complete")
    } else if (operation === "/") {
        let ans = firstNo/secondNo;
        anstext.textContent = "Result is " + ans
        console.log("Calculation Complete")
    } else {
        console.error("No Operation Provided")
        anstext.textContent = ""
    }
}

let count = 0;
function clicker() {
    count += 1;
    countTotal = document.getElementById('count')
    countTotal.textContent = "Total: " + count
    console.log("Clicker Clicked")
    if (count === 10) {
        document.getElementById('clickers').style.backgroundColor = "red"
    } else if (count === 20) {
        document.getElementById('clickers').style.backgroundColor = "orange"
    } else if (count === 30) {
        document.getElementById('clickers').style.backgroundColor = "blue"
    } else if (count === 40) {
        document.getElementById('clickers').style.backgroundColor = "green"
    } else if (count === 50) {
        document.getElementById('clickers').style.background = "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, purple, red)";
    } else if (count === 100) {
        document.getElementById('clickers').style.background = "linear-gradient(135deg, red, orange, yellow, green, blue, pink, purple, maroon, red)";
    }
    
}