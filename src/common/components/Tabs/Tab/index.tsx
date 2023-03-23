import {
  Tab as ChakraTab,
  TabProps as ChakraTabProps,
  SystemStyleObject,
} from "@chakra-ui/react";

interface TabProps extends ChakraTabProps {
  hasUnderline?: boolean;
}

const Tab = ({ children, hasUnderline, _selected, ...rest }: TabProps) => {
  const selectedStyles = {
    color: _selected?.color ?? "primary.500",
    borderBottom: hasUnderline ? _selected?.borderBottom ?? "2px" : "none",
    borderColor: _selected?.borderColor ?? "primary.500",
    ..._selected,
  } as SystemStyleObject;

  return (
    <ChakraTab
      flex="1"
      fontSize="14px"
      color="blackAlpha.500"
      borderBottom="none"
      _selected={selectedStyles}
      {...rest}
    >
      {children}
    </ChakraTab>
  );
};

export default Tab;
