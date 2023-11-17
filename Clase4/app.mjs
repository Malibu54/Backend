import express from "express";

const app = express();

app.get("/saludo", (req, res) => {
  res.send("Hola a todos desde express");
});

app.get("/bienvenida", (req, res) => {
  const htmlResponse = `<html>
    <head>
        <style>
            body {
                color: blue;
            }
        </style>
    </head>
    <body>
        <h1>Bienvenido a mi aplicación</h1>
    </body>
</html>
`;
  res.send(htmlResponse);
});

app.get("/usuario", (req, res) => {
  const usuarioFalso = {
    nombre: "John",
    apellido: "Doe",
    edad: 25,
    correo: "john.doe@example.com",
  };
  res.json(usuarioFalso);
});

app.listen(8080, () => console.log("Servidor arriba en el puerto 8080!"));
