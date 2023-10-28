// Функція для додавання нового рядка в таблицю
function addRow() {
    var table = document.getElementById("data-table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = "<input type='text'>";
    cell2.innerHTML = "<input type='text'>";
    cell3.innerHTML = "<input type='text'>";
    cell4.innerHTML = "<button class='edit-button'>Редагувати</button>";
    cell5.innerHTML = "<button class='delete-button'>Видалити</button>";
}

// Додати обробник для кнопки "Додати"
document.getElementById("add-button").addEventListener("click", addRow);

// Додати обробники для кнопок "Редагувати" і "Видалити"
var editButtons = document.getElementsByClassName("edit-button");
var deleteButtons = document.getElementsByClassName("delete-button");

for (var i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", function() {
        // Реалізація функціоналу для редагування
        alert("Редагувати");
    });
}

for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function() {
        // Реалізація функціоналу для видалення
        var row = this.parentNode.parentNode;
        row.parentNode.removeChild(row);
    });
}