import Tabs from "@/common/components/Tabs";

import * as locales from "./locales";

const StatisticTabs = () => {
  return (
    <Tabs
      h="48px"
      tabItems={[locales.SUBMISSION, locales.ENGAGEMENT]}
      hasUnderline
      hasDivider
    />
  );
};

export default StatisticTabs;
