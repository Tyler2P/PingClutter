const { default: axios } = require("axios");
const { makeid, getFlag } = require("./utils/functions");

if (getFlag("Random", { returnType: "Object" }).value === "true") {
    setInterval(() => {
        Object.keys(require("./resources/sites.json")).forEach(key => {
            if (!require("./resources/sites.json")[key].url) return;
            let url = (require("./resources/sites.json")[key].url).replace("{}", makeid());
            axios.get(url).catch(() => null);
            axios.post(url).catch(() => null);
            axios.patch(url).catch(() => null);
            console.log(url);
        });
    }, 5000);
} else {
    let words = [...require("./resources/word-list.json"), ...require("./resources/english-word-list.json")];
    let obj = require("./resources/engines.json");
    setInterval(() => {
        Object.keys(obj).forEach(key => {
            let word = words[Math.floor(Math.random() * (words.length - 1))];
            let site = obj[key];
            console.log(site.url.replace("{}", word));
            axios.get(site.url.replace("{}", word)).catch(() => null);
        });
    }, 3000);
}