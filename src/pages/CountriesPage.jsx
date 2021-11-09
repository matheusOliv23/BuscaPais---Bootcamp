import React, { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Pais from "../components/Pais";
import Paises from "../components/Paises";
import TextInput from "../components/TextInput";

import { todosPaises } from "../data/paises";

export default function CountriesPage() {
  const [filtraPais, setFiltraPais] = useState("");
  const [visitados, setVisitados] = useState([]);

  function handleFiltraPais(novoPais) {
    setFiltraPais(novoPais);
  }

  function togglePaisesVisitados(idPais) {
    let newPaisesVisitados = [...visitados];

    const isPaisVisitado = newPaisesVisitados.indexOf(idPais) !== -1;

    if (isPaisVisitado) {
      newPaisesVisitados = newPaisesVisitados.filter((pais) => pais !== idPais);
    } else {
      newPaisesVisitados.push(idPais);
    }

    setVisitados(newPaisesVisitados);
  }

  const filtraPaisMinusculo = filtraPais.trim().toLocaleLowerCase();

  const paisesFiltrados =
    filtraPaisMinusculo.length >= 3
      ? todosPaises.filter(({ nameLowerCase }) => {
          return nameLowerCase.includes(filtraPaisMinusculo);
        })
      : todosPaises;

  return (
    <div>
      <Header>React-Países</Header>
      <Main>
        <TextInput
          id="inputFiltroPais"
          autoFocus
          inputValue={filtraPais}
          labelDescription="Informe o nome do país: "
          onInputChange={handleFiltraPais}
        />{" "}
      </Main>
      {/* <Paises paisesVisitados={visitados} onPaisClick={togglePaisesVisitados}>
        {paisesFiltrados}
      </Paises> */}
      ;
      <Paises>
        <h2 className="text-center font-semibold">
          {paisesFiltrados.length} pais(es)
        </h2>
        <h3 className="text-center font-semibold">
          {visitados.length} paises visitados
        </h3>

        {paisesFiltrados.map((pais) => {
          const isVisited = visitados.indexOf(pais.id) !== -1;
          return (
            <Pais
              isVisited={isVisited}
              onPaisClick={togglePaisesVisitados}
              key={pais.id}
            >
              {pais}
            </Pais>
          );
        })}
      </Paises>
    </div>
  );
}
