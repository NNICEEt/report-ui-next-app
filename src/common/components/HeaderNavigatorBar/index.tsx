import {
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { FaHome } from "react-icons/fa";
import { IoIosOptions } from "react-icons/io";
import { AiOutlineDown } from "react-icons/ai";

interface HeaderNavigatorBarProps {
  menuList: { name: string; link: string }[];
}

const HeaderNavigatorBar = ({ menuList = [] }: HeaderNavigatorBarProps) => {
  const router = useRouter();
  const { section } = router.query;

  const title = section
    ? section[0].toUpperCase() + section.slice(1)
    : menuList[0].name;

  return (
    <Flex
      h="60px"
      px="2"
      bgColor="primary.500"
      justifyContent="space-between"
      alignItems="center"
    >
      <IconButton
        aria-label="home-button"
        variant="ghost"
        icon={<FaHome />}
        size="lg"
        color="white"
        colorScheme="whiteAlpha"
        rounded="full"
      />
      <Menu>
        <MenuButton color="white">
          <Flex alignItems="center" gap="2">
            {title} <AiOutlineDown />
          </Flex>
        </MenuButton>
        <MenuList>
          {menuList.map((item, index) => (
            <MenuItem key={index}>
              <Link href={item.link}>{item.name}</Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <IconButton
        aria-label="home-button"
        variant="ghost"
        icon={<IoIosOptions />}
        size="lg"
        color="white"
        colorScheme="whiteAlpha"
        rounded="full"
      />
    </Flex>
  );
};

export default HeaderNavigatorBar;
