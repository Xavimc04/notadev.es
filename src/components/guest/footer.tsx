import { APP_NAME } from "@/lib/constants";
import { services } from "../layouts/landing/services";
import { Service } from "@/_types";

export default function Footer() {
    return <footer className="w-full flex flex-col border-t">
        {/* @ Page links */}
        <div className="py-10 flex justify-center self-center flex-col md:flex-row w-[90%] sm:w-[50%] lg:w-2/3 xl:w-full gap-5 md:gap-0 xl:gap-3 flex-wrap">
            {/* @ Page icon and description */}
            <section className="xl:mr-32 p-4 flex flex-col gap-3 w-full md:w-1/2 xl:w-72">
                <img 
                    src="/assets/wevvi-large.png"
                    className="w-32"
                    draggable={ false }
                />

                <p className="text-md mt-2">
                    Experiencia, compromiso, calidad y profesionalidad. Eso es lo que prometemos en <span className="font-bold text-primary">{ APP_NAME }</span>.
                </p>
            </section>

            {/* @ Services */}
            <section className="p-4 flex flex-col gap-5 w-full md:w-1/2 xl:w-1/6">
                <h3 className="text-2xl uppercase font-extrabold">
                    Servicios
                </h3>

                <ul className="flex flex-col gap-3">
                    {
                        services.map((service: Service, index: number) => <li
                            key={ index }
                            className="text-md font-extralight"
                        >
                            { service.title }
                        </li>)
                    }
                </ul>
            </section>

            {/* @ Policies */}
            <section className="p-4 flex flex-col gap-5 w-full md:w-1/2 xl:w-1/6">
                <h3 className="text-2xl uppercase font-extrabold">
                    Políticas
                </h3>

                <ul className="flex flex-col gap-3">
                    <li className="text-md font-extralight">Política de privacidad</li>
                    <li className="text-md font-extralight">Términos de uso</li>
                    <li className="text-md font-extralight">Cookies</li>
                </ul>
            </section>

            {/* @ Sitemap */}
            <section className="p-4 flex flex-col gap-5 w-full md:w-1/2 xl:w-1/6">
                <h3 className="text-2xl uppercase font-extrabold">
                    Contáctanos
                </h3>

                <ul className="flex flex-col gap-3">
                    <li className="text-md font-extralight hover:text-primary">
                        <a href="mailto:info@wevvi.es">
                            Correo electrónico
                        </a>
                    </li>
                    
                    <li className="text-md font-extralight hover:text-primary">
                        <a href="https://www.instagram.com/wevvi.es" target="_blank">
                            Instagram
                        </a>
                    </li>

                    <li className="text-md font-extralight hover:text-primary">
                        <a href="https://www.threads.net/@wevvi.es" target="_blank">
                            Threads
                        </a>
                    </li>
                </ul>
            </section>
        </div>

        {/* @ Rights */}
        <section className="py-5 text-center border-t text-sm">
            © { new Date().getFullYear() } <span className="font-bold text-primary">{ APP_NAME }</span>. Todos los derechos reservados.
        </section>
    </footer>
}