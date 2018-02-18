let tableSide = 64;
let brushColor = '#000000';
let mousePressed = false;

const makeTable = (table) => {
  const colorBox = document.querySelector('#colorBox');
  const clearButton = document.querySelector('#clearButton');

  table.onmousedown = () => mousePressed = true;
  table.onmouseup = () => mousePressed = false;

  for (y=0; y < tableSide; y++)
  {
    const row = document.createElement('tr');
    for (x=0; x < tableSide; x++)
    {
      const cell = document.createElement('td');
      cell.onmouseover = () => {
        if (mousePressed)
          cell.style.cssText = 'background: ' + colorBox.value;
      }
      clearButton.addEventListener("click", () => {
        cell.style.cssText = ''
      });
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}

const table = document.querySelector('#pixelTable');
makeTable(table);
