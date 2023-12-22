import express from "express";

const router = express.Router();
let clothes = [
  { name: "Zapatillas", price: "11" },
  { name: "Pantalones", price: "22" },
  { name: "Medias", price: "33" },
  { name: "Lana", price: "33" },
  { name: "Almohadas", price: "55" },
];

router.get("/", (req, res) => {
  let testUser = {
    name: "Hilda",
    last_name: "Martinez",
    role: "Admin",
  };  
  res.render("índex", {
    user: testUser,
    isAdmin: testUser.role === "Admin",
    clothes,
  });
});

export default router;
