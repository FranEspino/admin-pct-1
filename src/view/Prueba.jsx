import React, { useState } from "react";

const initialData = {
  title: "",
  description: "",
  id_investigacion: "",
};
const Prueba = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(initialData);

  const selectedHandler = (e) => {
    setFile(e.target.files[0]);
  };
  const handleTitle = (e) => {
    setData({ ...data, title: e.target.value });
  };
  const handleDescription = (e) => {
    setData({ ...data, description: e.target.value });
  };

  const sendHandler = () => {
  /*  if (!file) {
      alert("you must upload file");
      return;
    }
*/
    const formdata = new FormData();
    console.log(file);
    formdata.append("documents", file);
    formdata.append("id_investigacion", data.id_investigacion); //1
    formdata.append("titulo", data.title);
    formdata.append("descripcion", data.description);

    console.log(data);
    fetch("http://3.140.135.200:8000/api/investigacion", {
      method: "PUT",
      body: formdata,
    })
      .then((res) => res.text())
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });

    document.getElementById("fileinput").value = null;

    setFile(null);
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="card p-3">
          <div className="row">
            <div className="col-10">
              <input
                id="fileinput"
                onChange={selectedHandler}
                className="form-control"
                type="file"
              />
            </div>

            <div className="mt-4 d-flex justify-content-between">
              <input
                type="text"
                id="tittleinpunt"
                placeholder="Titulo"
                value={data.title}
                onChange={handleTitle}
              />
              <textarea
                className="border border-dark"
                id="texarea"
                value={data.description}
                onChange={handleDescription}
              />

              <input
                type="number"
                id="investigador"
                placeholder="Investigador"
                value={data.id_investigacion}
                onChange={(e) => {
                  setData({ ...data, id_investigacion: e.target.value });
                }}
              />
            </div>
            <div className=" d-flex justify-content-center">
              <button
                onClick={sendHandler}
                style={{ background: "#142038" }}
                type="button"
                className=" flex-shrink-0 px-4 py-2 text-lg font-semibold text-white  rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 "
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prueba;
