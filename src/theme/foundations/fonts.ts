import { Roboto } from "next/font/google";

const robotoFont = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

const fonts = {
  heading: robotoFont.style.fontFamily,
  body: robotoFont.style.fontFamily,
};

export default fonts;
