exports.getVersion = async (host) => {
    const request = await fetch(host + "/");
    return (await request.json()).version;
};

exports.getAllMods = async (host) => {
    const request = await fetch(host + "/getallmods");
    return await request.json();
};
