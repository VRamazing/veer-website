"use client"

import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import vrlogo from "../images/vrlogo3.png"
import Image from "next/image";
import { usePathname } from "next/navigation"

export function Header() {
    const path = usePathname();
    return (
        <Navbar fluid className="px-5 py-2">
            <NavbarBrand as={Link} href="#">
                <Image src={vrlogo} width={40} className="mr-3 h-6 sm:h-9" alt="Vignesh Ramesh Logo" />
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink as={Link} href="/" active={!!(path.length === 1)}> About </NavbarLink>
                <NavbarLink href="/projects" active={!!path.match("/project")}> Projects </NavbarLink>
                <NavbarLink target="_blank" href="https://drive.google.com/file/d/1W_CR2QUOArI1VeLsSLbvFlmp8gcyLz-0/view?usp=drive_link"> Resume </NavbarLink>
                <NavbarLink href="/contact" active={!!path.match("/contact")}> Contact </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
