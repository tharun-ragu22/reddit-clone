import { Providers } from "@/app/providers";
import PageContent from "@/components/Layout/PageContent";
import NewPostForm from "@/components/Posts/NewPostForm";
import { auth } from "@/firebase/clientApp";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const submitPostPage: React.FC = () => {
  const [user] = useAuthState(auth);
  return (
    <Providers>
      <PageContent>
        <>
          <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
            <Text>Create a post</Text>
          </Box>
          {user && <NewPostForm user={user} />}
        </>
        <>{/*about*/}</>
      </PageContent>
    </Providers>
  );
};
export default submitPostPage;
