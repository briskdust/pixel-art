let button = document.querySelector('input[type="submit"]');
let table = document.getElementById("pixelCanvas");
let color = document.getElementById("colorPicker").value;
let height;
let width;

let getNum = () => {
    height = parseInt(document.getElementById("inputHeight").value);
    width = parseInt(document.getElementById("inputWidth").value);
};

let getColor = () => {
    color = document.getElementById("colorPicker").value;
};

button.addEventListener("click", event => {
    event.preventDefault(); // To prevent automatical reload of the web page
    makeGrid();
});

function makeGrid() {
    for (let i = 0; i < height; i++) {
        let temp = document.createElement("tr");
        for (let j = 0; j < width; j++) {
            let cell = document.createElement("td");
            cell.addEventListener("click", event => {
                cell.style.backgroundColor = color;
            });
            temp.appendChild(cell);
        }
        table.appendChild(temp);
    }
}
