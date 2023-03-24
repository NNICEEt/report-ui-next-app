import { Avatar, Box, Card, Flex, Text } from "@chakra-ui/react";
import { AiFillLike } from "react-icons/ai";

const StatisticRecord = () => {
  return (
    <Flex mt="8" alignItems="center" gap="1.5">
      <Flex
        w="26px"
        h="26px"
        color="white"
        bgColor="black"
        justifyContent="center"
        alignItems="center"
        rounded="full"
      >
        1
      </Flex>
      <Card flex="1" variant="outline" p="2">
        <Flex alignItems="center" gap="1.5">
          <Avatar size="sm" src="https://bit.ly/broken-link" />
          <Box flex="1">
            <Box fontSize="12px">
              <Text display="inline" as="b">
                Nobi Nobita,
              </Text>{" "}
              Creative
            </Box>
            <Text fontSize="10px" noOfLines={1}>
              ABC Department
            </Text>
          </Box>
          <Box h="40px" w="1px" bgColor="blackAlpha.300" />
          <Flex
            px="1"
            fontSize="10px"
            fontWeight="semibold"
            color="blackAlpha.700"
            gap="1"
          >
            <Box color="primary.400" fontSize="16px">
              <AiFillLike />
            </Box>
            30 People Likes
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default StatisticRecord;
