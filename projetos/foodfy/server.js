// Importando módulos
const express = require("express");
const nunjucks = require("nunjucks");
const recipes = require("./src/data")

// Definindo server
const server = express();
const port = 5000;

// Configurando o nunjucks
nunjucks.configure("views", {
  express: server,
  autoescape: true,
  noCache: true,
  watch: true,
});

// Definindo a renderização de arquivos njk como padrão
server.set("view engine", "njk");

// Definindo o local das arquivos públicos
server.use(express.static("public"));

// Criando Rotas
server.get("/", function (req, res) {
  return res.render("index", {recipes});
});

server.get("/receitas", function (req, res) {
    return res.render("receitas", {recipes});
  });
 
server.get("/sobre", function (req, res) {
    return res.render("sobre");
});


server.get("/:index", function (req, res) {
  const recipeIndex = req.params.index
  let recipe = recipes[recipeIndex] 
  return res.render("receita", {recipe})
});

server.get("/receitas/:index", function (req, res) {
  const recipeIndex = req.params.index
  let recipe = recipes[recipeIndex] 
  return res.render("receita", {recipe})
})
  
// Iniciando o servidor
server.listen(port, function () {
  console.log("Server is running");
});
