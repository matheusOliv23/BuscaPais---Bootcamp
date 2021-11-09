import React from "react";
import Pais from "./Pais";

export default function Paises({ children }) {
  return (
    <div className="border p-2 flex-row items-center space-x-2">{children}</div>
  );
}
