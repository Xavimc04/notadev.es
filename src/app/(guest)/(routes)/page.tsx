import Navigator from "@/components/guest/navigator";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import { Button } from "@nextui-org/react";
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined';
import Differences from "@/components/layouts/landing/differences";

export default function Page() {
    return <main className="flex flex-col items-center">
        <Navigator />

        {/* @ Waves wallpaper */}
        <div className="hidden sm:flex absolute flex-col top-0 -z-10 w-screen">
            <div className="h-48 md:h-60 lg:h-48 xl:h-48 block 2xl:h-32 bg-primary"></div>
          
            <img 
                src="/assets/svg/waves.svg"
                draggable="false"
                className="select-none -z-10"
            />
        </div>

        <div className="w-full sm:w-[80%] 2xl:w-2/3 mb-32 relative mt-20 md:mt-32 bg-white md:px-10 overflow-visible items-center flex justify-between">
            <section className="w-full xl:w-1/2 flex flex-col items-center xl:items-start gap-5">
                <h1 className="text-6xl md:text-7xl lg:text-8xl py-10 font-bold text-center xl:text-left break-keep">
                    { APP_NAME }, { APP_DESCRIPTION }
                </h1>

                <p className="text-center xl:text-left px-10 xl:px-0">
                    Ubicados en Barcelona, más de 4 años de experiencia y más de 100 proyectos completados con éxito. Nuestro equipo de expertos en desarrollo de software está comprometido en brindar soluciones innovadoras y de alta calidad para nuestros clientes. 
                </p>

                <div className="flex -space-x-4 rtl:space-x-reverse mt-5">
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="" />
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="" />
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="" />
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="" />
                    <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
                </div>

                <div className="flex items-center gap-4">
                    <Button
                        size="lg"
                        className="rounded-md bg-green-500 text-white flex items-center mt-5"
                    >
                        Contactar ahora
                    </Button> 

                    <Button
                        size="lg"
                        className="rounded-md border-2 border-gray-400 bg-transparent text-gray-400 flex items-center mt-5"
                    >
                        Ver más
                    </Button> 
                </div> 
            </section>

            <img 
                src="https://cupocode.com/wp-content/uploads/2022/09/web_d_gif.gif"
                className="hidden xl:block w-1/2 py-10"
                draggable="false"
            />

            {/* @ Top border */}
            <div className="hidden md:block h-0 absolute z-30 overflow-visible top-0 w-[110%] -left-[5%] border border-dashed border-black"></div>
        
            {/* @ Left border */}
            <div className="hidden md:block h-[120%] absolute z-30 overflow-visible w-0 left-0 -top-[10%] border border-dashed border-black"></div>

            {/* @ Right border */}
            <div className="hidden md:block h-[120%] absolute z-30 overflow-visible w-0 right-0 -top-[10%] border border-dashed border-black"></div>
        </div>

        {/* @ Difference */}
        <section className="w-full xl:w-2/3 mb-20 flex flex-col gap-16">
            <div className="flex flex-col items-center gap-4"> 
                <h2 className="font-extrabold py-2 w-[80%] lg:w-1/2 text-center text-6xl overflow-hidden">
                    ¿En que nos diferenciamos?
                </h2>

                <p className="text-xl w-[80%] md:w-1/2 text-center">
                    Nuestro equipo de expertos en desarrollo de software está comprometido en brindar soluciones innovadoras y de alta calidad para nuestros clientes.
                </p>
            </div>

            {/* @ Steps */}
            <Differences />
        </section>

        {/* @ Contact button */}
        <section className="w-2/3 border border-primary relative rounded-lg flex flex-col items-center gap-7 py-10 mb-20">
            <h2 className="font-extrabold text-5xl w-full py-2 text-center overflow-hidden">
                ¿Aún tienes dudas?
            </h2>

            <p className="w-2/3 text-center">
                Entendemos que tomar la decisión adecuada puede ser difícil. Estamos aquí para ayudarte a aclarar cualquier pregunta o inquietud que puedas tener. ¡Déjanos tu correo y nos pondremos en contacto contigo lo más pronto posible! Nuestro equipo está comprometido en brindarte la información que necesitas para tomar la mejor decisión para tus proyectos de desarrollo. ¡No dudes en contactarnos!
            </p>

            <div className="flex items-center gap-3">
                <input 
                    type="email"
                    placeholder="Correo electrónico"
                    className="py-3 px-4 border rounded-lg w-80 focus:outline-none focus:border-transparent"
                />

                <Button
                    size="lg"
                    isIconOnly
                    className="rounded-md bg-indigo-500 text-white flex items-center"
                >
                    <MarkEmailUnreadOutlinedIcon />
                </Button>
            </div>

            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#fff_30%,#ffb500_100%)]"></div>
        </section>
    </main>
}