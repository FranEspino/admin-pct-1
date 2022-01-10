import axios from "axios";
import React, { useState, useEffect } from "react";
import TableDocuments from "../components/TableDocuments";
const Documents = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    console.log("efect");
    const peticion = async () => {
      const url = "http://3.140.135.200:8000/api/investigacion?id_admin=1";
      const resultado = await axios.get(url, {
        params: {
          id_admin: "1",
        },
      });
      console.log(resultado.data.investigacion);
      setDocuments(resultado.data.investigacion);
    };

    peticion();
  }, []);
  return (
    <div className="flex  justify-center  overflow-y-auto overflow-x-hidden">
      <div className=" h-screen ">
        <TableDocuments documents={documents} />{" "}
      </div>
    </div>
  );
};

export default Documents;
