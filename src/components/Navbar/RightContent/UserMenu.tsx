import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Icon,
  Flex,
  Text
} from "@chakra-ui/react";
import { User, signOut } from "firebase/auth";
import React from "react";

import { FaRedditSquare } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { IoSparkles } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { auth } from "@/firebase/clientApp";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import { setUncaughtExceptionCaptureCallback } from "process";

type UserMenuProps = {
  user?: User | null; // User can be uninitialized (?) or null
};

const UserMenu: React.FC<UserMenuProps> = (props) => {
    const setAuthModalState = useSetRecoilState(authModalState)
  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="8px 6px"
        borderRadius={4}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex align="center">
          <Flex align="center">
            {props.user ? (
              <>
                <Icon
                  fontSize={24}
                  mr={1}
                  color="gray.300"
                  as={FaRedditSquare}
                />
                <Flex
                    direction="column"
                    display= {{base: "none", lg: "flex"}}
                    fontSize={8}
                    align="flex-start"
                    mr={8}
                >
                    <Text fontWeight={700} fontSize={10}>
                        {props.user?.displayName || props.user?.email?.split("@")[0]}
                    </Text>
                    <Flex>
                        <Icon as={IoSparkles} color="brand.100" mr={1} />
                        <Text color="gray.400"> 1 karma</Text>
                    </Flex>
                </Flex>
              </>
            ) : (
              <Icon fontSize={24} color="gray.400" mr={1} as={VscAccount} />
            )}
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        {props.user ? (
          <>
            <MenuItem
              fontSize="10pt"
              color="gray.400"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
            >
              <Flex align="center">
                <Icon as={CgProfile} fontSize={20} mr={2} />
                Profile
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize="10pt"
              color="gray.400"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={() => signOut(auth)}
            >
              <Flex align="center">
                <Icon as={MdOutlineLogin} fontSize={20} mr={2} />
                Log Out
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              fontSize="10pt"
              color="gray.400"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={() => setAuthModalState({ open: true, view: 'login'})}
            >
              <Flex align="center">
                <Icon as={MdOutlineLogin} fontSize={20} mr={2} />
                Log In/ Sign Up
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>

    // <div>Hi</div>
  );
};
export default UserMenu;
