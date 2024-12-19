import React from "react";
import { Mail, Instagram, Linkedin, GitHub } from "react-feather";

const socials = [
    { href: "//github.com/timhugh", icon: <GitHub size={16}/> },
    { href: "//linkedin.com/in/timheuett", icon: <Linkedin size={16}/> },
    { href: "//instagram.com/timhugh", icon: <Instagram size={16}/> },
    { href: "mailto:info@timheuett.com", icon: <Mail size={16}/> },
];

    export default function Header() {
        return (
            <header>

                <div className="flex flex-col items-center md:items-end">
                    <h1 className="text-4xl font-thin uppercase mb-6 md:mb-4 text-center">Tim Heuett</h1>
                    <ul className="list-none flex flex-row items-center gap-2 md:mr-1">
                        {
                            socials.map(({ href, icon }, index) => (
                                <li key={index} className="text-background bg-foreground hover:bg-primary p-1.5 rounded-full">
                                    <a href={href}>{icon}</a>
                                </li>))
                        }
                    </ul>
                </div>
            </header>
        );
    }
