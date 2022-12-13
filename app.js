const express = require("express");
const ejs = require("ejs");
const path = require("path");
const axios = require("axios");
const fs = require("fs");

const app = express();

app.use(express.static(__dirname));

app.set("views", path.join(__dirname, "/templates"));
app.set("view engine", "ejs");

/**
 * Home Page & Post List Page
 */
app.get("/", async (req, res) => {
  const data = fs.readFileSync("datas/list.json", "UTF8");
  const response = JSON.parse(data.toString());
  res.render("index", { ...response });
});

/**
 * Post Page
 */
app.get("/post/:postName", async (req, res) => {
  const data = fs.readFileSync("datas/post.json", "UTF8");
  const response = JSON.parse(data.toString());
  res.render("post", { ...response });
});

/**
 * Archives Page
 */
app.get("/archives", async (req, res) => {
  const data = fs.readFileSync("datas/archives.json", "UTF8");
  const response = JSON.parse(data.toString());
  res.render("archives", { ...response });
});

/**
 * tags Page
 */
app.get("/tags", async (req, res) => {
  const data = fs.readFileSync("datas/tags.json", "UTF8");
  const response = JSON.parse(data.toString());
  res.render("tags", { ...response });
});

/**
 * tag Page
 */
app.get("/tag/:tagName", async (req, res) => {
  const data = fs.readFileSync("datas/tag.json", "UTF8");
  const response = JSON.parse(data.toString());
  res.render("tag", { ...response });
});

//使用8080端口
app.listen(3001);
console.log("The server is running on 4001");
