export enum SocialLinkType {
  Github = "Github",
  Linkedin = "Linkedin",
  Instagram = "Instagram",
  Email = "Email",
}

export interface SocialLink {
  url: string;
  icon: string;
  label: string;
}

export const SocialLinks: Record<SocialLinkType, SocialLink> = {
  [SocialLinkType.Github]: {
    url: "https://github.com/timhugh",
    icon: "/github.svg",
    label: "GitHub",
  },
  [SocialLinkType.Linkedin]: {
    url: "https://linkedin.com/in/timheuett/",
    icon: "/linkedin.svg",
    label: "LinkedIn",
  },
  [SocialLinkType.Instagram]: {
    url: "https://instagram.com/timheuett/",
    icon: "/instagram.svg",
    label: "Instagram",
  },
  [SocialLinkType.Email]: {
    url: "mailto:me@timheuett.com",
    icon: "/mail.svg",
    label: "Email",
  },
};
