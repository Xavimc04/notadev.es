import Icon from "../shared/icon";

export default function Navigator() {
    return <nav className="w-screen border-b flex justify-center items-center py-7 text-md">
        <section className="flex items-center gap-10 w-1/3">
            <Icon />
        
            <ul className="flex items-center gap-5">
                <li><a className="text-gray-400 hover:text-orange-500 transition-all" href="/">Home</a></li>
            </ul>
        </section>

        <section className="w-1/3 text-end"> 
            Other content
        </section>
    </nav>
}