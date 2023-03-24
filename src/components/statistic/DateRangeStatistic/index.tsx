import { Box, Tab, Tabs, Text } from "@chakra-ui/react";

import { AiOutlineGift, AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

import * as appLocales from "@/locales";
import LineChart from "@/common/components/LineChart";
import useStatisticData from "@/hooks/statistic/useStatisticData";
import useStatisticStore from "@/stores/statisticStore";
import StatisticRecord from "../StatisticRecord";
import { StatisticDisplayType } from "@/types";

const DateRangeStatistic = () => {
  const { data, labels } = useStatisticData();

  const statisticDisplayType = useStatisticStore(
    (state) => state.statisticDisplayType
  );
  const setStatisticType = useStatisticStore((state) => state.setStatisticType);

  const handleTabsChange = (index: number) => {
    setStatisticType(index);
  };

  const items = [
    {
      title: appLocales.LIKE,
      icon: <AiOutlineLike />,
    },
    {
      title: appLocales.COMMENT,
      icon: <FaRegComment />,
    },
    {
      title: appLocales.POINT,
      icon: <AiOutlineGift />,
    },
    {
      title: appLocales.DIAMOND,
      icon: <IoDiamondOutline />,
    },
  ];

  return (
    <Box mt="5">
      <Tabs
        variant="unstyled"
        display="flex"
        gap="1"
        onChange={handleTabsChange}
      >
        {items.map((item, index) => (
          //TODO: เพิ่ม ButtonTab ที่ Tabs ใน common components สำหรับ reuse
          <Tab
            flex="1"
            key={index}
            px="2"
            py="1"
            color="primary.500"
            border="1px"
            borderColor="primary.500"
            rounded="full"
            fontSize="14px"
            _selected={{ color: "white", bgColor: "primary.500" }}
          >
            {item.icon}
            {item.title}
          </Tab>
        ))}
      </Tabs>
      {statisticDisplayType === StatisticDisplayType.Chart && (
        <Box mt="8" mx="auto" maxW="720px">
          <LineChart labels={labels} data={data} />
        </Box>
      )}
      {statisticDisplayType === StatisticDisplayType.Record && (
        <StatisticRecord />
      )}
    </Box>
  );
};

export default DateRangeStatistic;
