
"use client";

import { Footer } from "flowbite-react";
import Link from "next/link";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

export function FooterComponent() {
    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Footer.Brand
                            href="https://flowbite.com"
                            src="https://flowbite.com/docs/images/logo.svg"
                            alt="Flowbite Logo"
                            name="Flowbite"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="Quick Links" />
                            <Footer.LinkGroup col>
                                <Footer.Link as={Link} href="/about">About</Footer.Link>
                                <Footer.Link as={Link} href="/projects">Projects</Footer.Link>
                                <Footer.Link as={Link} href="/resume">Resume</Footer.Link>
                                <Footer.Link as={Link} href="/contact">Contact</Footer.Link>

                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>

                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Vignesh Ramesh" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="https://www.linkedin.com/in/techievignesh" icon={BsLinkedin} />
                        <Footer.Icon href="https://www.github.com/vramazing" icon={BsGithub} />
                    </div>
                </div>
            </div>
        </Footer>
    );
}
