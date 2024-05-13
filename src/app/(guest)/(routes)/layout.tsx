import Contact from "@/components/guest/contact"
import Footer from "@/components/guest/footer"
import Navigator from "@/components/guest/navigator"
import { Fragment } from "react"

export default function Layout({
    children
} : {
    children: React.ReactNode
}) {
    return <Fragment>
        <Navigator />

        { children }

        <Contact />

        <Footer />
    </Fragment>
}