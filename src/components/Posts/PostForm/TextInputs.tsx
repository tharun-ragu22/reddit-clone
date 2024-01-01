import { Button, Flex, Input, Stack, Textarea } from "@chakra-ui/react";
import React from "react";

type TextInputsProps = {
  textInputs: {
    title: string;
    body: string;
  };
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleCreatePost: () => void;
  loading: boolean;
};

const TextInputs: React.FC<TextInputsProps> = (props) => {
  return (
    <Stack spacing={3} width="100%">
      <Input
        name="title"
        value={props.textInputs.title}
        onChange={props.onChange}
        fontSize="10pt"
        borderRadius={4}
        placeholder="Title"
        _placeholder={{ color: "gray.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "white",
        }}
      />
      <Textarea
        name="body"
        borderRadius={4}
        value={props.textInputs.body}
        onChange={props.onChange}
        placeholder="Text"
        height="100px"
        _placeholder={{ color: "gray.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "white",
        }}
      />
      <Flex justify="flex-end">
        <Button
          height="34px"
          padding="0px 30px"
          disabled={!props.textInputs.title}
          isLoading={props.loading}
          onClick={props.handleCreatePost}
        >
          Post
        </Button>
      </Flex>
    </Stack>
  );
};
export default TextInputs;
