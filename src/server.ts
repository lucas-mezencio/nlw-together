import express from "express";

const app = express();

/*
 * GET    => Buscar uma informação
 * POST   => Inserir (criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */

/**
 * Tipos de parâmetros:
 *
 * Routes params => "Parametro dividido por barra (busca através do recurso: /prod/{id}) "
 * Query params => "busca iniciada após por '?': /prod?name=teclado&..."
 * Body params => "usados nos metodos POST, PUT, PATCH" {
 *  "name": "teclado"
 *  "description": "digita as coisas..."
 * }
 */

app.get("/test", (req, res) => {
  return res.send("Olá nlw");
});

app.post("/test-post", (req, res) => {
  return res.send("Olá nlw: método POST");
});

app.listen(3000, () => console.log("server is running"));
