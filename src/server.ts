import express from "express"

const app = express()

/*
 * GET    => Buscar uma informação
 * POST   => Inserir (criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */

app.get("/test", (req, res) => {
    res.send("Olá nlw")
})

app.listen(3000, () => console.log("server is running"))