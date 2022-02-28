module.exports = {
    getFlag(flag, options) {
        let args = [];
        if (typeof flag !== "string" && !(options && options.returnAllFlags))
            throw new TypeError("Typeof flag expected String, recieved " + typeof flag);
        if (options && options.returnAllFlags) {
            (process.argv).forEach(arg => {
                if (arg.startsWith("--"))
                    args.push({ key: arg.split("--")[1].split("=")[0], value: arg.split("=")[1] });
            });
            return args;
        }
        let filtered = (process.argv).filter(x => x.toLowerCase().includes(flag.toLowerCase()));
        if (filtered.length > 0)
            return options && options.returnType == "String" ? filtered[0].split("=")[1] : { key: filtered[0].split("--")[1].split("=")[0], value: filtered[0].split("=")[1] };
        return options && options.returnType == "String" ? undefined : { key: flag, value: undefined };
    },
    makeid(length) {
        if (!length) length = Math.floor(Math.random() * (150 - 50 + 1)) + 50;
        let result = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&!";
        let charactersLength = characters.length;
        for (var i = 0; i < length; i++)
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        return result;
    }
}