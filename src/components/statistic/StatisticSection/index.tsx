import IconButton from "@/common/components/IconButton";
import useStatisticStore from "@/stores/statisticStore";
import { StatisticDateType } from "@/types";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BsBoxArrowUp } from "react-icons/bs";
import DailyStatistic from "../DailyStatistic";
import DateRangeStatistic from "../DateRangeStatistic";

const StatisticSection = () => {
  const statisticDateType = useStatisticStore(
    (state) => state.statisticDateType
  );

  return (
    <Box p="6">
      <Flex justifyContent="space-between">
        <Text>10-16 December 2019</Text>
        <IconButton
          variant="link"
          size="md"
          aria-label="home-button"
          icon={<BsBoxArrowUp />}
          color="primary.500"
        />
      </Flex>
      <Box>
        {statisticDateType === StatisticDateType.Daily ? (
          <DailyStatistic />
        ) : (
          <DateRangeStatistic />
        )}
      </Box>
    </Box>
  );
};

export default StatisticSection;
