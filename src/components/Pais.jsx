import React from "react";
import Item from "./Item";

export default function Pais({
  children: pais = null,
  onPaisClick = null,
  isVisited = false,
}) {
  if (!pais) {
    return <div>Não foi possível mostrar o país</div>;
  }

  const densidadeDemografica = pais.population / pais.area;
  const { name, capital, region, population, area } = pais;
  const isVisitedClassName = isVisited ? "bg-green-100" : "";

  function handlePaisVisitado() {
    if (onPaisClick) {
      onPaisClick(pais.id);
    }
  }

  return (
    <div
      className={`border p-2 m-2 flex flex-row items-center space-x-2 cursor-pointer ${isVisitedClassName}`}
      onClick={handlePaisVisitado}
    >
      <ul>
        <li>
          <Item label="Nome:">{name}</Item>{" "}
        </li>
        <li>
          <Item label="Capital:">{capital}</Item>{" "}
        </li>
        <li>
          <Item label="Região:">{region}</Item>{" "}
        </li>
        <li>
          <Item label="População:">{population}</Item>{" "}
        </li>
        <li>
          <Item label="Área">{area}</Item>{" "}
        </li>
        <li>
          <Item label="Densidade Demográfica">{densidadeDemografica}</Item>{" "}
        </li>
      </ul>
    </div>
  );
}
