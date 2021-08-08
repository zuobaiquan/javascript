(function () {
    var datePicker = {};
    /***
     * 获取日历数据
     * @param year      年份
     * @param month     月份
     * @returns {Array}
     */
    datePicker.getMonthData = function (year, month) {

        var ret = [];

        //当没有传入参数时，使用当前日期
        if (typeof year==='undefined'|| typeof month==='undefined') {
            var today = new Date();
            year = today.getFullYear();
            month = today.getMonth() + 1;
        }

        var firstDay = new Date(year, month - 1, 1);                //取得当前月份1号
        var firstDayWeekDay = firstDay.getDay();                    //取得当前月份1号是星期几
        if (firstDayWeekDay === 0) {                                //当为星期日（0）时，将值重新设置为7
            firstDayWeekDay = 7;
        }

        year = firstDay.getFullYear();
        month = firstDay.getMonth() + 1;

        var lastDayOfLastMonth = new Date(year, month - 1, 0);      //获取上个月最后一天的日期
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate();     //通过最后一天的日期获取上个月总天数

        var preMonthDayCount = firstDayWeekDay - 1;                 //上个月需要显示出来的天数

        var lastDay = new Date(year, month, 0);                     //取得当前月份最后一天的日期
        var lastDate = lastDay.getDate();                           //通过最后一天的日期获取当前月总天数

        for (var i = 0; i < 7 * 6; i++) {
            var date = i + 1 - preMonthDayCount;                    //date用于计算显示的是几号
            var showDate = date;
            var thisMonth = month;
            if (date <= 0) {
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;
            } else if (date > lastDate) {
                thisMonth = month + 1;
                showDate = showDate - lastDate;
            }

            if (thisMonth === 0) {
                thisMonth = 12;
            }
            if (thisMonth === 13) {
                thisMonth = 1;
            }

            ret.push({
                month: thisMonth,                                   //当前表格需要显示的是哪个月份的日期
                date: date,                                         //date用于计算显示的是几号
                showDate: showDate                                  //当前需要显示几号
            });
        }
        return {
            year:year,
            month:month,
            days:ret
        };
    };

    window.datePicker = datePicker;

})();