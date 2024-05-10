import Navigator from "@/components/guest/navigator";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import { Button } from "@nextui-org/react";
import Differences from "@/components/layouts/landing/differences";
import Articles from "@/components/layouts/landing/articles";
import Services from "@/components/layouts/landing/services";
import Footer from "@/components/guest/footer";

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

        <div className="w-full sm:w-[80%] 2xl:w-2/3 mb-60 relative mt-20 md:mt-32 bg-white md:px-10 overflow-visible items-center flex justify-between">
            <section className="w-full xl:w-1/2 flex flex-col items-center xl:items-start gap-5">
                <h1 className="text-6xl md:text-7xl lg:text-8xl py-10 font-bold text-center xl:text-left break-keep">
                    { APP_NAME }, { APP_DESCRIPTION }
                </h1>

                <p className="text-center xl:text-left px-10 xl:px-0">
                    Ubicados en Barcelona, más de 4 años de experiencia y más de 100 proyectos completados con éxito. Nuestro equipo de expertos en desarrollo de software está comprometido en brindar soluciones innovadoras y de alta calidad para nuestros clientes. 
                </p>

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
                src="/assets/gif/portrait-website.gif"
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
                <h2 className="font-extrabold py-2 w-[80%] lg:w-1/2 text-center text-4xl lg:text-6xl overflow-hidden">
                    ¿En que nos diferenciamos?
                </h2>

                <p className="text-xl w-[80%] md:w-1/2 text-center">
                    Nuestro equipo de expertos en desarrollo de software está comprometido en brindar soluciones innovadoras y de alta calidad para nuestros clientes.
                </p>
            </div>

            {/* @ Steps */}
            <Differences />
        </section>

        {/* @ Services we provide */}
        <section className="w-full bg-gray-100/60 relative mb-20 py-32 overflow-visible flex flex-col lg:flex-row items-center justify-center gap-20">
            {/* @ Grid background */}
            <div className="absolute bottom-0 opacity-30 z-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            {/* @ Section image */}
            <div className="relative overflow-visible h-full w-[80%] lg:w-1/2 2xl:w-1/3 flex justify-center 2xl:justify-start"> 
                <img
                    src="https://cdn.icon-icons.com/icons2/2562/PNG/512/ui_ux_web_design_multidevice_responsive_layout_icon_153182.png"
                    className="w-2/3 md:h-[350px] md:w-[350px] xl:h-[500px] xl:w-[520px]"
                    draggable="false"
                />
            </div>

            {/* @ Services */}
            <div className="w-[80%] md:w-1/2 2xl:w-1/4 h-full flex flex-col gap-3 justify-center">
                <h2 className="text-5xl py-2 font-extrabold">
                    Servicios que ofrecemos
                </h2>

                <p className="text-lg">
                    Profesionales en lo nuestro, ofrecemos una amplia gama de servicios de desarrollo de software y diseño web.
                </p>

                <Services />
            </div>
        </section>

        {/* @ Visit out blog */}
        <section className="w-full xl:w-2/3 mb-20 flex flex-col gap-5 items-center relative">
            <h4 className="bg-red-500/30 px-5 py-2 text-sm rounded-full border border-red-500 text-red-500">
                📌 Visita nuestro blog 📌
            </h4>

            <h2 className="font-extrabold py-2 w-[80%] lg:w-1/2 text-center text-4xl lg:text-6xl overflow-hidden">
                Artículos recientes
            </h2>

            {/* @ Last articles */}
            <Articles />
        </section>

        <Footer />
    </main>
}