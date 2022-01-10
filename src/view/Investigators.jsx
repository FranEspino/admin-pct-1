import React, { useEffect, useState } from "react";
import axios from "axios";
import TableItems from "../components/TableItems";

const person = {
  person: [],
  role: "",
};

const investigator = {
  tipo_cuenta: "Investigador",
  nombre: "",
  apellido: "",
  dni: "",
  telefono: "",
  direccion: "",
  foto: "",
  correo: "",
  clave: "",
  carrera: "",
  facultad: "",
  avatar: null,
};
/* {
    photo: "",
    firstName: "fran",
    lastName: "espino",
    profession: "informatica",
    dni: "428224",
    phone: "329934",
    direction: "chepen",
    email: "fran@gmail.com",
    birthDate: "20/39/2009",
  }, */
const Investigators = () => {
  let data = {
    person: [],
    role: "",
  };
  const [investigators, setInvestigators] = useState(person);
  const [newUser, setNewUser] = useState(investigator);

  useEffect(() => {
    const peticion = async () => {
      await axios
        .get("http://3.140.135.200:8000/api/usuarios/investigadores")
        .then((response) => {
          //   console.log(response.data.investigadores);
          console.log(response.data.investigadores);
          data.person = response.data.investigadores;
          data.role = response.data.rol;
          //console.log(JSON.parse(data));
          setInvestigators(data);
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
    formdata.append("carrera", newUser.carrera);
    formdata.append("facultad", newUser.facultad);
    const envio = await axios({
      url: `http://3.140.135.200:8000/api/usuarios`,
      method: "POST",
      data: formdata,
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Usuario creado con exito");
          //setNewUser(investigator);
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="flex  justify-center overflow-x-hidden overflow-hidden">
      <div className=" h-screen overflow-x-hidden overflow-y-auto ">
        <TableItems
          person={investigators.person}
          role={investigators.role}
          newUser={newUser}
          setNewUser={setNewUser}
          postUser={postUser}
        ></TableItems>
      </div>
    </div>
  );
};

export default Investigators;
