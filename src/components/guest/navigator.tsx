import Icon from "../shared/icon";
import { Button } from "@nextui-org/react";

export default function Navigator() {
    return <nav className="w-screen border-b flex justify-center items-center py-5 text-md bg-white">
        <section className="flex items-center gap-10 w-1/3">
            <Icon />
        
            <ul className="flex items-center gap-5">
                <li><a className="text-gray-400 hover:text-orange-500 transition-all" href="/">Servicios</a></li>
                <li><a className="text-gray-400 hover:text-orange-500 transition-all" href="/">Clientes</a></li>
                <li><a className="text-gray-400 hover:text-orange-500 transition-all" href="/">Equipo</a></li>
            </ul>
        </section>

        <section className="w-1/3 text-end"> 
            <Button color="warning" variant="bordered">
                Acceder
            </Button>  
        </section>
    </nav>
}