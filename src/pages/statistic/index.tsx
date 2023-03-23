import Head from "next/head";

import BottomNavigatorBar from "@/common/components/BottomNavigatorBar";
import HeaderNavigatorBar from "@/common/components/HeaderNavigatorBar";
import Page from "@/common/components/Page";
import StatisticTabs from "@/components/statistic/StatisticTabs";

import { ScreenName, ScreenPath } from "@/constants";
import DateFilterSection from "@/components/statistic/DateFilterSection";
import StatisticSection from "@/components/statistic/StatisticSection";

const headerMenuList = [
  {
    name: "All Report",
    link: `${ScreenPath.StatisticPage}?section=all-report`,
  },
  { name: "Report A", link: `${ScreenPath.StatisticPage}?section=report-a` },
];

const Statistic = () => {
  return (
    <>
      <Head>
        <title>{ScreenName.StatisticPage}</title>
      </Head>
      <Page>
        <HeaderNavigatorBar menuList={headerMenuList} />
        <StatisticTabs />
        <DateFilterSection />
        <StatisticSection />
        <BottomNavigatorBar currentPage={ScreenName.StatisticPage} />
      </Page>
    </>
  );
};

export default Statistic;
