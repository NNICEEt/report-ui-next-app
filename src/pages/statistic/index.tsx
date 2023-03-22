import BottomNavigatorBar from "@/common/components/BottomNavigatorBar";
import HeaderNavigatorBar from "@/common/components/HeaderNavigatorBar";
import Page from "@/common/components/Page";
import Head from "next/head";
import { ScreenName, ScreenPath } from "../../constants";

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

        <BottomNavigatorBar currentPage={ScreenName.StatisticPage} />
      </Page>
    </>
  );
};

export default Statistic;
