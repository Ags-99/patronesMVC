const path = require("path");

const mainControllers = {
    mostrarHome: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/home.html"))
    },
    mostrarAbout: (req, res) => {
        res.sendFile(path.join(__dirname, "../views/about.html"))
    }
}


module.exports = mainControllers;