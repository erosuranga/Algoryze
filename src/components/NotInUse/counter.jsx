import React, { useEffect, useState } from 'react'
import '../styles/counter.css'

export default function Counter() {
 const [counter, setCounter] = useState(0)
 const [isVisible, setIsVisible] = useState(false)

 useEffect(() => {
 const handleScroll = () => {
  const section = document.getElementById('mySection')

  if (section) {
  const rect = section.getBoundingClientRect()
  const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

  setIsVisible(isVisible)
  }
 }

 const interval = setInterval(() => {
  if (isVisible) {
  setCounter((prevCounter) => {
   const newCounter = prevCounter + 100

   // Verificar si el contador alcanzó 10000 y detener el intervalo si es así
   if (newCounter >= 10000) {
   clearInterval(interval)
   return 10000 // Asegurar que el contador no supere 10000
   }

   return newCounter
  })
  }
 }, 15)

 window.addEventListener('scroll', handleScroll)

 return () => {
  clearInterval(interval)
  window.removeEventListener('scroll', handleScroll)
 }
 }, [isVisible])

 // Lógica de renderizado para mostrar el contador y la palabra 'USUARIOS' desde el principio
 const displayValue = isVisible ? `+ ${counter} USUARIOS` : ''

 return <div className="counter">{displayValue}</div>
}
