import { Flex } from "@chakra-ui/react";
import React from "react";

type PageContentProps = {};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  console.log("here is children", children);
  return (
    <Flex justify="center" p="16px 0px" border="1px solid red">
      <Flex
        justify="center"
        width="95%"
        maxWidth="860px"
        border="1px solid green"
      >
        {/* lhs */}
        <Flex
          direction="column"
          width={{ base: "100%", md: "65%" }}
          border="1px solid blue"
          mr={{ base: 0, md: 6 }}
        >
          {children && children[0 as keyof typeof children]}
        </Flex>
        {/* rhs */}
        <Flex border="1px solid orange">
          {children && children[1 as keyof typeof children]}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PageContent;
