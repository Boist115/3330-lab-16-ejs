import express from "express";
import path from "node:path"

const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

app.use(express.static(path.join(import.meta.dirname, "public")));


app.get("/", (req, res) => {
  const user = { username: "Alberto" };
  res.render("home", user);
});


app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});





app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
