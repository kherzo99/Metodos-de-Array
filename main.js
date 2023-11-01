const users = [
  {
    name: "Mary Montgomery",
    email: "mary.montgomery@example.com",
    photo: "https://randomuser.me/api/portraits/women/87.jpg",
  },
];

const createForm = (array) => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let foto = document.getElementById("foto").value;

  console.log("nombre:", name);
  console.log("email:", email);
  console.log("foto:", foto);

  let userObject = { name, email, foto };
  console.log(userObject);
  let userFoto = userObject.foto;
  userFoto.setAttribute("id", "foto");

  const tarjeta = document.createElement("div");
  tarjeta.classList.add("card");

  const contenidoTarjeta = document.createElement("div");
  let userfoto = document.getElementById(userFoto);
  let userName = document.getElementById;
};
