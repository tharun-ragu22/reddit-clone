import { Providers } from "@/app/providers";
import PageContent from "@/components/Layout/PageContent";
import NewPostForm from "@/components/Posts/NewPostForm";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const submitPostPage: React.FC = () => {
  return (
    <Providers>
      <PageContent>
        <>
          <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
            <Text>Create a post</Text>
          </Box>
          <NewPostForm />
        </>
        <>{/*about*/}</>
      </PageContent>
    </Providers>
  );
};
export default submitPostPage;
