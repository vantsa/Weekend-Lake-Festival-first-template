var express = require("express");
var path = require("path");
var hbs = require("hbs");

class Server {
    constructor(){
        this.port = 18444;
        this.VIEW_PATH = path.join(__dirname, "../view");
        this.PARTIAL_PATH = path.join(__dirname, "../partials");

        this.initServer();
        this.createEndpoints();
        this.startServer();
    }

    initServer() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(express.static(path.join(__dirname, '../shared')));
        this.app.engine("html", hbs.__express);
        this.app.set("views", this.VIEW_PATH);
        this.app.set("view engine", "html");

        hbs.registerPartials(this.PARTIAL_PATH, () => {
            console.log("partials loaded");
        });
    }

    createEndpoints() {
        this.app.get("/", (req, res) => {
            res.render("index", {a: ["asd","szia"]});
        });
        this.app.get("/kepregeny", (req, res) => {
            res.render("kepregeny");
        });
        this.app.get("/kapcsolat", (req, res) => {
            res.render("kapcsolat");
        });
        this.app.get("/fellepok", (req, res) => {
            res.render("fellepok");
        });
        this.app.get("/jegyek", (req, res) => {
            res.render("jegyek");
        });
        // this.app.post("/", (req, res) => {
        //     res.json({Uzenet: "szia uram"});
        // })
    }

    startServer() {
        this.app.listen(this.port, () => {
            console.log("fut a szerver");
        });
    }
}

new Server();