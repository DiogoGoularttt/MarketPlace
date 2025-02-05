//Components
import Image from "next/image";
import { Input } from "@heroui/input";

// Icons
import { VscMenu } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";

import '../../components/Menu/menu.css'
import SearchInput from "../SearchInput/searchInput";

export default function Menu() {
    return (
        <>
            <div className="bg-primary flex items-center gap-5 py-2 px-4">
                <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 flex-shrink-0">
                        <Image
                            src="/images/logo.png"
                            className="logo w-full"
                            width={80}
                            height={80}
                            alt="Logo Mercado Livre"
                            priority
                        />
                    </div>
                    <div className="flex-1">
                        <SearchInput />
                    </div>
                </div>

                {/* Ícones alinhados à direita */}
                <div className="flex items-center gap-6 flex-shrink-0">
                    <VscMenu size={20} />
                    <BsCart2 size={20} />
                </div>
            </div>


        </>
    );
}