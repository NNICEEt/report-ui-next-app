import { extendTheme } from "@chakra-ui/react";

import colors from "./foundations/colors";
import fonts from "./foundations/fonts";
import styles from "./styles";

const overrides = {
  styles,
  colors,
  fonts,
};

export default extendTheme(overrides);
