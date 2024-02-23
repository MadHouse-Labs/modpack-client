const args = new Map();

for (let i = 0; i < process.argv.length; i++) {
    let arg = process.argv[i];
    if (arg.substring(0, 2) !== "--") continue;

    args.set(arg.substring(2), process.argv[i + 1]);
}

module.exports = args;
