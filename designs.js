function makeGrid() {
  // assign the users choice to variables. height, width and color
  let height = document.getElementById("inputHeight").value;
  let width = document.querySelector("#inputWidth").value;
  let colorPicker = document.querySelector("#colorPicker");

  let gridcolor = colorPicker.value;
  // set the color  to the color a user choose
  colorPicker.addEventListener("input", function () {
    gridcolor = colorPicker.value;
  });
  //  Select the html table element
  let table = document.querySelector("#pixelCanvas");
  // creating a table row
  for (let i = 0; i <= height; i++) {
    let tableRow = table.insertRow(i);

    // putting a table cells to each table row
    for (let i = 0; i < width; i++) {
      let tableCol = document.createElement("td");
      tableCol.className = "columns";
      tableRow.appendChild(tableCol);
    }
  }

  const rows = document.querySelectorAll(".columns");
  // insert color to the grid columns.
  for (let i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", function () {
      rows[i].style.backgroundColor = gridcolor;
    });
  }
}
// added event listener to the form.
const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  // preventing the form default behavour
  e.preventDefault();
  //create a table
  makeGrid();
});
