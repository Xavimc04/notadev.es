import Icon from "../shared/icon";
import { Button } from "@nextui-org/react";

export default function Navigator() {
    return <nav className="w-screen border-b flex justify-center items-center py-5 text-md bg-white px-5 lg:px-0">
        <section className="flex items-center gap-10 flex-1 lg:flex-none lg:w-1/2 xl:w-1/3">
            <Icon />
        
            <ul className="flex items-center gap-5">
                <li><a className="text-gray-400 hover:text-orange-500 transition-all" href="/">Servicios</a></li>
                <li><a className="text-gray-400 hover:text-orange-500 transition-all" href="/">Clientes</a></li>
                <li><a className="text-gray-400 hover:text-orange-500 transition-all" href="/">Equipo</a></li>
            </ul>
        </section>

        <section className="lg:w-1/3 text-end"> 
            <Button
                color="warning" 
                variant="bordered"
                className="rounded-md"
            >
                Acceder
            </Button>  
        </section>
    </nav>
}