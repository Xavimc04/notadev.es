import { Button } from "@nextui-org/react";
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import { APP_NAME } from "@/lib/constants";

export default function Newsletter() {
    return <section className="w-[80%] lg:w-2/3 border border-primary relative rounded-lg flex flex-col items-center gap-5 py-10 mb-20">
        <h2 className="font-extrabold text-4xl lg:text-5xl w-2/3 lg:w-full py-2 text-center overflow-hidden">
            ¡Suscríbete a nuestro newsletter!
        </h2>

        <p className="lg:w-2/3 text-center px-10 lg:px-0 text-lg">
            Obtén consejos, tutoriales y recursos exclusivos directamente en tu bandeja de entrada. Únete a nuestra comunidad de apasionados por el desarrollo web y potencia tus habilidades. ¡No te pierdas nada en { APP_NAME }!
        </p>

        {/* @ Form */}
        <form 
            className="flex items-center gap-3 w-[80%] md:w-auto"
        >
            <input 
                type="email"
                placeholder="Correo electrónico"
                className="py-3 px-4 border rounded-lg flex-1 md:flex-none md:w-80 focus:outline-none focus:border-transparent"
            />

            <Button
                size="lg"
                isIconOnly
                className="rounded-md bg-red-500 text-white flex items-center"
            >
                <MarkEmailUnreadOutlinedIcon />
            </Button>
        </form>

        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_30%,#ffb500_100%)]"></div>
    </section>
}