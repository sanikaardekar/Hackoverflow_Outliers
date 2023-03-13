import React from 'react'
import Geogebra from "react-geogebra";

const GeoGebra = () => {
  return (
    <>
    <Geogebra
        width="800"
        height="700"
        showMenuBar
        showToolBar
        showAlgebraInput
      />
    </>
  )
}

export default GeoGebra