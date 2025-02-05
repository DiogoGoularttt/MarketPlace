import { Input } from '@heroui/react';
import { TbZoom } from "react-icons/tb";
import './style.css'

export default function SearchInput() {
    return (
        <>
            <Input
                radius='sm'
                size='md'
                placeholder="Estou buscando..."
                endContent={
                    <TbZoom className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                }
                type="text"
            />
        </>
    );
}