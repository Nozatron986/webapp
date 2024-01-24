var data = [
    {
        "name": "restaurant1",
        "type": "restaurant",
        "address": {
            "street name": "1 driveway cause",
            "number": "1"
        }
    },
    {
        "name": "sport center1",
        "type": "sport center",
        "address": {
            "street name": "2 driveway cause",
            "number": "1"
        }
    },
    {
        "name": "restaurant2",
        "type": "restaurant",
        "address": {
            "street name": "1 hemmingwood cause",
            "number": "1"
        }
    },
    {
        "name": "sport center2",
        "type": "sport center",
        "address": {
            "street name": "2 hemmingwood cause",
            "number": "1"
        }
    },
    {
        "name": "restaurant3",
        "type": "restaurant",
        "address": {
            "street name": "1 bargley cause",
            "number": "1"
        }
    },
    {
        "name": "sports center3",
        "type": "sport center",
        "address": {
            "street name": "2 bargley cause",
            "number": "1"
        }
    },
    {
        "name": "swimming pool1",
        "type": "swimming pool",
        "address": {
            "street name": "3 driveway cause",
            "number": "1"
        }
    },
    {
        "name": "climbing wall1",
        "type": "climbing wall",
        "address": {
            "street name": "4 driveway cause",
            "number": "1"
        }
    },
    {
        "name": "swimming pool2",
        "type": "swimming pool",
        "address": {
            "street name": "3 hemmingwood cause",
            "number": "1"
        }
    },
    {
        "name": "climbing wall2",
        "type": "climbing wall",
        "address": {
            "street name": "4 hemmingwood cause",
            "number": "1"
        }
    },
    {
        "name": "swimming pool3",
        "type": "swimming pool",
        "address": {
            "street name": "3 bargley cause",
            "number": "1"
        }
    },
    {
        "name": "climbing wall3",
        "type": "climbing wall",
        "address": {
            "street name": "4 bargley cause",
            "number": "1"
        }
    }
]

var ClickedId;

function change2(e) {
    var element = document.getElementById("HomePage");
    element.classList.add("hide");

    var element = e.target || e.srcElement;
    ClickedId = element.innerHTML;
    console.log(ClickedId)

    element = document.getElementById("calender");
    element.classList.remove("hide");

}

function timetableChange(e) {

    var element = document.getElementById("calender");
    element.classList.add("hide");
    element = document.getElementById("CalenderTitle");
    element.classList.remove("hide");

    var element = e.target || e.srcElement;
    var dateClicked = element.id;
    console.log(dateClicked);

    var dateParts = dateClicked.split('/');

    var month = dateParts[0];

    if (month == 1) {
        month = "january";
    }
    if (month == 2) {
        month = "february";
    }
    if (month == 3) {
        month = "march";
    }
    if (month == 4) {
        month = "april";
    }
    if (month == 5) {
        month = "may";
    }
    if (month == 6) {
        month = "june";
    }
    if (month == 7) {
        month = "july";
    }
    if (month == 8) {
        month = "august";
    }
    if (month == 9) {
        month = "september";
    }
    if (month == 10) {
        month = "october";
    }
    if (month == 11) {
        month = "november";
    }
    if (month == 12) {
        month = "december";
    }
    var day = dateParts[1];

    console.log(day)

    var suffix;

    if (day.length == 2) {
        if (day[0] == 1) {
            suffix = 'th'
        }
        else {
            if (day[1] == 1) {
                suffix = 'st';
            }
            else if (day[1] == 2) {
                suffix = 'nd';
            }
            else if (day[1] == 3) {
                suffix = 'rd';
            }
            else {
                suffix = 'th';
            }
        }
    }
    if (day.length == 1) {
        if (day[0] == 1) {
            suffix = 'st';
        }
        else if (day[0] == 2) {
            suffix = 'nd';
        }
        else if (day[0] == 3) {
            suffix = 'rd';
        }
        else {
            suffix = 'th';
        }
    }

    titleName = `${day}'${suffix} of ${month} at: ${ClickedId}`;

    document.getElementById("CalenderTitle").innerHTML = `${titleName}`;
}

function start() {
    var element = document.getElementById("calender");
    element.classList.add("hide");
    element = document.getElementById("CalenderTitle");
    element.classList.add("hide");
}



var userCardTemplate = document.querySelector("[data-user-template]")
var userCardContainer = document.querySelector("[data-user-cards-container]")
var searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
    var value = e.target.value.toLowerCase();
    users.forEach(user => {
        var isVisible =
            user.name.toLowerCase().includes(value) ||
            user.type.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !isVisible)
    })
})

users = data.map(user => {
    var card = userCardTemplate.content.cloneNode(true).children[0]
    var header = card.querySelector("[data-header]")
    var body = card.querySelector("[data-body]")
    header.textContent = user.name
    body.textContent = user.type
    userCardContainer.append(card)
    userCardContainer.id = card.querySelector("[data-header]")
    return { name: user.name, type: user.type, element: card }
})

const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    document.querySelector(".date p").innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div id="${date.getMonth() + 1}/${i}" class="today" onclick="timetableChange(event)">${i}</div>`;
        } else {
            days += `<div id="${date.getMonth() + 1}/${i}" onclick="timetableChange(event)">${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
    }

    monthDays.innerHTML = days;
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

start()