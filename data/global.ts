export type Route = {
  title: string;
  path: string;
};

export type FooterLink = {
  name: string;
  link: string;
  icon?: string;
  leavesWebsite: boolean;
};

export type FooterCol = {
  title: string;
  links: FooterLink[];
};

export type FooterSupport = {
  buymeacoffee: string;
  paypal: string;
  message: string;
};

export type Footer = {
  columns: FooterCol[];
  support: FooterSupport;
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Designs",
    path: "/designs",
  },
];


export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Designs",
          link: "/designs",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/creativeframe",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/company/creativeframe",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Dribbble",
          link: "https://dribbble.com/creativeframe",
          icon: "/static/icons/dribbble-f.svg",
          leavesWebsite: true,
        },
        {
          name: "IndieHackers",
          link: "https://indiehackers.com/creativeframe",
          icon: "/static/icons/indiehackers-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:contact@creativeframe.io",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "creativeframe",
    paypal: "",
    message: "Thank you for supporting Creative Frame! 💙",
  },
};
