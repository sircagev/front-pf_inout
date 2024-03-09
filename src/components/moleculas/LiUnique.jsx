import React from "react";
import { Link } from "react-router-dom";

const LiUnique = ({label, icono: Icono, ruta}) => {
    return (
        <>
            <Link className='flex items-center gap-5 mb-2 w-[85%] h-[46px] hover:bg-[#39A900] rounded-[8px] cursor-pointer hover:text-white' to={ruta}>
                <Icono className='w-[28px] ml-3 h-[36px]' />
                <label>{ label }</label>
            </Link>
        </>
    )
}

export default LiUnique