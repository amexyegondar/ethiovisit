import dashboard from "../images/dashboard.png";
import memoryimg from "../images/damomemory.jpg";

import brand1 from "../images/brand1.png";
import brand2 from "../images/brand2.png";
import brand3 from "../images/brand3.png";
import brand4 from "../images/brand4.png";
import brand5 from "../images/brand5.png";

import place1 from "../images/Adwa.jpg";
import place2 from "../images/Afar.jpg";
import place3 from "../images/Axum.jpg";
import place4 from "../images/bole.jpeg";
import place5 from "../images/DebreDamo.jpg";
import place6 from "../images/Gondar.jpg";
import place7 from "../images/LakeTana.jpg";
import place8 from "../images/lalibela.jpg";
import place9 from "../images/Timket.jpg";
import place10 from "../images/TisAbay.jpg";

import standardicon from "../images/standardicon.png";
import preminumicon from "../images/preminum.png";
import checkbox from "../images/checkbox.svg";
import uncheckbox from "../images/uncheckbox.svg";

import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import youtube from '../images/youtube.svg';

import banner from '../images/banner.webp';

export const brands = [
  { iconSrc: brand1 },
  { iconSrc: brand2 },
  { iconSrc: brand3 },
  { iconSrc: brand4 },
  { iconSrc: brand5 },
];

export const navlinks = [
  { link: "Home", id: "home" },
  { link: "About", id: "about" },
  { link: "Explore", id: "explore" },
  { link: "Pricing", id: "pricing" },
  { link: "Contact", id: "contact" },
];

export const hero = {
  "title": "Historical country, Ethiopia",
  "subtitle": "Then, Go Explore",
  "text": "We provide you always your dream places. We always make our customer happy by proving many choices.",
  "btn1": "Get Started",
  "btn2": "Get Demo",
  "img": dashboard,
};

export const memory = {
  "title": "Sweet Memories",
  "subtitle": "Come To Life Again",
  "text": "What we have always taken care for 10 years is always prioritizing the comfort of our users. So, do not our quality.",
  "img": memoryimg,
  "experience": [
    { "number": "10", "title": "Year Experience" },
    { "number": "400", "title": "Year Collaboration" },
    { "number": "30k+", "title": "Happy Customer" },
  ],
};

export const placesAPI = [
  { "placeImg": place1, "location": "Adwa", "distance": "1 hour Flight" },
  { "placeImg": place2, "location": "Afar", "distance": "1.5 hour  Flight" },
  { "placeImg": place3, "location": "Axum oblesik", "distance": "2 hour Flight" },
  { "placeImg": place4, "location": "Bole", "distance": "1 hour Flight" },
  { "placeImg": place5, "location": "Debre Damo", "distance": "1hour Flight" },
  { "placeImg": place6, "location": "Fasiledes Castel", "distance": "1.6 hour Flight" },
  { "placeImg": place7, "location": "Lake Tana", "distance": "1 hour Flight" },
  { "placeImg": place8, "location": "Lalibela", "distance": "1.2 hour Flight" },
  { "placeImg": place9, "location": "Gondar Timket", "distance": "1 hour Flight" },
  { "placeImg": place10, "location": "Tis Abay", "distance": "1 hour Flight and 3 hour drive" },
];

export const pricingapi = {
  "title": "Choose The Plan That Suits You",
  "text": "Many attractive offers by becomming a premium member",
  "btn1": "Monthly",
  "btn2": "Yearly",
  "plans": [
    {
      "planicon": standardicon,
      "title": "Standard Membership",
      "text": "Suitable for all users",
      "plantype": "Free / Year",
      "plancontent": [
        { "iconbox": checkbox, "text": "Find Popular Destination" },
        { "iconbox": checkbox, "text": "Priority Booking Schedule" },
        { "iconbox": checkbox, "text": "Daily Destination News" },
        { "iconbox": uncheckbox, "text": "Invite Friends Feature" },
        { "iconbox": uncheckbox, "text": "Limited Travel Stats" },
        { "iconbox": uncheckbox, "text": "Invite Friends Feature" },
        { "iconbox": uncheckbox, "text": "No Ads & Tax" },
      ],
      "buttonText": "Get Free",
    },
    {
      "planicon": preminumicon,
      "title": "Preminum Membership",
      "text": "Suitable for enthusiast travelers",
      "plantype": "$60 / Year",
      "plancontent": [
        { "iconbox": checkbox, "text": "Find Popular Destination" },
        { "iconbox": checkbox, "text": "Priority Booking Schedule" },
        { "iconbox": checkbox, "text": "Daily Destination News" },
        { "iconbox": checkbox, "text": "Invite Friends Feature" },
        { "iconbox": checkbox, "text": "Advanced Travel Stats" },
        { "iconbox": checkbox, "text": "Invite Friends Feature" },
        { "iconbox": checkbox, "text": "No Ads & Tax" },
      ],
      "buttonText": "Get Started",
    },
  ],
};

export const bannerAPI = {
  "title": "The Greet Outdoors",
  "text": "Whislist Curated By Travigo.",
  "imgSrc": banner,
  "btnText": "Explore More"
}

export const footerAPI = {
  "titles": [ {"title": "About"},{"title": "Company"},{"title": "Support"} ],
  "links": [
    [
      {"link": "About US"},
      {"link": "Features"},
      {"link": "News"},
      {"link": "Menu"},
    ],
    [
      {"link": "Why EthioVisit?"},
      {"link": "Partner with Us"},
      {"link": "FAQ"},
      {"link": "Blog"},
    ],
    [
      {"link": "Account"},
      {"link": "Support Center"},
      {"link": "Feedback"},
      {"link": "Contact Us"},
      {"link": "Accesbility"},
    ],
  ],
  "sociallinks": [
    {"icon": facebook},{"icon": instagram},{"icon": twitter},{"icon": youtube},
  ]
};
