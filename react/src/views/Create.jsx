import React from "react";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import InformationBox from "../components/InformationBox";
import Title from "../components/Title";
import { Navigate } from "react-router-dom";
import { userAuthContext } from "../context/AuthProvider";
import ButtonSecondary from "../components/Buttons/ButtonSecondary";
import ProjectHeaderDetail from "../components/projects/ProjectHeaderDetail";
import CreateDropdown from "../components/createRubrics/CreateDropdown";
import addIconGray from "../assets/addIconGray.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import ButtonSecondaryIconData from "../components/Buttons/ButtonSecondaryIconData";


export default function Create() {
  const { userToken } = userAuthContext();
  if (!userToken) {
    return <Navigate to="/acceso" />;
  }

  return (
    <>
      <form action="#" method="post" id="create" className="font-latocustom font-boldmt-2 space-y-1">
        <Title
          title={"Google"} />

        <ProjectHeaderDetail
          project_url={'www.google.com'}
          project_description={'Lorem ipsum'}
        />

        <InformationBox
          text={"Comprueba en esta lista que la rúbrica que quieres crear no se ha creado. Al final de la lista encontrarás el botón “Crear mi rúbrica”."
          }
        />

        <div className="border rounded border-color-blue-p p-1.5">
          <label for="title" className="font-opencustom text-base font-bold">
            <h1 className="font-latocustom font-bold text-ml mt-3">Título:</h1>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Título"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base text-xs mt-2 mb-6"
          />

          <label for="description" className="font-opencustom text-sm mt-3">
            Descripción de la rúbrica:
          </label>
          <textarea
            type="text"
            id="description"
            name="description"
            placeholder="Descripción de la rúbrica."
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base text-xs mt-2 mb-6"
          />

          <label for="dimension" className="font-opencustom text-sm font-bold">
            Dimensión:
          </label>
          <input
            type="text"
            id="dimension"
            name="dimension"
            placeholder="Dimensión"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base text-xs mt-2 mb-6"
          />

          <label for="description" className="font-opencustom text-sm">
            Descripción de la dimensión:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Descripción"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base text-xs mt-2 mb-6"
          />

          <lable for="evaluation" className="font-opencustom text-xs">
            {" "}
            Criterio a evaluar:
          </lable>
          <input
            type="text"
            id="evaluation"
            name="evaluation"
            placeholder="Criterio que ha de ser evaluado"
            className="w-full rounded border border-color-grey-border-btn px-3 py-4 text-color-bck placeholder-color-grey-border-btn focus:z-10 focus:border-color-blue-p focus:outline-none focus:ring-color-blue-p font-opencustom text-base text-xs mt-2 mb-6"
          />
          <CreateDropdown />
          <div className="grid w-full grid-cols-2 gap-7 mb-7 mt-5">
            <ButtonSecondaryIconData
              text={"Añadir dimensión"}
              src={addIconGray}
              alt={"Add icon"}
            />
            <ButtonSecondaryIconData
              text={"Eliminar dimensión"}
              src={deleteIcon}
              alt={"Add icon"}
            />
          </div>
        </div>
        <div>
        <div className="mt-7 grid w-full grid-cols-2 gap-7">
          <ButtonPrimary text={"Guardar"} />
          <ButtonSecondary text={"Cancelar"} />
        </div>
        </div>
      </form>
    </>
  );
}
