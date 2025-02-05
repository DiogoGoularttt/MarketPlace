import { Input } from '@heroui/react';
import { TbZoom } from "react-icons/tb";
import './style.css'

export default function SearchInput() {
    return (
        <>
            <Input
                radius='sm'
                size='sm'
                labelPlacement="outside"
                placeholder="Estou buscando..."
                startContent={
                    <TbZoom className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                type="email"
            />
        </>
    );
}