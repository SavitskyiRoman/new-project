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

function type() {
				var selectbox = document.getElementById("type");
				if (selectbox.className == "hidden") {
					selectbox.setAttribute("class","visible");
				} else {
					selectbox.setAttribute("class","hidden");
				}
			}
function customer() {
				var selectbox = document.getElementById("customer");
				if (selectbox.className == "hidden") {
					selectbox.setAttribute("class","visible");
				} else {
					selectbox.setAttribute("class","hidden");
				}
			}
function choose(ev, el) {
    var options = el, target = ev.target,
    value = ev.target.innerHTML;

    options.setAttribute('class', 'hidden');
    options.parentElement.querySelector('.type-label').value = value;
}
