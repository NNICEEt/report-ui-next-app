import Head from "next/head";

import BottomNavigatorBar from "@/common/components/BottomNavigatorBar";
import HeaderNavigatorBar from "@/common/components/HeaderNavigatorBar";
import Page from "@/common/components/Page";
import { Text } from "@chakra-ui/react";

import { ScreenName, ScreenPath } from "@/constants";

const headerMenuList = [
  { name: "Document", link: `${ScreenPath.ApprovedPage}?section=document` },
  { name: "Test", link: `${ScreenPath.ApprovedPage}?section=test` },
  { name: "Email", link: `${ScreenPath.ApprovedPage}?section=email` },
];

const Approved = () => {
  return (
    <>
      <Head>
        <title>{ScreenName.ApprovedPage}</title>
      </Head>
      <Page>
        <HeaderNavigatorBar menuList={headerMenuList} />
        <Text mt="4" textAlign="center">
          Coming soon ...
        </Text>
        <BottomNavigatorBar currentPage={ScreenName.ApprovedPage} />
      </Page>
    </>
  );
};

export default Approved;
