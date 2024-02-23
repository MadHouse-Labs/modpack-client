const fs = require("fs");
const path = require("path");

const STORAGE_FILE = "data.json";

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
