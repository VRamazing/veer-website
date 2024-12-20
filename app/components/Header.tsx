
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function Header() {
    return (
        <Navbar fluid rounded>
            <NavbarBrand as={Link} href="https://flowbite-react.com">
                <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Vignesh Ramesh Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Vignesh Ramesh</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink as={Link} href="/about" active>
                    About
                </NavbarLink>
                <NavbarLink href="#">Projects</NavbarLink>
                <NavbarLink href="#">Resume</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
