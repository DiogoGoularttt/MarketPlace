import Link from "next/link";

import "./style.css"

import { BsTag } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { PiBasket } from "react-icons/pi";
import { BsPlayBtn } from "react-icons/bs";
import { PiHouseLight } from "react-icons/pi";
import { HiUserCircle } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { IoEarthOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export default function ToggleMenu(){
    const menuItems1 = [
        {
            text: 'Início', 
            icon: <PiHouseLight className="menu-item-icon"/>
        },
        {
            text: 'Ofertas', 
            icon: <BsTag className="menu-item-icon"/>
        },
        {
            text: 'Mercado Play', 
            icon: <BsPlayBtn className="menu-item-icon"/>
        },
        {
            text: 'Histórico', 
            icon: <CiClock2 className="menu-item-icon"/>
        },
        {
            text: 'Contato', 
            icon: <TfiHeadphoneAlt className="menu-item-icon"/>
        },
    ];

    const menuItems2 = [
        {
            text: 'Supermercado', 
            icon: <PiBasket className="menu-item-icon"/>
        },
        {
            text: 'Moda', 
            icon: <IoShirtOutline className="menu-item-icon"/>
        },
        {
            text: 'Mais vendidos', 
            icon: <IoIosStarOutline className="menu-item-icon"/>
        },
        {
            text: 'Compra Internacional', 
            icon: <IoEarthOutline className="menu-item-icon"/>
        }
    ]

    return(
        <div className="border-t-[1.2px] border-stone-300">

            <div className="bg-yellow-300 p-4 pt-0">
                <div className="flex items-center pb-1">
                    <HiUserCircle className="text-8xl text-zinc-400 pr-2"/>
                    <div>
                        <h1 className="font-semibold text-md">Bem-vindo</h1>
                        <h2 className="text-zinc-600 text-sm">Entre na sua conta para ver suas compras, favoritos etc.</h2>
                    </div>
                </div>

                <div className="flex gap-1">
                    <button className="menu-button bg-blue-700 text-zinc-50">Entre</button>
                    <button className="menu-button bg-zinc-50 text-blue-700">Crie a sua conta</button>
                </div>
            </div>

            <div className="bg-zinc-50 pt-4">
                <ul className="pl-4">
                    {menuItems1.map(({ text, icon },index) => {
                        return(
                            <li key={index} className="menu-item">
                                {icon}
                                <Link className="menu-item-link" href="">{text}</Link>
                            </li>
                        )  
                    })}
                </ul>

                <div className="border border-zinc-300 mt-4"></div>

                <ul className="pl-4 mt-4">
                    {menuItems2.map(({ text, icon },index) => {
                        return(
                            <li key={index} className="menu-item">
                                {icon}
                                <Link className="menu-item-link" href="">{text}</Link>
                            </li>
                        )  
                    })}
                </ul>
            </div>

        </div>
            
    )
}