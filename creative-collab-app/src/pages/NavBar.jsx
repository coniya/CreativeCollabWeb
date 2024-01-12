import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar(){
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Creative Collab</Link>
        <ul>
            <CustomLink to="/forums">Forums</CustomLink>
            <CustomLink to="/events">Events</CustomLink>
            <CustomLink to="/artHelp">Art Help</CustomLink>
            <CustomLink to="/buy-sell">Buy/Sell</CustomLink>
            <CustomLink to="/live">Live</CustomLink>
            <CustomLink to="/post">Post</CustomLink>
            <CustomLink to="/notifications">Collab Alerts</CustomLink>
            <CustomLink to="/profile">Profile</CustomLink>
            <CustomLink to="/search">Search</CustomLink>
        </ul>
    </nav>
    )

}
function CustomLink({ to, children, ...props }) {
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return(
        <li className={isActive ? "active":""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}