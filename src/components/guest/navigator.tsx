import Icon from "../icon";
import { Button } from "@nextui-org/react";
import SegmentOutlinedIcon from '@mui/icons-material/SegmentOutlined';

export default function Navigator() {
    return <nav className="w-screen border-b flex items-center py-5 text-md bg-white justify-center px-5 2xl:px-0">
        <section className="flex items-center gap-10 flex-1 xl:flex-none xl:w-1/2 2xl:w-1/3">
            <Icon />
        
            <ul className="items-center gap-5 hidden lg:flex">
                <li><a className="text-gray-400 hover:text-primary transition-all" href="/">Servicios</a></li>
                <li><a className="text-gray-400 hover:text-primary transition-all" href="/">Galería</a></li>
                <li><a className="text-gray-400 hover:text-primary transition-all" href="/">Blog</a></li>
                <li><a className="text-gray-400 hover:text-primary transition-all" href="/">Nosotros</a></li>
                <li><a className="text-gray-400 hover:text-primary transition-all" href="/">Contacto</a></li>
            </ul>
        </section>

        <section className="text-end flex justify-end xl:w-1/2 2xl:w-1/3"> 
            <Button
                variant="bordered"
                className="rounded-md hidden lg:flex text-primary border-primary"
            >
                Acceder
            </Button>  

            <Button 
                isIconOnly 
                variant="bordered"
                className="rounded-md lg:hidden"
            >
                <SegmentOutlinedIcon />
            </Button>    
        </section>
    </nav>
}