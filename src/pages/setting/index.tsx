import BottomNavigatorBar from "@/common/components/BottomNavigatorBar";
import HeaderNavigatorBar from "@/common/components/HeaderNavigatorBar";
import Page from "@/common/components/Page";
import { Text } from "@chakra-ui/react";
import Head from "next/head";
import { ScreenName, ScreenPath } from "../../constants";

const headerMenuList = [
  { name: "Setting", link: `${ScreenPath.SettingPage}?section=setting` },
];

const Setting = () => {
  return (
    <>
      <Head>
        <title>{ScreenName.SettingPage}</title>
      </Head>
      <Page>
        <HeaderNavigatorBar menuList={headerMenuList} />
        <Text mt="4" textAlign="center">
          Coming soon ...
        </Text>
        <BottomNavigatorBar currentPage={ScreenName.SettingPage} />
      </Page>
    </>
  );
};

export default Setting;
