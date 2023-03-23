import {
  Tabs as ChakraTabs,
  TabsProps as ChakraTabsProps,
  TabProps,
  Box,
} from "@chakra-ui/react";
import { Fragment } from "react";

import Tab from "./Tab";

interface TabsProps extends Omit<ChakraTabsProps, "children"> {
  tabItems: React.ReactNode[];
  hasUnderline?: boolean;
  hasDivider?: boolean;
  tabProps?: TabProps;
}

const Tabs = ({
  tabItems,
  hasUnderline,
  hasDivider,
  tabProps,
  ...rest
}: TabsProps) => {
  return (
    <ChakraTabs
      colorScheme="primary"
      borderBottom={hasUnderline ? "1px" : "none"}
      borderColor="blackAlpha.300"
      display="flex"
      {...rest}
    >
      {tabItems.map((item, index) => (
        <Fragment key={index}>
          <Tab hasUnderline={hasUnderline} {...tabProps}>
            {item}
          </Tab>
          {hasDivider && index < tabItems.length - 1 && (
            <Box w="1px" bgColor="blackAlpha.300" my="3.5" />
          )}
        </Fragment>
      ))}
    </ChakraTabs>
  );
};

export default Tabs;
