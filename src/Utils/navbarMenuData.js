export const navbarMenuData = [
  {
    id: 1,
    text: "HOME",
    link: "/",
    selected: null,
  },
  {
    id: 2,
    text: "ABOUT",
    link: "/about-cipoc",
    selected: null,
  },
  {
    id: 3,
    text: "PAST CONFERENCES",
    link: "/past-conferences",
    // selected: [
    //   { text: "Organizing Committee", link: "/organizing-committee" },
    //   { text: "Steering Committee", link: "/steering-committee" },
    // ],
  },
  {
    id: 4,
    text: "PAPER SUBMISSION",
    link: "/paper-submission",
    selected: [
       { text: "Call for Papers", link: "/call-for-papers" },
    //   // { text: "Call for Sponsors", link: "call-for-sponsors" },
    //   { text: "Special Sessions", link: "/special-sessions" },
    //   { text: "Call for Speakers", link: "/call-for-speakers" },
    //   { text: "Call for Tutorial", link: "/call-for-tutorial" },
     ],
  },
  {
    id: 5,
    text: "PROGRAM",
    link: "/program",
    // selected: [
    //   { text: "Program", link: "/program" },
    //   { text: "Important Dates", link: "/important-dates" },
    //   { text: "Plenary & Keynote Speakers", link: "/plenary-keynote-speakers" },
    //   { text: "Invited Speakers", link: "/invited-speakers" },
    //   { text: "Tutorial", link: "/tutorial" },
    // ],
  },
  {
    id: 6,
    text: "REGISTRATION",
    link: "/registration",
    // selected: [
    //   { text: "Visa Letter Request", link: "/visa-letter-request" },
    //   { text: "Awards", link: "/awards" },
    // ],
  },
  {
    id: 7,
    text: "VENUE/TRAVEL",
    selected: [
      { text: "Hotel", link: "/hotel" },
      { text: "Tour", link: "/tour" },
    ],
  },
];
