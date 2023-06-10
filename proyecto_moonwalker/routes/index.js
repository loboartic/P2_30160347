const express = require("express");
const db = require("../models/database");
const axios = require("axios");
const router = express();

// Configuración del Middleware para los datos
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

// el Error es Error: Incorrect datetime value: '2023-06-04T10:50:03.966Z' for column 'timestamp' at row 1

/*
  GETS
*/
router.get("/", (req, res, next) => {
    res.render("index", { title: "Jesús Rojas" });
});

router.get("/curriculum", (req, res, next) => {
    res.render("curriculum", { title: "Curriculum" });
});

router.get("/contact", (req, res, next) => {
    res.render("contact", { title: "Contactar" });
});

/*
    POSTINGS
*/

router.post("/contact/savecomment", async (req, res) => {
    // Valores ReCatcha
    const recaptchaResponse = req.body["g-recaptcha-response"];
    const recaptchaSecret = "6LdYkBgmAAAAADVC-mD4ji4YEtAqSjCHgIvcyTdq";

    // try {
    //     const response = await axios.post(
    //         "https://www.google.com/recaptcha/api/siteverify",
    //         {
    //             params: {
    //                 secret: recaptchaSecret,
    //                 response: recaptchaResponse,
    //             },
    //         }
    //     );
    //     if (!response.data.success) {
    //         return res.status(400).send("Error de recaptcha");
    //     }
    // } catch (error) {
    //     console.log("Error al verificar recaptcha: ", error);
    //     return res.status(500).send("Error al verificar reCAPTCHA");
    // }
    // Valores para el formulario
    const { email, name, comment } = req.body;
    const ip = req.ip;
    const timestamp = new Date().toISOString().slice(0, 19).replace("T", " ");
    console.log(req.params);
    console.log(email, name, comment, ip, timestamp);

    const insertQuery =
        "INSERT INTO contacts (email, name, comment, ip, timestamp) VALUES (?, ?, ?, ?, ?)";

    db.query(
        insertQuery,
        [email, name, comment, ip, timestamp],
        (err, result) => {
            console.log(`el Error es ${err}`);
            if (err) {
                return res
                    .status(500)
                    .send("Error al guardar los datos del formulario");
            }
            res.redirect("/");
        }
    );
});

router.get("/viewdates", (req, res) => {
    const selectQuery = "SELECT * FROM contacts";

    db.query(selectQuery, (err, rows) => {
        if (err) {
            return res
                .status(500)
                .send("Error al obtener los datos del formulario");
        }
        res.json(rows);
    });
});

module.exports = router;
