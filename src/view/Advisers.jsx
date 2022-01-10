import React, { useEffect, useState } from "react";
import axios from "axios";
import TableItems from "../components/TableItems";

const person = {
  person: [],
  role: "",
};
const adviser = {
  tipo_cuenta: "Asesor",
  nombre: "",
  apellido: "",
  dni: "",
  telefono: "",
  direccion: "",
  foto: "",
  correo: "",
  clave: "",
  profesion: "",
  avatar: null,
};
/*{
    "tipo_cuenta": "asesor",
    "nombre": "alexander",
    "apellido":"zelada",
    "dni": "65447593",
    "telefono": "927204653",
    "direccion": "direccion",
    "foto":"dedaebde ",
    "correo": "jose@gmail.com",
    "clave": "apiUniversidad",
    "profesion":"ingeniero de sofware"
     */
const Advisers = () => {
  let data = {
    person: [],
    role: "",
  };

  const [advisers, setAdvisers] = useState(person);
  const [newUser, setNewUser] = useState(adviser);
  useEffect(() => {
    const peticion = async () => {
      await axios
        .get("http://3.140.135.200:8000/api/usuarios/asesores")
        .then((response) => {
          //   console.log(response.data.investigadores);
          console.log(response.data.asesores);
          data.person = response.data.asesores;
          data.role = response.data.rol;
          console.log(response.data.asesores);
          //console.log(JSON.parse(data));
          setAdvisers(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    peticion();
  }, [newUser]);
  const postUser = async () => {

    const formdata = new FormData();
    formdata.append("avatar", newUser.avatar);
    formdata.append("tipo_cuenta", newUser.tipo_cuenta);
    formdata.append("nombre", newUser.nombre);
    formdata.append("apellido", newUser.apellido);
    formdata.append("dni", newUser.dni);
    formdata.append("telefono", newUser.telefono);
    formdata.append("direccion", newUser.direccion);
    formdata.append("foto", newUser.foto);
    formdata.append("correo", newUser.correo);
    formdata.append("clave", newUser.clave);
    formdata.append("profesion", newUser.profesion);

    const envio = await axios({
      url: `http://localhost:8080/api/usuarios`,
      method: "POST",
      data: formdata,
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert("Usuario creado con exito");
        //setNewUser(adviser);
      }
      console.log(res.data);
    });
    console.log(envio);
  };
  return (
    <div className="  overflow-y-auto overflow-x-hidden">
      <div className=" h-screen ">
        <TableItems
          person={advisers.person}
          role={advisers.role}
          newUser={newUser}
          setNewUser={setNewUser}
          postUser={postUser}
        ></TableItems>
      </div>
    </div>
  );
};

export default Advisers;
