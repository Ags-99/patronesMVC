const express = require("express");
const mainRouters = require("./routers/mainRouters");
const app = express();
const PORT = 3000;



app.use(express.static("public"));

app.use(mainRouters);

app.listen(PORT || 3000, () => console.log(`escuchando en puerto ${PORT}`));

