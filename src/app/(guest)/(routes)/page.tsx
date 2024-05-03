import Navigator from "@/components/guest/navigator";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import { Button } from "@nextui-org/react";
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';

export default function Page() {
    return <main className="flex flex-col items-center">
        <Navigator />

        {/* @ Waves wallpaper */}
        <div className="hidden sm:flex fixed flex-col top-0 -z-10 w-screen">
            <div className="h-48 md:h-60 lg:h-48 xl:h-48 block 2xl:h-32 bg-primary"></div>
          
            <img 
                src="/assets/svg/waves.svg"
                draggable="false"
            />
        </div>

        <div className="w-full sm:w-[80%] 2xl:w-2/3 relative mt-20 md:mt-32 bg-white md:px-10 overflow-visible flex justify-between">
            <section className="w-full xl:w-1/2 flex flex-col items-center xl:items-start gap-5">
                <h1 className="text-6xl md:text-7xl lg:text-8xl py-10 font-bold text-center xl:text-left break-keep">
                    { APP_NAME }, { APP_DESCRIPTION }
                </h1>

                <Button
                    size="lg"
                    className="rounded-md bg-purple-600 text-white flex items-center"
                >
                    <AlternateEmailOutlinedIcon />

                    Contactar ahora
                </Button>  
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
    </main>
}