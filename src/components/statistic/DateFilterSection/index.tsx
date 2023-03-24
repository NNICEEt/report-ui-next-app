import { Box, Button, Center, Flex } from "@chakra-ui/react";
import { ImStatsBars } from "react-icons/im";
import { GrUnorderedList } from "react-icons/gr";
import { BsArrowDown } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import Tabs, { LineTab } from "@/common/components/Tabs";

import * as locales from "./locales";
import useStatisticStore from "@/stores/statisticStore";
import { StatisticDateType } from "@/types";

const DateFilterSection = () => {
  const statisticDateType = useStatisticStore(
    (state) => state.statisticDateType
  );

  const setStatisticDateType = useStatisticStore(
    (state) => state.setStatisticDateType
  );

  const dateFilterTabs = [locales.DAILY, locales.WEEKLY, locales.MONTHLY];
  const displayTabs = [
    { icon: <ImStatsBars /> },
    { icon: <GrUnorderedList /> },
  ];

  console.log(statisticDateType);
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
          index={statisticDateType}
          onChange={(e) => {
            setStatisticDateType(e);
          }}
        >
          {dateFilterTabs.map((tab, index) => (
            <LineTab key={index}>{tab}</LineTab>
          ))}
        </Tabs>
        <Flex color="primary.500">
          <Tabs px="2">
            {displayTabs.map((tab, index) => (
              <LineTab
                key={index}
                px="3"
                fontSize="18px"
                isDisabled={
                  index === 1 && statisticDateType === StatisticDateType.Daily
                }
              >
                {tab.icon}
              </LineTab>
            ))}
          </Tabs>
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
