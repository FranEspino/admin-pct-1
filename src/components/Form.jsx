const Form = ({ newUser, setNewUser, postUser, role }) => {
  console.log(newUser);
  const selectedHandler = (e) => {
    setNewUser({ ...newUser, avatar: e.target.files[0] });
  };
  return (
    <div>
      <form
        className="w-full "
        onSubmit={(e) => {
          e.preventDefault();
          postUser(newUser);
        }}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full  m-4 px-3 mb-6 md:mb-0">
            <input
              id="fileinput"
              onChange={selectedHandler}
              className="form-control"
              type="file"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Nombres
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              value={newUser.nombre}
              placeholder="Jane"
              onChange={(e) =>
                setNewUser({ ...newUser, nombre: e.target.value })
              }
            />
            <p className="text-red-500 text-xs italic">
              Los nombres son necesarios
            </p>
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Apellidos
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              value={newUser.apellido}
              onChange={(e) =>
                setNewUser({ ...newUser, apellido: e.target.value })
              }
            />
            <p className="text-red-500 text-xs italic">
              Los Apellidos son necesarios
            </p>
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Dirección
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              value={newUser.direccion}
              onChange={(e) =>
                setNewUser({ ...newUser, direccion: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full  md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              DNI
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="number"
              placeholder="7589307"
              value={newUser.dni}
              onChange={(e) => setNewUser({ ...newUser, dni: e.target.value })}
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              placeholder="******************"
              value={newUser.clave}
              onChange={(e) =>
                setNewUser({ ...newUser, clave: e.target.value })
              }
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p>
          </div>

          <div className="w-full   md:w-1/3  px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Correo
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="email"
              placeholder="ejemplo@gmail.com"
              value={newUser.correo}
              onChange={(e) =>
                setNewUser({ ...newUser, correo: e.target.value })
              }
            />
            <p className="text-gray-600 text-xs italic">
              El correo es necesario
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          {/*  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              State
            </label>
           <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
  </div>
  </div>*/}
          <div
            className={`w-full ${
              role == "Investigador" ? "md:w-1/3 " : "md:w-1/2 "
            } px-3 mb-6 md:mb-0`}
          >
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              Telefono/celular
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="number"
              placeholder="Albuquerque"
              value={newUser.telefono}
              onChange={(e) =>
                setNewUser({ ...newUser, telefono: e.target.value })
              }
            />
          </div>
          {role == "Asesor" ? (
            <>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Profesión
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="Mecanica"
                  value={newUser.profesion}
                  onChange={(e) =>
                    setNewUser({ ...newUser, profesion: e.target.value })
                  }
                />
              </div>
            </>
          ) : null}
          {role == "Investigador" ? (
            <>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  carrera
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="Mecanica"
                  value={newUser.carrera}
                  onChange={(e) =>
                    setNewUser({ ...newUser, carrera: e.target.value })
                  }
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  facultad
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="Mecanica"
                  value={newUser.facultad}
                  onChange={(e) =>
                    setNewUser({ ...newUser, facultad: e.target.value })
                  }
                />
              </div>
            </>
          ) : null}
        </div>
        <div className="flex md:flex items-center mt-6	 justify-center	w-full  ">
          <div class="">
            <button
              class="flex-shrink-0 px-4 py-2 text-lg font-semibold text-white  rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 "
              type="submit"
              style={{ background: "#142038" }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
