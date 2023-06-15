import { Link } from "wouter"
import { usePathname } from "wouter/use-location"
import { Header, linkStyle } from "../style/style"

export default function() {
    document.title = "404 - Page Not Found"

    const path = usePathname()

    return <>
        <Header>404</Header>
        <Header size={2}>Seems like you are lost ?</Header>
        <Header size={1}>Page {path} does not exist - goto {<Link style={linkStyle} href="/">Home</Link>} </Header>
    </>
}
