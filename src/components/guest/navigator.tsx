export default function Navigator() {
    return <nav className="w-screen border-b flex justify-center py-5 text-md">
        <section className="flex items-center gap-5 w-1/3">
            <h1>
                <a href="/">Not a Dev</a>
            </h1>
        </section>

        <ul className="flex items-center justify-end gap-5 w-1/3">
            <li><a href="/">Home</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/register">Register</a></li>
        </ul>
    </nav>
}