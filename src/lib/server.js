exports.getVersion = async (host) => {
    const request = await fetch(host + "/");
    return (await request.json()).version;
};

exports.getAllMods = async (host) => {
    const request = await fetch(host + "/getallmods");
    return await request.json();
};

exports.getMod = async (host, modId, fileId) => {
    const querystring = new URLSearchParams();
    querystring.set("modId", modId);
    querystring.set("fileId", fileId);

    return await fetch(host + "/download?" + querystring.toString());
};
