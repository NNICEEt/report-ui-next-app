import {
  IconButton as ChakraIconButton,
  IconButtonProps,
} from "@chakra-ui/react";

const IconButton = (props: IconButtonProps) => {
  return (
    <ChakraIconButton
      variant="ghost"
      size="lg"
      color="white"
      colorScheme="whiteAlpha"
      rounded="full"
      {...props}
    />
  );
};

export default IconButton;
