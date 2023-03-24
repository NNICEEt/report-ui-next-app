import {
  Tabs as ChakraTabs,
  TabsProps as ChakraTabsProps,
  TabProps,
  Box,
} from "@chakra-ui/react";
import { Fragment } from "react";

import LineTab from "./LineTab";

const Tabs = ({ children, ...rest }: ChakraTabsProps) => {
  return (
    <ChakraTabs display="flex" {...rest}>
      {children}
    </ChakraTabs>
  );
};
//<Box w="1px" bgColor="blackAlpha.300" my="3.5" />
export { LineTab };

export default Tabs;
