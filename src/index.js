const package = require("../package.json");
const logger = require("./lib/logger.js");
const args = require("./lib/args.js");
const storage = require("./lib/storage.js");
const server = require("./lib/server.js");

let config = {
    host: "http://localhost:3000",
};

async function main() {
    logger.info("Starting modpack-client", package.version);

    if (args.get("host")) config.host = args.get("host");
    else logger.warn("Host not specified, using assuming localhost");

    logger.info("Using modpack-server host", config.host);
    logger.info("Fetching modpack versions...");

    const localVersion = storage.read().version;
    const remoteVersion = await server.getVersion(config.host);

    logger.success("Local:", localVersion);
    logger.success("Remote:", remoteVersion);

    if (remoteVersion <= localVersion) {
        logger.info(
            "Local is higher or equal to remote; there is nothing to do."
        );
        return process.exit(0);
    }

    logger.info("Fetching mods...");

    const remoteMods = await server.getAllMods(config.host);
    const localMods = storage.read().mods;

    let additions = [];
    for (let i = 0; i < remoteMods.length; i++) {
        let remoteMod = remoteMods[i];
        let found = false;

        for (let ii = 0; ii < localMods.length; ii++) {
            let localMod = localMods[ii];
            if (remoteMod.name == localMod.name) found = true;
        }

        if (!found) additions.push(remoteMod);
    }

    let removals = [];
    for (let i = 0; i < localMods.length; i++) {
        let localMod = localMods[i];
        let found = false;

        for (let ii = 0; ii < remoteMods.length; ii++) {
            let remoteMod = remoteMods[ii];
            if (localMod.name == remoteMod.name) found = true;
        }

        if (!found) removals.push(localMod);
    }

    console.log("Additions", additions);
    console.log("Removals", removals);
}

main();
