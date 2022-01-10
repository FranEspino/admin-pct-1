import React from "react";
import Items from "./Items";
import { useModal } from "../hooks/useModal";
import ModalPortal from "./ModalPortal";
import Form from "./Form";
const TableItems = ({ person, role, newUser, setNewUser, postUser }) => {
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);

  return (
    <div className="  px-4 sm:px-8">
      <div className="py-8">
        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <h2 className="text-2xl leading-tight">{role}es</h2>
          <div className="text-end">
            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Filter'
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="name"
                />
              </div>
              <button
                style={{ background: "#142038" }}
                className="flex-shrink-0 px-4 py-2 text-lg font-semibold text-white  rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 "
                type="submit"
              >
                Buscar
              </button>
            </form>
          </div>
          <button
            style={{ background: "#142038" }}
            className="flex-shrink-0 px-4 py-2 text-lg font-semibold text-white  rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 "
            type="submit"
            onClick={openModalPortal}
          >Agregar {role}
          </button>
        </div>
        <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
          <Form
            newUser={newUser}
            setNewUser={setNewUser}
            role={role}
            postUser={postUser}
          />
        </ModalPortal>
        <div className="flex items-center  justify-center ">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto ">
            <div className="inline-block min-w-screen shadow rounded-lg overflow-hidden">
              <table className="min-w-screen leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-3 text-center bg-white  border-b border-gray-200 text-gray-800  text-sm uppercase font-bold"
                    >
                      Nombre de {role}
                    </th>
                    {/*<th
                    scope="col"
                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                    Role
                  </th>*/}
                    {role == "Investigador" ? (
                      <th
                        scope="col"
                        className="px-4 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                      >
                        Facultad
                      </th>
                    ) : (
                      ""
                    )}
                    {role != "Administrador" ? (
                      <th
                        scope="col"
                        className="px-4 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                      >
                        Carrera / Profesión
                      </th>
                    ) : (
                      ""
                    )}

                    <th
                      scope="col"
                      className="px-4 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      DNI
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      celular
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Direccion
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      correo
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {person.map((item, index) => {
                    return (
                      <Items
                        key={index}
                        role={role}
                        photo={item.foto}
                        firstName={item.nombre}
                        lastName={item.apellido}
                        profession={item.carrera || item.profesion}
                        faculty={item.facultad}
                        dni={item.dni}
                        phone={item.telefono}
                        direction={item.direccion}
                        email={item.correo}
                        birthDate={item.fecha_nacimiento}
                        dee={item.dee}
                      />
                    );
                  })}
                </tbody>
              </table>
              <div className="px-4 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="w-full p-4 border text-lg rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      className=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border-t border-b text-lg text-indigo-500 bg-white hover:bg-gray-100 "
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border text-lg text-gray-600 bg-white hover:bg-gray-100"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border-t border-b text-lg text-gray-600 bg-white hover:bg-gray-100"
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border text-lg text-gray-600 bg-white hover:bg-gray-100"
                  >
                    4
                  </button>
                  <button
                    type="button"
                    className="w-full p-4 border-t border-b border-r text-lg  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      className=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableItems;
