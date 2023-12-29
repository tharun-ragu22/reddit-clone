import { authModalState } from '@/atoms/authModalAtom';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { auth } from '../../../firebase/clientApp';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FIREBASE_ERRORS } from '../../../firebase/errors';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {
    
    const setAuthModalState = useSetRecoilState(authModalState);
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const [ signInWithEmailAndPassword, user, loading,error] = useSignInWithEmailAndPassword(auth);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(loginForm.email)
        signInWithEmailAndPassword(loginForm.email, loginForm.password);
    };
    const onChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setLoginForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }
    
    return (
        <form onSubmit={onSubmit}>
            <Input 
                required
                name='email' 
                placeholder='Email' 
                type='email' 
                mb={2} 
                onChange={onChange}
                fontSize="10pt"
                _placeholder={{color: "gray.500"}}
                _hover={{
                    bg:"white",
                    border: "1px solid",
                    borderColor:"blue.500"
                }}
                _focus={{
                    outline: "none",
                    bg:"white",
                    border: "1px solid",
                    borderColor:"blue.500"
                }}
                bg='gray.50'
            />
                
            
            <Input
                required 
                name='password' 
                placeholder='Password' 
                type='password' 
                mb={2}
                onChange={onChange}
                fontSize="10pt"
                _placeholder={{color: "gray.500"}}
                _hover={{
                    bg:"white",
                    border: "1px solid",
                    borderColor:"blue.500"
                }}
                _focus={{
                    outline: "none",
                    bg:"white",
                    border: "1px solid",
                    borderColor:"blue.500"
                }}
                bg='gray.50'
            />
            <Text textAlign='center' color='red' fontSize='11pt'>
                {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
                
            </Text>
            <Button type='submit'mb={1} >Log In</Button>
            <Flex justifyContent="center" mb={2}>
                <Text fontSize="9pt" mr={2}>
                    Forgot password?
                </Text>
                <Text fontSize="9pt" color="blue.500" cursor='pointer' onClick={() => setAuthModalState((prev) => ({
                            ...prev,
                            view: "resetPassword",
                        }))}>
                    Reset password
                </Text>

            </Flex>
            <Flex fontSize='9pt' justifyContent='center'>
                <Text mr={1}>New here?</Text>
                <Text 
                    color='blue.500' 
                    fontWeight={700} 
                    cursor='pointer' 
                    onClick={() =>
                        setAuthModalState((prev) => ({
                            ...prev,
                            view: "signup"
                        }))}
                >
                    Sign up
                </Text>
            </Flex>
        </form>
    )
}
export default Login;