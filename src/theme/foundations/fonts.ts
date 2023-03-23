import { Kanit } from "next/font/google";

const kanitFont = Kanit({
  weight: ["400"],
  subsets: ["latin"],
});

const fonts = {
  heading: kanitFont.style.fontFamily,
  body: kanitFont.style.fontFamily,
};

export default fonts;
