(function currentDateInPlaceholder() {
    var d = new Date();
    var currentDate = d.getDate() + "-" + (d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) + "-" + d.getFullYear();
    document.querySelector('.today-date').placeholder = currentDate;
})();

var searchDate = new Pikaday(
    {
        field: document.getElementById('searchDate'),
        format: 'DD-MM-YYYY'
    });

var startDate,
    endDate,
    updateStartDate = function() {
        createDate.setStartRange(startDate);
        dueDate.setStartRange(startDate);
        dueDate.setMinDate(startDate);
    },
    updateEndDate = function() {
        createDate.setEndRange(endDate);
        createDate.setMaxDate(endDate);
        dueDate.setEndRange(endDate);
    },
    createDate = new Pikaday({
        field: document.getElementById('createDate'),
        minDate: new Date(),
        maxDate: new Date(2020, 12, 31),
        onSelect: function() {
            startDate = this.getDate();
            updateStartDate();
        }
    }),
    dueDate = new Pikaday({
        field: document.getElementById('dueDate'),
        minDate: new Date(),
        maxDate: new Date(2020, 12, 31),
        onSelect: function() {
            endDate = this.getDate();
            updateEndDate();
        }
    }),
    _startDate = createDate.getDate(),
    _endDate = dueDate.getDate();
    if (_startDate) {
        startDate = _startDate;
        updateStartDate();
    }
    if (_endDate) {
        endDate = _endDate;
        updateEndDate();
    };

function openSelectMenu(ev) {
     var ev = event
    if (ev.target.className == "customer-label") {
        var selectbox = document.getElementById("customer");
            if (selectbox.className == "customer-hidden") {
				selectbox.setAttribute("class","visible");
            } else {
				selectbox.setAttribute("class","hidden");
			};
    };
    if (ev.target.className == "type-label") {
        var selectbox = document.getElementById("type");
            if (selectbox.className == "type-hidden") {
				selectbox.setAttribute("class","visible");
            } else {
				selectbox.setAttribute("class","hidden");
			};
    };
};

function selValue(ev, el) {
    var options = el, target = ev.target,
    value = ev.target.innerHTML;
    if (options.id == "type") {
        options.setAttribute('class', 'type-hidden');
        options.parentElement.querySelector('.type-label').value = value;
    }
    if (options.id == "customer") {
        options.setAttribute('class', 'customer-hidden');
        options.parentElement.querySelector('.customer-label').value = value;
    }
};

function swSearch() {
    document.querySelector(".content").classList.toggle("content-toggle");
    document.querySelector(".left-aside").classList.toggle("left-aside-on");
};

function swAdd() {
    document.querySelector(".right-aside").classList.toggle("right-aside-on");
};
