import logo from "./logo.svg";
import logo_icon from "./logo_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import star_icon from "./star_icon.svg";
import rating_star from "./rating_star.svg";
import sample_img_1 from "./sample_img_1.png";
import sample_img_2 from "./sample_img_2.png";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import people_5 from "./people-5.png";
import people_1 from "./people-1.png";
import people_2 from "./people-2.png";
import step_icon_1 from "./step_icon_1.svg";
import step_icon_2 from "./step_icon_2.svg";
import step_icon_3 from "./step_icon_3.svg";
import email_icon from "./email_icon.svg";
import lock_icon from "./lock_icon.svg";
import cross_icon from "./cross_icon.svg";
import star_group from "./star_group.png";
import credit_star from "./credit_star.svg";
import profile_icon from "./profile_icon.png";

export const assets = {
  logo,
  logo_icon,
  facebook_icon,
  instagram_icon,
  twitter_icon,
  star_icon,
  rating_star,
  sample_img_1,
  sample_img_2,
  email_icon,
  lock_icon,
  cross_icon,
  star_group,
  credit_star,
  profile_icon,
};

export const stepsData = [
  {
    title: "Describe Your Vision",
    description:
      "Type a phrase, sentence, or paragraph that describes the image you want to create.",
    icon: step_icon_1,
  },
  {
    title: "Watch the Magic",
    description:
      "Our AI engine swiftly transforms your text into a high-quality, unique image within seconds.",
    icon: step_icon_2,
  },
  {
    title: "Download & Share",
    description:
      "Instantly download your creation or share it directly from our platform. Let your imagination flow and watch it come to life effortlessly.",
    icon: step_icon_3,
  },
];
export const testimonialsData = [
  {
    image: profile_img_1,
    name: "Manish Mehta",
    role: "Graphic Designer",
    stars: 5,
    text: `Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.`,
  },
  {
    image: people_5,
    name: "Anil Nair",
    role: "TCS",
    stars: 4,
    text: `Professional work! Delivered on time, with a polished design and smooth user experience.Efficient and detail-oriented.`,
  },
  {
    image: people_2,
    name: "Arjun Sharma",
    role: " Mahinda",
    stars: 5,
    text: `Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.`,
  },
  {
    image: people_1,
    name: "Ravi Patel",
    role: " Self Business",
    stars: 4,
    text: `Exceptional web development! Delivered a seamless, responsive site with clean code and great UX. Efficient and detail-oriented.`,
  },
];
export const plans = [
  {
    id: "Basic Plan",
    desc: "Good for beginners and light usage.",
    price: 9.99,
    credits: "10 credits",
  
  },
  {
    id: "Pro Plan",
    desc: "Perfect for regular users.",
    price: 19.99,
    credits: "30 credits",
  },
  {
    id: "Premium Plan",
    desc: "Best for professionals and teams.",
    price: 49.99,
    credits: "100 credits",
  },
];

export default testimonialsData;
