import { APP_NAME } from "@/lib/constants";
import Icon from "../icon";
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';

export default function Footer() {
    const services: string[] = [
        "Desarrollo web",
        "Desarrollo móvil",
        "Dominio",
        "Hosting",
        "Asesoramiento"
    ]

    return <footer className="border-t bg-primary w-screen flex flex-col items-center">
        <div className="w-2/3 flex items-start py-10">
            {/* @ Services */}
            <section className="w-1/3 flex flex-col gap-4">
                <h2 className="text-3xl font-bold">
                    Servicios
                </h2>

                <ul className="flex flex-col gap-2">
                    { 
                        services.map((service, index) => (
                            <li key={ index }>
                                <a href="/" className="text-white flex items-center gap-1 text-lg">
                                    <DoubleArrowOutlinedIcon />

                                    { service }
                                </a>
                            </li>
                        )) 
                    }
                </ul>
            </section>

            {/* @ Policies */}
            <section className="w-1/3 flex flex-col gap-4">
                <h2 className="text-3xl font-bold">
                    Políticas
                </h2>

                <ul className="flex flex-col gap-2">
                    <li>
                        <a href="/" className="text-white flex items-center gap-1 text-lg">
                            <DoubleArrowOutlinedIcon />

                            Política de privacidad
                        </a>
                    </li>

                    <li>
                        <a href="/" className="text-white flex items-center gap-1 text-lg">
                            <DoubleArrowOutlinedIcon />

                            Términos y condiciones
                        </a>
                    </li>

                    <li>
                        <a href="/" className="text-white flex items-center gap-1 text-lg">
                            <DoubleArrowOutlinedIcon />

                            Cookies
                        </a>
                    </li>
                </ul>
            </section>

            {/* @ Company information */}
            <section className="w-1/3 flex flex-col items-end">
                <Icon 
                    color="text-white"
                />
            </section>
        </div>

        <div className="py-5 w-full bg-black/10">
            <p className="text-white text-center">
                { APP_NAME } &copy; { new Date().getFullYear() }
            </p>
        </div>
    </footer>
}