var pendingApplications = [];
var confirmedApplications = [];

function getApplications() {
    return [{
            name: "Ім'я 1",
            chat_id: "ID 1",
            username: "Юзернейм 1",
            adress: "Вулиця 1, Будинок 1, Квартира 1",
            car: "Машина 1",
            guests: "Гості 1",
            time: "Час 1",
            status: "Очікує підтвердження"
        },
        {
            name: "Ім'я 2",
            chat_id: "ID 2",
            username: "Юзернейм 2",
            adress: "Вулиця 2, Будинок 2, Квартира 2",
            car: "Машина 2",
            guests: "Гості 2",
            time: "Час 2",
            status: "Очікує підтвердження"
        },
        {
            name: "Ім'я 3",
            chat_id: "ID 3",
            username: "Юзернейм 3",
            adress: "Вулиця 3, Будинок 3, Квартира 3",
            car: "Машина 3",
            guests: "Гості 3",
            time: "Час 3",
            status: "Очікує підтвердження"
        },
        {
            name: "Ім'я 4",
            chat_id: "ID 4",
            username: "Юзернейм 4",
            adress: "Вулиця 4, Будинок 4, Квартира 4",
            car: "Машина 4",
            guests: "Гості 4",
            time: "Час 4",
            status: "Очікує підтвердження"
        },
        {
            name: "Ім'я 5",
            chat_id: "ID 5",
            username: "Юзернейм 5",
            adress: "Вулиця 5, Будинок 5, Квартира 5",
            car: "Машина 5",
            guests: "Гості 5",
            time: "Час 5",
            status: "Очікує підтвердження"
        },
        {
            name: "Ім'я 6",
            chat_id: "ID 6",
            username: "Юзернейм 6",
            adress: "Вулиця 6, Будинок 6, Квартира 6",
            car: "Машина 6",
            guests: "Гості 6",
            time: "Час 6",
            status: "Очікує підтвердження"
        },
        {
            name: "Ім'я 7",
            chat_id: "ID 7",
            username: "Юзернейм 7",
            adress: "Вулиця 7, Будинок 7, Квартира 7",
            car: "Машина 7",
            guests: "Гості 7",
            time: "Час 7",
            status: "Очікує підтвердження"
        },
        {
            name: "Ім'я 8",
            chat_id: "ID 8",
            username: "Юзернейм 8",
            adress: "Вулиця 8, Будинок 8, Квартира 8",
            car: "Машина 8",
            guests: "Гості 8",
            time: "Час 8",
            status: "Очікує підтвердження"
        },
        {
            name: "Ім'я 9",
            chat_id: "ID 9",
            username: "Юзернейм 9",
            adress: "Вулиця 9, Будинок 9, Квартира 9",
            car: "Машина 9",
            guests: "Гості 9",
            time: "Час 9",
            status: "Очікує підтвердження"
        }
    ];
}

function sortApplications() {
    var applications = getApplications();

    applications.sort(function(a, b) {
        if (a.status === 'Очікує підтвердження' && b.status !== 'Очікує підтвердження') {
            return -1;
        } else if (a.status !== 'Очікує підтвердження' && b.status === 'Очікує підтвердження') {
            return 1;
        } else {
            return 0;
        }
    });

    return applications;
}

function displayApplications() {
    var pendingTable = document.querySelector("#pendingApplicationsTable tbody");
    var confirmedTable = document.querySelector("#confirmedApplicationsTable tbody");
    var applications = sortApplications();

    pendingTable.innerHTML = '';
    confirmedTable.innerHTML = '';

    applications.forEach(function(application, index) {
        var row = document.createElement("tr");
        var data = Object.values(application);

        var numberCell = document.createElement("td");
        numberCell.textContent = index + 1;
        row.appendChild(numberCell);

        data.forEach(function(value) {
            var cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        if (application.status === 'Очікує підтвердження') {
            var actionsCell = document.createElement("td");
            var confirmButton = document.createElement("button");
            confirmButton.textContent = "Підтвердити";
            confirmButton.classList.add("confirm-button");
            confirmButton.addEventListener("click", function() {
                if (!confirmButton.disabled) {
                    confirmButton.disabled = true;
                    rejectButton.disabled = true;
                    confirmAction("підтвердити", row, application, pendingTable, confirmedTable);
                }
            });

            var rejectButton = document.createElement("button");
            rejectButton.textContent = "Відхилити";
            rejectButton.classList.add("reject-button");
            rejectButton.addEventListener("click", function() {
                if (!rejectButton.disabled) {
                    confirmButton.disabled = true;
                    rejectButton.disabled = true;
                    confirmAction("відхилити", row, application, pendingTable, confirmedTable);
                }
            });

            actionsCell.appendChild(confirmButton);
            actionsCell.appendChild(rejectButton);
            row.appendChild(actionsCell);

            pendingTable.appendChild(row);
            pendingApplications.push(application);
        } else {
            row.cells[row.cells.length - 1].textContent = application.status;
            confirmedTable.appendChild(row);
            confirmedApplications.push(application);
        }
    });
}

function confirmAction(action, row, application, pendingTable, confirmedTable) {
    if (confirm(`Ви впевнені, що бажаєте ${action} заявку?`)) {
        application.status = action === 'підтвердити' ? 'Підтвердено' : 'Відхилено';

        // Оновлюємо статус безпосередньо в графі "Статус" та додаємо клас стилізації
        row.cells[8].textContent = application.status;
        row.cells[8].classList.add(application.status.toLowerCase());

        if (application.status === 'Підтвердено' || application.status === 'Відхилено') {
            pendingTable.removeChild(row);
            confirmedTable.appendChild(row);
            confirmedApplications.push(application);

            var index = pendingApplications.indexOf(application);
            if (index > -1) {
                pendingApplications.splice(index, 1);
            }
        }
    } else {
        var confirmButton = row.querySelector(".confirm-button");
        var rejectButton = row.querySelector(".reject-button");
        confirmButton.disabled = false;
        rejectButton.disabled = false;
    }
}

displayApplications();
