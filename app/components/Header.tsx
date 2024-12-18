
import { Button, DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function Header() {
    return (
        <Navbar fluid rounded>
            <NavbarBrand href="https://flowbite-react.com">
                {/* <img src="#" className="mr-3 h-6 sm:h-9" alt="VR Logo" /> */}
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Vignesh Ramesh</span>
            </NavbarBrand>
            <div className="flex md:order-2">
                <Button>Login</Button>
                <NavbarToggle />
                <DarkThemeToggle className="ml-2" />

            </div>
            <NavbarCollapse>
                <NavbarLink href="#" active>
                    Home
                </NavbarLink>
                <NavbarLink href="#">About</NavbarLink>
                <NavbarLink href="#">Projects</NavbarLink>
                <NavbarLink href="#">Experience</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
