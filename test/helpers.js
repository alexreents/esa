const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - Math.random() * y)
    .toString(36)
    .slice(1);
};

const pages = [
  {
    route: "/",
    title: "ESA",
    heading: "ABOUT THIS SITE",
  },
  {
    route: "/about",
    title: "About | ESA",
    heading: "ABOUT US",
  },
  {
    route: "/initiatives",
    title: "Initiatives | ESA",
    heading: "Initiatives",
  },
  {
    route: "/articles",
    title: "Articles | ESA",
    heading: "ARTICLES",
  },
  {
    route: "/research",
    title: "Research | ESA",
    heading: "RESEARCH",
  },
  {
    route: "/contact",
    title: "Get Involved | ESA",
    heading: "Get Inolved",
  },
];

export { pages, randomString };
