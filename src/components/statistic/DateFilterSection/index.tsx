import { Box, Button, Center, Flex } from "@chakra-ui/react";
import { ImStatsBars } from "react-icons/im";
import { GrUnorderedList } from "react-icons/gr";
import { BsArrowDown } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import Tabs from "@/common/components/Tabs";

import * as locales from "./locales";

const DateFilterSection = () => {
  const dateFilterTabs = [locales.DAILY, locales.WEEKLY, locales.MONTHLY];
  const displayTabs = [<ImStatsBars key="1" />, <GrUnorderedList key="2" />];

  return (
    <Box
      p="2"
      borderBottom="1px"
      borderBottomColor="blackAlpha.300"
      position="relative"
    >
      <Flex justifyContent="space-between">
        <Tabs
          flex="0.7"
          mx="3"
          tabItems={dateFilterTabs}
          tabProps={{ _selected: { color: "black" } }}
          hasUnderline
        />
        <Flex color="primary.500">
          <Tabs
            px="2"
            tabItems={displayTabs}
            tabProps={{ fontSize: "18px", px: "3" }}
          />
        </Flex>
      </Flex>
      <Flex my="1.5" alignItems="end">
        <Center flex="1" h="50px" bgColor="primary.50">
          **Calendar**
        </Center>
        <Button
          colorScheme="primary"
          variant="ghost"
          leftIcon={<BsArrowDown />}
          size="sm"
          color="primary.400"
        >
          {locales.TODAY}
        </Button>
      </Flex>
      <Box
        as="button"
        p="1"
        bgColor="white"
        border="1px"
        borderColor="blackAlpha.500"
        rounded="full"
        fontSize="12px"
        position="absolute"
        left="50%"
        bottom="0"
        transform="translate(-50%, 50%)"
        _hover={{ bgColor: "gray.50" }}
      >
        <AiOutlineDown />
      </Box>
    </Box>
  );
};

export default DateFilterSection;
