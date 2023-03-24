import Tabs, { LineTab } from "@/common/components/Tabs";
import { Box } from "@chakra-ui/react";
import { Fragment } from "react";

import * as locales from "./locales";

const StatisticTabs = () => {
  const tabs = [locales.SUBMISSION, locales.ENGAGEMENT];

  return (
    <Tabs h="48px">
      {tabs.map((tab, index) => (
        <Fragment key={index}>
          <LineTab>{tab}</LineTab>
          {index < tabs.length - 1 && (
            <Box w="1px" my="3" bgColor="blackAlpha.300" />
          )}
        </Fragment>
      ))}
    </Tabs>
  );
};

export default StatisticTabs;
