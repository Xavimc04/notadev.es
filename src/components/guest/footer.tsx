import { APP_NAME } from "@/lib/constants";
import { services } from "../layouts/landing/services";
import { Service } from "@/_types";

export default function Footer() {
    return <footer className="w-full flex flex-col">
        {/* @ Page links */}
        <div className="border-t py-10 flex justify-center gap-3">
            {/* @ Page icon and description */}
            <section className="w-72 mr-32 flex flex-col gap-3">
                <img 
                    src="/assets/wevvi-large.png"
                    className="w-32"
                />

                <p className="text-md mt-2">
                    { APP_NAME } es una empresa de desarrollo de software ubicada en Barcelona, España. 
                </p>
            </section>

            {/* @ Services */}
            <section className="flex flex-col gap-5 w-1/6">
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
            <section className="flex flex-col gap-5 w-1/6">
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
            <section className="flex flex-col gap-5 w-1/6">
                <h3 className="text-2xl uppercase font-extrabold">
                    Nuestras redes
                </h3>

                <ul className="flex flex-col gap-3">
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