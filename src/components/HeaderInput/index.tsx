import "./style.css"

import { HiMagnifyingGlass } from "react-icons/hi2"

interface HeaderInputProps {
    placeholder: string;
}
  
export default function HeaderInput({ placeholder }: HeaderInputProps) {
    return (
        <div className="relative">
            <HiMagnifyingGlass className="search-icon" />
            <input
                className="p-1.5 pl-10 pr-6 rounded-sm"
                type="text"
                placeholder= {placeholder}
            />
        </div>
    )
}