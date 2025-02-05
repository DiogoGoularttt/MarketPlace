"use client";
import Image from "next/image";

// Icons
import { VscMenu } from "react-icons/vsc";
import { TbChevronDown } from "react-icons/tb";

import "../../components/Menu/menu.css";
import SearchInput from "../SearchInput/searchInput";
import useIsMobile from "@/app/hooks/useIsMobile";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from "@heroui/react";

export default function Menu() {
    const isMobile = useIsMobile();

    return (
        <div className="bg-primary py-4 md:pt-4 md:pb-3 px-4">
            {isMobile ? (
                <div className="flex items-center justify-between gap-3">
                    <div className="flex-shrink-0">
                        <Image
                            src="/images/logo.png"
                            width={100}
                            height={100}
                            alt="Logo Mercado Livre"
                            className="logo"
                            priority
                        />
                    </div>
                    <VscMenu size={24} className="cursor-pointer" />
                </div>
            ) : (
                <div className="flex flex-col">
                    <div className="flex items-center gap-5">
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/logo_2.png"
                                width={100}
                                height={100}
                                alt="Logo Mercado Livre"
                                className="logo"
                                priority
                            />
                        </div>

                        <div className="flex-1 md:max-w-7xl">
                            <SearchInput />
                        </div>

                        <div className="flex items-center gap-6">
                            <Button>Crie sua conta</Button>
                            <Button>Entre</Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-evenly pt-2">
                        <Dropdown>
                            <DropdownTrigger>
                                <button className="flex items-center gap-2 font-light text-base focus:border-none">Categorias<TbChevronDown /></button>
                            </DropdownTrigger>
                            <DropdownMenu className="bg-secondary w-60 text-white rounded-md">
                                <DropdownItem className="p-2" key="new">Veículos</DropdownItem>
                                <DropdownItem className="p-2" key="copy">Supermercado</DropdownItem>
                                <DropdownItem className="p-2" key="edit">Tecnologia</DropdownItem>
                                <DropdownItem className="p-2" key="delete">Casa e Móveis</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Link color="foreground" className="font-light" href="#">
                            Ofertas
                        </Link>
                        <Link color="foreground" className="font-light" href="#">
                            Cupons
                        </Link>
                        <Link color="foreground" className="font-light" href="#">
                            Supermercado
                        </Link>
                        <Link color="foreground" className="font-light" href="#">
                            Moda
                        </Link>
                        <Link color="foreground" className="font-light" href="#">
                            Mercado Play
                        </Link>
                        <Link color="foreground" className="font-light" href="#">
                            Vender
                        </Link>
                        <Link color="foreground" className="font-light" href="#">
                            Contato
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}