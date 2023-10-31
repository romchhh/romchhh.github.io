// Отримайте дані з функції, яка надсилає заявки через Telegram
function getApplications() {
    // Отримайте дані з сервера (в вашому випадку, від Telegram)
    // Наприклад, отримайте дані про заявки, які ви надіслали з Telegram
    return [{
            name: "Ім'я 1",
            chat_id: "ID 1",
            username: "Юзернейм 1",
            adress: "Вулиця 1, Будинок 1, Квартира 1",
            car: "Машина 1",
            guests: "Гості 1",
            time: "Час 1",
            status: "Очікує підтвердження" // Додайте поле статусу
        },
        {
            name: "Ім'я 2",
            chat_id: "ID 2",
            username: "Юзернейм 2",
            adress: "Вулиця 2, Будинок 2, Квартира 2",
            car: "Машина 2",
            guests: "Гості 2",
            time: "Час 2",
            status: "Очікує підтвердження" // Додайте поле статусу
        }
    ];
}

// Функція для відображення заявок в таблиці
function displayApplications() {
    var tableBody = document.querySelector("#applicationTable tbody");
    var applications = getApplications();

    applications.forEach(function(application, index) {
        var row = tableBody.insertRow();
        var data = Object.values(application);

        // Додаємо номер заявки
        var numberCell = row.insertCell();
        numberCell.textContent = index + 1;

        data.forEach(function(value, index) {
            var cell = row.insertCell();
            cell.textContent = value;
        });

        var actionsCell = row.insertCell();
        var confirmButton = document.createElement("button");
        confirmButton.textContent = "Підтвердити";
        confirmButton.classList.add("confirm-button"); // Додали клас для стилю
        confirmButton.addEventListener("click", function() {
            if (!confirmButton.disabled) {
                // Заблокувати кнопку після натискання
                confirmButton.disabled = true;
                rejectButton.disabled = true;
                confirmAction("підтвердити", row, application);
            }
        });

        var rejectButton = document.createElement("button");
        rejectButton.textContent = "Відхилити";
        rejectButton.classList.add("reject-button"); // Додали клас для стилю
        rejectButton.addEventListener("click", function() {
            if (!rejectButton.disabled) {
                // Заблокувати кнопку після натискання
                confirmButton.disabled = true;
                rejectButton.disabled = true;
                confirmAction("відхилити", row, application);
            }
        });

        actionsCell.appendChild(confirmButton);
        actionsCell.appendChild(rejectButton);
    });
}


// Функція для відображення підтвердження перед відхиленням або підтвердженням
function confirmAction(action, row, application) {
    if (confirm(`Ви впевнені, що бажаєте ${action} заявку?`)) {
        // Змінюємо статус заявки
        application.status = action === 'підтвердити' ? 'Підтверджено' : 'Відхилено';

        // Оновлюємо текст статусу в таблиці
        var statusCell = row.cells[row.cells.length - 2];
        statusCell.textContent = application.status;
    }
}


// Викликати функцію для відображення заявок при завантаженні сторінки
displayApplications();
