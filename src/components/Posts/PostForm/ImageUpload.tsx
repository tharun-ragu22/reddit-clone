import { Button, Flex, Image, Stack } from "@chakra-ui/react";
import React, { useRef } from "react";

type imageUploadProps = {
  selectedFile?: string;
  onSelectImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSelectedTab: (value: string) => void;
  setSelectedFile: (value: string) => void;
};

const imageUpload: React.FC<imageUploadProps> = (props) => {
  const selectedFileRef = useRef<HTMLInputElement>(null);
  return (
    <Flex direction="column" justify="center" align="center" width="100%">
      {props.selectedFile ? (
        <>
          <Image
            src={props.selectedFile}
            maxWidth="400px"
            maxHeight="400px"
            mb={2}
          />
          <Stack direction="row">
            <Button height="28px" onClick={() => props.setSelectedTab("Post")}>
              Back to Post
            </Button>
            <Button
              variant="outline"
              height="28px"
              onClick={() => props.setSelectedFile("")}
            >
              Remove
            </Button>
          </Stack>
        </>
      ) : (
        <Flex
          justify="center"
          align="center"
          p={20}
          border="1px dashed"
          borderColor="gray.200"
          width="100%"
          borderRadius={4}
        >
          <Button
            variant="outline"
            height="28px"
            onClick={() => selectedFileRef.current?.click()}
          >
            Upload
          </Button>
          <input
            ref={selectedFileRef}
            type="file"
            hidden
            onChange={props.onSelectImage}
          />
          {/* <img src={props.selectedFile} /> */}
        </Flex>
      )}
    </Flex>
  );
};
export default imageUpload;
