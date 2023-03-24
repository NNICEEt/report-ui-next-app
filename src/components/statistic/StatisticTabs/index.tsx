import Tabs, { LineTab } from "@/common/components/Tabs";

import * as locales from "./locales";

const StatisticTabs = () => {
  const tabs = [locales.SUBMISSION, locales.ENGAGEMENT];

  return (
    <Tabs h="48px">
      {tabs.map((tab, index) => (
        <LineTab key={index}>{tab}</LineTab>
      ))}
    </Tabs>
  );
};

export default StatisticTabs;
