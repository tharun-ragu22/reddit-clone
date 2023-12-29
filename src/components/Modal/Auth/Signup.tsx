import { authModalState } from '@/atoms/authModalAtom';
import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { auth } from '../../../firebase/clientApp';
import { FIREBASE_ERRORS } from '../../../firebase/errors';
type SignupProps = {
    
};

const Signup:React.FC<SignupProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState);
    const [signUpForm, setSignUpForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        userError,
      ] = useCreateUserWithEmailAndPassword(auth);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // console.log(signUpForm.password)
        if (error) setError('');
        if (signUpForm.password !== signUpForm.confirmPassword){
            setError("Passwords do not match!");
            return;
        }
        else if (signUpForm.password.length < 6){
            setError("Password must be at least 6 characters")
            return;
        }
        console.log(signUpForm.email)
        console.log(signUpForm.password)
        createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
    };
    const onChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setSignUpForm((prev) => ({
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

            <Input 
                name='confirmPassword' 
                placeholder='Confirm Password' 
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
            {error || userError && <Text textAlign='center' color='red' fontSize='11pt'>
                {error || FIREBASE_ERRORS[userError.message as keyof typeof FIREBASE_ERRORS]}
            </Text>}
            <Button type='submit' mb={1} isLoading={loading}>Sign Up</Button>
            <Flex fontSize='9pt' justifyContent='center'>
                <Text mr={1}>Already a Redditor?</Text>
                <Text 
                    color='blue.500' 
                    fontWeight={700} 
                    cursor='pointer' 
                    onClick={() =>
                        setAuthModalState((prev) => ({
                            ...prev,
                            view: "login"
                        }))}
                >
                    Log In
                </Text>
            </Flex>
        </form>
    )
}
export default Signup;