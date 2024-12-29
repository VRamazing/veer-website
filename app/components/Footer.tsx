
import { Footer } from "flowbite-react";
import Link from "next/link";
import logo from "../images/vrlogo3.png"
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import Image from "next/image";

export function FooterComponent() {
    return (
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <Image src={logo} alt={"vignesh ramesh logo"} height="100" />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="Quick Navigation" />
                            <Footer.LinkGroup col>
                                <Footer.Link as={Link} href="/">About</Footer.Link>
                                <Footer.Link as={Link} href="/projects">Projects</Footer.Link>
                                <Footer.Link as={Link} target="_blank" href="/resume">Resume</Footer.Link>
                                <Footer.Link as={Link} href="/contact">Contact</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Other Ventures" />
                            <Footer.LinkGroup col>
                                <Footer.Link target="_blank" href="https://yogamindmastery.com">Yoga Mind Mastery</Footer.Link>
                                <Footer.Link target="_blank" href="https://igameproject.github.io/">Indian Game Project</Footer.Link>
                                <Footer.Link target="_blank" href="https://techievignesh.itch.io/">Veer Game Dev</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Vignesh Ramesh" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon target="_blank" href="https://www.linkedin.com/in/techievignesh" icon={BsLinkedin} />
                        <Footer.Icon target="_blank" href="https://www.github.com/vramazing" icon={BsGithub} />
                        <Footer.Icon target="_blank" href="https://www.x.com/veerconfidence" icon={BsTwitter} />

                    </div>
                </div>
            </div>
        </Footer>
    );
}
