import type { SvgComponent } from "astro/types";

import GithubIcon from "@/assets/github.svg";
import LinkedinIcon from "@/assets/linkedin.svg";
import InstagramIcon from "@/assets/instagram.svg";
import MailIcon from "@/assets/mail.svg";

export enum SocialLinkType {
  Github = "Github",
  Linkedin = "Linkedin",
  Instagram = "Instagram",
  Email = "Email",
}

export interface SocialLink {
  url: string;
  label: string;
  icon: SvgComponent;
}

export const SocialLinks: Record<SocialLinkType, SocialLink> = {
  [SocialLinkType.Github]: {
    url: "https://github.com/timhugh",
    label: "GitHub",
    icon: GithubIcon,
  },
  [SocialLinkType.Linkedin]: {
    url: "https://linkedin.com/in/timheuett/",
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
  [SocialLinkType.Instagram]: {
    url: "https://instagram.com/timheuett/",
    label: "Instagram",
    icon: InstagramIcon,
  },
  [SocialLinkType.Email]: {
    url: "mailto:me@timheuett.com",
    label: "Email",
    icon: MailIcon,
  },
};
