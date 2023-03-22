import { Box, Tab, Tabs } from "@chakra-ui/react";

import { FaEdit } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoPieChartSharp, IoSettingsSharp } from "react-icons/io5";
import { useRouter } from "next/router";
import { ScreenName, ScreenPath } from "@/constants";

const menuList = [
  { icon: <FaEdit />, name: ScreenName.WritePage, link: ScreenPath.WritePage },
  {
    icon: <BsCheckCircleFill />,
    name: ScreenName.ApprovedPage,
    link: ScreenPath.ApprovedPage,
  },
  {
    icon: <RiSendPlaneFill />,
    name: ScreenName.ReportPage,
    link: ScreenPath.ReportPage,
  },
  {
    icon: <IoPieChartSharp />,
    name: ScreenName.StatisticPage,
    link: ScreenPath.StatisticPage,
  },
  {
    icon: <IoSettingsSharp />,
    name: ScreenName.SettingPage,
    link: ScreenPath.SettingPage,
  },
];

interface BottomNavigatorBarProps {
  currentPage: string;
}

const BottomNavigatorBar = ({ currentPage }: BottomNavigatorBarProps) => {
  const { push } = useRouter();

  const activeIndex = menuList.findIndex((item) => currentPage === item.name);

  const handleButtonClick = (link: string) => {
    push(link);
  };

  return (
    <>
      <Tabs
        index={activeIndex}
        variant="unstyled"
        h="72px"
        w="full"
        bgColor="white"
        borderTop="1px"
        borderColor="blackAlpha.300"
        position="fixed"
        bottom="0"
        display="flex"
      >
        {menuList.map((item, index) => (
          <Tab
            key={index}
            px="0"
            color="blackAlpha.300"
            fontSize="14px"
            flex="1"
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="0.5"
            _selected={{ color: "primary.500" }}
            _hover={{ bgColor: "primary.50" }}
            onClick={() => handleButtonClick(item.link)}
          >
            <Box fontSize="16px">{item.icon}</Box>
            {item.name}
          </Tab>
        ))}
      </Tabs>
      <Box h="64px" />
    </>
  );
};

export default BottomNavigatorBar;
