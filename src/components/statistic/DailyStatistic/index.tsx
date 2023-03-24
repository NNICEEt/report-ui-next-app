import { Box, Card, Flex, Grid, Text } from "@chakra-ui/react";

import { AiOutlineLike, AiOutlineGift } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

import * as appLocales from "@/locales";
import * as locales from "./locales";
import useStatisticData from "@/hooks/statistic/useStatisticData";

const DailyStatistic = () => {
  const { data } = useStatisticData();

  const items = [
    {
      title: appLocales.LIKE,
      icon: <AiOutlineLike />,
      value: data[0],
      unit: locales.LIKES,
    },
    {
      title: appLocales.COMMENT,
      icon: <FaRegComment />,
      value: data[1],
      unit: locales.COMMENTS,
    },
    {
      title: appLocales.POINT,
      icon: <AiOutlineGift />,
      value: data[2],
      unit: appLocales.POINT,
    },
    {
      title: appLocales.DIAMOND,
      icon: <IoDiamondOutline />,
      value: data[3],
      unit: appLocales.DIAMOND,
    },
  ];

  return (
    <Grid
      mt="5"
      templateColumns="1fr 1fr"
      templateRows="repeat(2, 160px)"
      gap="3"
    >
      {items.map((item, index) => (
        <Card key={index} p="4" variant="outline">
          <Box textAlign="center">
            <Box color="primary.500" fontSize="18px">
              <Flex justifyContent="center" alignItems="center">
                <Box px="1" pb="1">
                  {item.icon}
                </Box>
                {item.title}
              </Flex>
            </Box>
            <Text mt="4" fontSize="36px" fontWeight="semibold">
              {item.value}
            </Text>
            <Text color="blackAlpha.500">{item.unit}</Text>
          </Box>
        </Card>
      ))}
    </Grid>
  );
};

export default DailyStatistic;
