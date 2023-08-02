import React from 'react'
import style from './Card.module.css'
import { BiTrash } from "react-icons/bi";
export function Card({nome, hora, remover}) {
  return (
    <div className={style.containerCard}>
      <strong>{nome}</strong>
      <p>{hora}</p>
      <span onClick={remover}>{<BiTrash/>}</span>
      
    </div>
  )
}

