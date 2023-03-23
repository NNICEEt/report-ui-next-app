import Head from "next/head";

import BottomNavigatorBar from "@/common/components/BottomNavigatorBar";
import HeaderNavigatorBar from "@/common/components/HeaderNavigatorBar";
import Page from "@/common/components/Page";
import { Text } from "@chakra-ui/react";

import { ScreenName, ScreenPath } from "@/constants";

const headerMenuList = [
  { name: "Document", link: `${ScreenPath.WritePage}?section=document` },
  { name: "Test", link: `${ScreenPath.WritePage}?section=test` },
  { name: "Email", link: `${ScreenPath.WritePage}?section=email` },
];

const Write = () => {
  return (
    <>
      <Head>
        <title>{ScreenName.WritePage}</title>
      </Head>
      <Page>
        <HeaderNavigatorBar menuList={headerMenuList} />
        <Text mt="4" textAlign="center">
          Coming soon ...
        </Text>
        <BottomNavigatorBar currentPage={ScreenName.WritePage} />
      </Page>
    </>
  );
};

export default Write;
