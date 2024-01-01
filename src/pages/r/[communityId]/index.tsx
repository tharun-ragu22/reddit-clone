import { GetServerSidePropsContext } from "next";
import React from "react";
import { firestore } from "../../../firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";
import { Community } from "../../../atoms/communityAtoms";
// import CommunityTemplate from "../../../components/CommunityPage/CommunityPage";
import safeJsonStringify from "safe-json-stringify";
import { Providers } from "@/app/providers";
import NotFound from "@/components/Community/NotFound";
import Header from "@/components/Community/Header";
import PageContent from "@/components/Layout/PageContent";
import CreatePostLink from "@/components/Community/CreatePostLink";
import Posts from "@/components/Posts/Posts";

type CommunityPageProps = {
  communityData: Community;
};

const CommunityPage: React.FC<CommunityPageProps> = ({ communityData }) => {
  return (
    <>
      <Providers>
        {/* <h1>Welcome to {communityData.id}</h1> */}
        {communityData ? (
          <>
            <Header communityData={communityData} />
            <PageContent>
              <>
                <CreatePostLink />
                <Posts communityData={communityData} />
              </>
              <>
                <div>RHS</div>
              </>
            </PageContent>
          </>
        ) : (
          <NotFound />
        )}
      </Providers>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const communityDocRef = doc(
      firestore,
      "communities",
      context.query.communityId as string
    );
    const communityDoc = await getDoc(communityDocRef);
    return {
      props: {
        communityData: communityDoc.exists()
          ? JSON.parse(
              safeJsonStringify({ id: communityDoc.id, ...communityDoc.data() })
            )
          : "",
      },
    };
  } catch (error) {
    console.log("getSErverSideProps error");
  }
}
export default CommunityPage;
