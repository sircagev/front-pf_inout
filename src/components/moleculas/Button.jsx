import React from 'react'


export const Button = ({label, bg, funcion, hoover}) => {
    const styles = `inline-block px-6 py-2 text-xs font-medium leading-6 ${bg} text-center text-white uppercase transition 
    rounded shadow ripple hover:shadow-lg hover:${hoover} focus:outline-none` 
  return (
    <div>
        <button class={styles} onClick={funcion}>
            {label}
        </button>
    </div>
  )
}
