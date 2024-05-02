import Navigator from "@/components/guest/navigator";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";

export default function Page() {
    return <main className="flex flex-col items-center">
        <Navigator />

        {/* @ Waves wallpaper */}
        <img 
            src="/assets/svg/waves.svg"
            className="border border-red-500 fixed top-0 -z-10"
            draggable="false"
        />

        <div className="w-2/3 relative mt-32 bg-white px-10 overflow-visible">
            <h1 className="text-8xl py-10 font-bold w-1/2">
                { APP_NAME }, { APP_DESCRIPTION }
            </h1>

            {/* @ Top border */}
            <div className="h-0 absolute z-30 overflow-visible top-0 w-[110%] -left-[5%] border border-dashed border-black"></div>
        
            {/* @ Right border */}
            <div className="h-[120%] absolute z-30 overflow-visible w-0 left-0 -top-[10%] border border-dashed border-black"></div>

            {/* @ Left border */}
            <div className="h-[120%] absolute z-30 overflow-visible w-0 right-0 -top-[10%] border border-dashed border-black"></div>
        </div>
    </main>
}