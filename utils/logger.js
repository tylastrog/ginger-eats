var util = require('util');

var methods = {
    start: function() {
        console.clear();
        var version = '1.0';
        var logo = '\n' +
            '  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *\n' +
            '  *                                                                                       *\n' +
            '  *  ██████╗ ██╗███╗   ██╗ ██████╗ ███████╗██████╗      ███████╗ █████╗ ████████╗███████╗ *\n' +
            '  * ██╔════╝ ██║████╗  ██║██╔════╝ ██╔════╝██╔══██╗     ██╔════╝██╔══██╗╚══██╔══╝██╔════╝ *\n' +
            '  * ██║  ███╗██║██╔██╗ ██║██║  ███╗█████╗  ██████╔╝     █████╗  ███████║   ██║   ███████╗ *\n' +
            '  * ██║   ██║██║██║╚██╗██║██║   ██║██╔══╝  ██╔══██╗     ██╔══╝  ██╔══██║   ██║   ╚════██║ *\n' +
            '  * ╚██████╔╝██║██║ ╚████║╚██████╔╝███████╗██║  ██║     ███████╗██║  ██║   ██║   ███████║ *\n' +
            '  *  ╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝ *\n' +
            '  *                                                                                       *\n' +
            '  *                                written by tylastrog (v' + version + ')                            *\n' +
            '  *                                                                                       *\n' +
            '  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *';
        console.log(logo);
    },

    s: function() {
        console.log('');
    },

    log: function(string) {
        console.log(' [' + this.getTimeString() + '] ' + string);
    },

    getTimeString: function() {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        var date_string = util.format("%j:%j:%j", hours, minutes, seconds);

        return date_string;
    }
};

module.exports = methods;