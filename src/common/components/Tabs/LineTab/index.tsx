import {
  Tab as ChakraTab,
  TabProps as ChakraTabProps,
  SystemStyleObject,
} from "@chakra-ui/react";

interface TabProps extends ChakraTabProps {
  hasUnderline?: boolean;
}

const LineTab = ({ children, hasUnderline, _selected, ...rest }: TabProps) => {
  const selectedStyles = {
    color: _selected?.color ?? "primary.500",
    borderBottom: _selected?.borderBottom ?? "2px",
    borderColor: _selected?.borderColor ?? "primary.500",
    ..._selected,
  } as SystemStyleObject;

  return (
    <ChakraTab
      flex="1"
      fontSize="14px"
      color="blackAlpha.500"
      borderBottom="1px"
      borderBottomColor="blackAlpha.300"
      _selected={selectedStyles}
      {...rest}
    >
      {children}
    </ChakraTab>
  );
};

export default LineTab;
