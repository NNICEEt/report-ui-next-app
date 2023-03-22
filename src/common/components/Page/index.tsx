import { Box, BoxProps } from "@chakra-ui/react";

const Page = ({ children, ...rest }: BoxProps) => {
  return (
    <Box minH="100vh" position="relative" overflowY="auto" {...rest}>
      {children}
    </Box>
  );
};

export default Page;
