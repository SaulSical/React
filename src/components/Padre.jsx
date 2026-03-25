import React from 'react'
import { Hijo } from './Hijo'
export const Padre = () => {
  return (
    <>
        <h2>Componente Padre</h2>
        <Hijo mensaje = "hola desde el padre" />
    </>
  )
}