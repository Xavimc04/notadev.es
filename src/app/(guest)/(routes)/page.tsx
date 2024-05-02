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

        <div className="w-2/3 mt-20">
            <h1 className="text-8xl py-10 font-bold w-1/2">
                { APP_NAME }, { APP_DESCRIPTION }
            </h1>
        </div>
    </main>
}