import React from "react";
const Items = ({
  photo,
  firstName,
  lastName,
  role,
  profession,
  faculty,
  dni,
  phone,
  direction,
  email,
  birthDate,
}) => {
  return (
    <tr>
      <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              alt="avatar"
              src={`http://3.140.135.200:8000/images/${photo}`}
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {firstName} {lastName}
            </p>
          </div>
        </div>
      </td>
      {/*  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{role}</p>
  </td>*/}
      {faculty ? (
        <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{faculty}</p>
        </td>
      ) : (
        ""
      )}
      {profession ? (
        <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 whitespace-no-wrap">{profession}</p>
        </td>
      ) : (
        ""
      )}

      <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{dni}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{phone}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{direction}</p>
      </td>
      <td className="px-4 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{email}</p>
      </td>

      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">active</span>
        </span>
      </td>*/}
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td>
    </tr>
  );
};

export default Items;
