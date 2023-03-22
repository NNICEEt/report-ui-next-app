import BottomNavigatorBar from "@/common/components/BottomNavigatorBar";
import HeaderNavigatorBar from "@/common/components/HeaderNavigatorBar";
import Page from "@/common/components/Page";
import { Text } from "@chakra-ui/react";
import Head from "next/head";
import { ScreenName, ScreenPath } from "../../constants";

const headerMenuList = [
  { name: "Report A", link: `${ScreenPath.ReportPage}?section=report-a` },
  { name: "Report B", link: `${ScreenPath.ReportPage}?section=report-b` },
];

const Report = () => {
  return (
    <>
      <Head>
        <title>{ScreenName.ReportPage}</title>
      </Head>
      <Page>
        <HeaderNavigatorBar menuList={headerMenuList} />
        <Text mt="4" textAlign="center">
          Coming soon ...
        </Text>
        <BottomNavigatorBar currentPage={ScreenName.ReportPage} />
      </Page>
    </>
  );
};

export default Report;
