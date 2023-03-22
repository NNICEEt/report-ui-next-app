import { StyleProps } from "@chakra-ui/react";

interface GlobalStyleProps {
  global: Record<string, StyleProps>;
}

const styles = {
  global: {
    body: {
      bg: "white",
      minHeight: "100vh",
    },
  },
} as GlobalStyleProps;

export default styles;
