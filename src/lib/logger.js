// COLOR: [ FG, BG ]
const colors = {
    fg: (_) => {
        return "\x1b[" + _[0] + "m";
    },
    bg: (_) => {
        return "\x1b[" + _[1] + "m";
    },
    white: [37, 47],
    blue: [34, 44],
    red: [31, 41],
    black: [30, 40],
    yellow: [33, 43],
    green: [32, 42],
};

exports.info = (...args) => {
    console.log(
        colors.bg(colors.blue) +
            colors.fg(colors.black) +
            "[ INF ]" +
            colors.bg(colors.black) +
            colors.fg(colors.white),
        ...args
    );
};

exports.warn = (...args) => {
    console.log(
        colors.bg(colors.yellow) +
            colors.fg(colors.black) +
            "[ WRN ]" +
            colors.bg(colors.black) +
            colors.fg(colors.white),
        ...args
    );
};

exports.error = (...args) => {
    console.log(
        colors.bg(colors.red) +
            colors.fg(colors.black) +
            "[ ERR ]" +
            colors.bg(colors.black) +
            colors.fg(colors.white),
        ...args
    );
};

exports.success = (...args) => {
    console.log(
        colors.bg(colors.green) +
            colors.fg(colors.black) +
            "[ SUC ]" +
            colors.bg(colors.black) +
            colors.fg(colors.white),
        ...args
    );
};
