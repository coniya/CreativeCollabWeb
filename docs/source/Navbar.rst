React Navigation Bar Component
=============================

This component represents the navigation bar for your React application.

Import Dependencies
--------------------

.. code:: jsx

    import { Link, useMatch, useResolvedPath } from "react-router-dom"

Define NavBar Component
-----------------------

.. code:: jsx

    export default function NavBar() {
        return (
            <nav className="nav">
                <Link to="/" className="site-title">CreativeCollab</Link>
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

Define CustomLink Component
---------------------------

.. code:: jsx

    function CustomLink({ to, children, ...props }) {
        // Use the `useResolvedPath` and `useMatch` hooks for navigation
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })

        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>{children}</Link>
            </li>
        )
    }

This reStructuredText file provides documentation for the NavBar and CustomLink components in your React application. Feel free to adjust or add more comments based on your specific needs.
