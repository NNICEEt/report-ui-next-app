import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import IconButton from "@/common/components/IconButton";

import { FaHome } from "react-icons/fa";
import { IoIosOptions } from "react-icons/io";
import { AiOutlineDown } from "react-icons/ai";

interface HeaderNavigatorBarProps {
  menuList: { name: string; link: string }[];
}

const HeaderNavigatorBar = ({ menuList = [] }: HeaderNavigatorBarProps) => {
  const router = useRouter();
  const { section } = router.query;

  const title =
    menuList.find((item) => item.link.match(section as string))?.name ??
    menuList[0].name;

  return (
    <>
      <Box h="60px" />
      <Flex
        h="60px"
        w="full"
        px="2"
        bgColor="primary.500"
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        top="0"
      >
        <IconButton aria-label="home-button" icon={<FaHome />} />
        <Menu>
          <MenuButton color="white">
            <Flex alignItems="center" gap="2">
              {title} {menuList.length > 1 && <AiOutlineDown />}
            </Flex>
          </MenuButton>
          {menuList.length > 1 && (
            <MenuList>
              {menuList.map((item, index) => (
                <MenuItem key={index} fontWeight="semibold">
                  <Link href={item.link}>{item.name}</Link>
                </MenuItem>
              ))}
            </MenuList>
          )}
        </Menu>
        <IconButton aria-label="options-button" icon={<IoIosOptions />} />
      </Flex>
    </>
  );
};

export default HeaderNavigatorBar;
