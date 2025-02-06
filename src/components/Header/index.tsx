"use client";

import Image from 'next/image'

import { useState } from 'react';

import ToggleMenu from '../ToggleMenu';
import HeaderInput from '../HeaderInput'
import logo from '../../../public/logo.png'

import { TfiClose } from "react-icons/tfi";
import { CiMenuBurger } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";

export default function Header() {
    const [isTrue, setIsTrue] = useState(false)

    const toggleDiv = () => setIsTrue(!isTrue)
    return (
        <>
            <header className="px-2 py-2 bg-yellow-300">
                <div className="flex justify-between items-center">
                    <Image 
                        src={logo} 
                        alt="Logo ML" 
                        height={35}
                        width={60}
                    />

                    <HeaderInput placeholder="Estou buscando..."/> 

                    {isTrue 
                        ?<TfiClose className='ml-1 text-xl' onClick={toggleDiv}/>
                        : <CiMenuBurger className='text-2xl' onClick={toggleDiv}/>
                    }

                    <PiShoppingCartSimpleThin className='text-2xl'/>
                </div>
            </header>

            {isTrue && (
                <ToggleMenu/>
            )}
        </>
    )
}