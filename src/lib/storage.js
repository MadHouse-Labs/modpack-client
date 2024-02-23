const fs = require("fs");
const path = require("path");

/*
    process.cwd() while running under PrismLauncher
    is always going to be $INST_MC_DIR

    This means that STORAGE_FILE is going to be in
    .minecraft, and not the instance folder

    This also means that to access the mods folder,
    we will have to path through process.cwd()/mods
*/

const STORAGE_FILE = "modpack-data.json";

try {
    fs.readFileSync(path.join(process.cwd(), STORAGE_FILE), {
        encoding: "utf-8",
    });
} catch (e) {
    fs.writeFileSync(
        path.join(process.cwd(), STORAGE_FILE),
        JSON.stringify(
            {
                version: 0,
                mods: [],
            },
            null,
            4
        )
    );
}

exports.read = () => {
    return JSON.parse(
        fs.readFileSync(path.join(process.cwd(), STORAGE_FILE), {
            encoding: "utf-8",
        })
    );
};

exports.write = (data) => {
    return fs.writeFileSync(
        path.join(process.cwd(), STORAGE_FILE),
        JSON.stringify(data, null, 4)
    );
};
