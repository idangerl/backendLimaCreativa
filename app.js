const express = require("express");
const app = express();
const PORT = 3000;
//ruta para sumar 2 numeros
app.get("/sumar/:num1/:num2", (req, res) => {
  //obtemos los datos a sumar
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  //verificamos que los numeros sean validos
  if (isNaN(num1) || isNaN(num2)) {
    return res
      .status(400)
      .json({ error: "los parametros deben ser numeros validos" });
  }
  //calcular la suma
  const suma = num1 + num2;
  //devolvemos el resultado
  res.status(200).json({ resultado: suma });
});
//manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ error: "ruta no encontrada" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "ha ocurrido un error en el servidor" });
});

//iniciamos en servidor
app.listen(PORT, () => {
  console.log("server started at port 3000");
});
