var searchDate = new Pikaday(
    {
        field: document.getElementById('searchDate'),
        format: 'DD-MM-YYYY'
    });
/*var dueDate = new Pikaday(
    {
        field: document.getElementById('dueDate'),
        format: 'DD-MM-YYYY',
        minDate: new Date()
    });
var createDate = new Pikaday(
    {
        field: document.getElementById('createDate'),
        format: 'DD-MM-YYYY',
        minDate: new Date()
    });*/



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
        }
