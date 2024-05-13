import { Button, Input, Textarea } from "@nextui-org/react";

export default function Contact() {
    return <div className="flex justify-center relative overflow-hidden">
        <section className="w-[80%] md:w-1/2 lg:w-1/3 flex flex-col mb-5 md:mb-20 bg-white p-10 rounded border-primary gap-3 border">
            <h2 className="text-2xl md:text-5xl py-2 font-extrabold">
                Contáctanos
            </h2>

            <p className="font-extralight text-lg">
                Nuestros expertos están listos para ayudarte.
            </p>

            <form className="flex flex-col gap-5 mt-5">
                <Input type="email" variant="flat" size="sm" label="Dirección de correo" />

                <Input type="text" variant="flat" size="sm" label="Asunto" />

                <Textarea type="text" variant="flat" size="sm" label="Introduce el mensaje..." />

                <Button
                    size="lg"
                    radius="sm"
                    color="primary"
                >
                    Enviar
                </Button>
            </form>

            <p className="mt-3">
                O envíanos un correo a <a href="mailto:info@wevvi.es" className="text-primary">
                    info@wevvi.es
                </a>
            </p>
        </section>

        {/* @ Waves wallpaper */}
        <div className="absolute bottom-0 xl:-bottom-32 -z-10">
            <img 
                src="/assets/svg/waves.svg"
                draggable="false"
                className="select-none -z-10 rotate-180 w-screen"
            />

            <div className="h-48 md:h-60 lg:h-48 xl:h-48 block 2xl:h-5 bg-primary"></div>
        </div>
    </div>
}