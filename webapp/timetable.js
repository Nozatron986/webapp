function timetableChange(e) {
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

    titleName = `${day}'${suffix} of ${month}`;
    document.body.innerHTML = `
    <div>
    <h1 class="CalenderTitle">
    ${titleName}
    </h1>
    </div>`
}