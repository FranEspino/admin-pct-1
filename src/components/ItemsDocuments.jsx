import React from "react";
import iconPdf from "../assets/svg/iconPdf.svg";
const ItemsDocuments = ({
  title,
  status,
  progress,
  nameInvestigator,
  nameAsesor,
  ur_archivo,
}) => {
  console.log(ur_archivo);
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <a
            className="flex-shrink-0"
            href={`http://localhost:8080/api/file/documents/${ur_archivo}`}
            target="_blank" rel="noreferrer"
          >
            <img
              alt="profil"
              src={iconPdf}
              className="mx-auto object-cover h-10 w-10 "
            />
          </a>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{title}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{status}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{progress}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{nameInvestigator}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{nameAsesor}</p>
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
    </tr>
  );
};

export default ItemsDocuments;
