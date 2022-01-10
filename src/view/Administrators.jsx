import React, { useEffect, useState } from "react";
import axios from "axios";
import TableItems from "../components/TableItems";

const person = {
  person: [],
  role: "",
};
const adminitrator = {
  tipo_cuenta: "ADMIN",
  nombre: "",
  apellido: "",
  dni: "",
  telefono: "",
  direccion: "",
  foto: "",
  correo: "",
  clave: "",
};

const Admin = () => {
  let data = {
    person: [],
    role: "",
  };
  const [advisers, setAdvisers] = useState(person);
  const [newUser, setNewUser] = useState(adminitrator);

  useEffect(() => {
    const peticion = async () => {
      await axios
        .get("http://localhost:8080/api/usuarios/admin")
        .then((response) => {
          //   console.log(response.data.investigadores);
          console.log(response.data.administradores);
          data.person = response.data.administradores;
          data.role = response.data.rol;
          console.log(data);
          console.log(response.data.administradores);
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

    
    const envio = await axios({
      url: `http://localhost:8080/api/usuarios`,
      method: "POST",
      data: formdata,
    }).then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert("Usuario creado con exito");
        setNewUser(adminitrator);
      }
      console.log(res.data);
    });
    console.log(envio);
  };
  return (
    <div className=" h-screen">
      <div className="overflow-x-hidden	h-screen ">

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

export default Admin;
