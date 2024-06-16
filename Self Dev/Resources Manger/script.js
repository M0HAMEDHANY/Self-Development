const form = document.getElementById("resource-form");
const tableBody = document
  .getElementById("resource-table")
  .getElementsByTagName("tbody")[0];

// Function to load table data from local storage on page load
function loadTableData() {
  const storedData = JSON.parse(localStorage.getItem("resources")) || [];

  // Populate table with stored data
  storedData.forEach((resource, index) => {
    const newRow = createTableRow(resource, index);
    tableBody.appendChild(newRow);
  });
}

// Function to create a table row based on resource data
function createTableRow(resource) {
  const newRow = document.createElement("tr");

  // Create table cells for each data point
  const { name, launcher, link, tags, notes, status } = resource;

  const nameCell = createTableCell(name);
  const launcherCell = createTableCell(launcher);
  const linkCell = createTableCellWithLink(link);
  const tagsCell = createTableCell(tags);
  const notesCell = createTableCell(notes);
  const statusCell = createTableCell(status);

  // Create Delete button
  const deleteCell = document.createElement("td");
  const deleteButton = document.createElement("button");
  
  deleteButton.textContent = "❌";
  deleteButton.addEventListener("click", () => {
    // Remove the row from the table
    newRow.remove();

    // Remove the corresponding resource from local storage
    const storedData = JSON.parse(localStorage.getItem("resources")) || [];
    const updatedData = storedData.filter((item) => item.name !== name); // Remove the resource with matching name
    localStorage.setItem("resources", JSON.stringify(updatedData));
  });
  deleteCell.appendChild(deleteButton);

  // Append cells to the new row
  newRow.appendChild(nameCell);
  newRow.appendChild(launcherCell);
  newRow.appendChild(linkCell);
  newRow.appendChild(tagsCell);
  newRow.appendChild(notesCell);
  newRow.appendChild(statusCell);
  newRow.appendChild(deleteCell); 

  return newRow;
}

// Helper function to create a table cell with text content
function createTableCell(text) {
  const cell = document.createElement("td");
  cell.textContent = text;
  return cell;
}

// Helper function to create a table cell with a link
function createTableCellWithLink(link) {
  const cell = document.createElement("td");
  const linkAnchor = document.createElement("a");
  linkAnchor.href = link;
  linkAnchor.textContent = link;
  cell.appendChild(linkAnchor);
  return cell;
}

// Load existing data from local storage on page load
loadTableData();

// Event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById("name").value;
  const launcher = document.getElementById("launcher").value;
  const link = document.getElementById("link").value;
  const tags = document.getElementById("tags").value;
  const notes = document.getElementById("notes").value;
  const status = document.getElementById("status").value;

  // Create resource object
  const newResource = { name, launcher, link, tags, notes, status };

  // Create new table row
  const newRow = createTableRow(newResource);

  // Append the new row to the table body
  tableBody.appendChild(newRow);

  // Save updated data to local storage
  const storedData = JSON.parse(localStorage.getItem("resources")) || [];
  storedData.push(newResource);
  localStorage.setItem("resources", JSON.stringify(storedData));

  // Clear the form after successful submission
  form.reset();
});
