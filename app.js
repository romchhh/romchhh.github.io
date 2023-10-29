// Функція для додавання нового рядка в таблицю
function addRow() {
    var table = document.getElementById("data-table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = "<input type='text'>";
    cell2.innerHTML = "<input type='text'>";
    cell3.innerHTML = "<input type='text'>";
    cell4.innerHTML = "<button class='save-button'>Зберегти</button> <button class='cancel-button'>Скасувати</button>";

    // Додати обробник для нових кнопок "Зберегти" і "Скасувати"
    var saveButton = cell4.querySelector(".save-button");
    saveButton.addEventListener("click", saveRow);
    var cancelButton = cell4.querySelector(".cancel-button");
    cancelButton.addEventListener("click", cancelRow);
}

// Функція для видалення рядка після підтвердження
function deleteRowConfirmed() {
    var row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Функція для видалення рядка з питанням про підтвердження
function deleteRow() {
    var confirmation = confirm("Ви впевнені, що хочете видалити цей рядок?");
    if (confirmation) {
        deleteRowConfirmed.call(this);
    }
}

// Функція для редагування рядка таблиці
function editRow() {
    var row = this.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");

    for (var i = 0; i < 3; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.value = cells[i].innerText;
        cells[i].innerText = "";
        cells[i].appendChild(input);
    }

    var editButton = row.querySelector(".edit-button");
    editButton.innerText = "Зберегти";
    editButton.classList.remove("edit-button");
    editButton.classList.add("save-button");

    var deleteButton = row.querySelector(".delete-button");
    deleteButton.innerText = "Скасувати";
    deleteButton.classList.remove("delete-button");
    deleteButton.classList.add("cancel-button");

    editButton.removeEventListener("click", editRow);
    editButton.addEventListener("click", saveRow);
    deleteButton.removeEventListener("click", deleteRow);
    deleteButton.addEventListener("click", cancelRow);
}

// Функція для збереження редагованого рядка
function saveRow() {
    var row = this.parentNode.parentNode;
    var cells = row.getElementsByTagName("td");

    for (var i = 0; i < 3; i++) {
        var input = cells[i].querySelector("input");
        cells[i].innerText = input.value;
    }

    var saveButton = row.querySelector(".save-button");
    saveButton.innerText = "Редагувати";
    saveButton.classList.remove("save-button");
    saveButton.classList.add("edit-button");

    var cancelButton = row.querySelector(".cancel-button");
    cancelButton.innerText = "Видалити";
    cancelButton.classList.remove("cancel-button");
    cancelButton.classList.add("delete-button");

    saveButton.removeEventListener("click", saveRow);
    saveButton.addEventListener("click", editRow);
    cancelButton.removeEventListener("click", cancelRow);
    cancelButton.addEventListener("click", deleteRow);
}

// Функція для скасування редагування або видалення рядка
function cancelRow() {
    var row = this.parentNode.parentNode;
    if (row.querySelector(".edit-button")) {
        // Скасування редагування
        var cells = row.getElementsByTagName("td");
        for (var i = 0; i < 3; i++) {
            var input = cells[i].querySelector("input");
            input.value = cells[i].innerText;
            cells[i].removeChild(input);
        }

        var editButton = row.querySelector(".edit-button");
        editButton.innerText = "Редагувати";
        editButton.classList.remove("edit-button");
        editButton.classList.add("save-button");

        var deleteButton = row.querySelector(".delete-button");
        deleteButton.innerText = "Видалити";
        deleteButton.classList.remove("delete-button");
        deleteButton.classList.add("cancel-button");

        editButton.removeEventListener("click", saveRow);
        editButton.addEventListener("click", editRow);
        deleteButton.removeEventListener("click", cancelRow);
        deleteButton.addEventListener("click", deleteRow);
    } else {
        // Скасування видалення
        row.parentNode.removeChild(row);
    }
}

// Додати обробники для кнопки "Додати"
document.getElementById("add-button").addEventListener("click", addRow);

// Додати обробники для початкових кнопок "Редагувати" і "Видалити"
var editButtons = document.getElementsByClassName("edit-button");
var deleteButtons = document.getElementsByClassName("delete-button");

for (var i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", editRow);
    deleteButtons[i].addEventListener("click", deleteRow);
}
