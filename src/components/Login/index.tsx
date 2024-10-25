import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../store/useUsers";

const Container = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #333;
    border: 2px solid #444;
    gap: 20px;
    padding: 15px;
    border-radius: 15px;
    margin-top: 150px;
`

const Input = styled.input`
    width: 80%;
    height: 50px;
    background: #222;
    border: 2px solid #444;
    padding: 0px 20px;
    border-radius: 15px;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
`

const LoginButton = styled.button`
    width: 91%;
    height: 45px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #222;
    border: 2px solid #444;
    border-radius: 15px;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    margin-top: 10px;
    cursor: pointer;
`


export const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useUser();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await fetch('http://46.226.162.53:5678/webhook/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();
            console.log(data);

            if (data.ok) {
                setUser({
                    files: data.result.files || [],
                    friends: data.result.friends || [],
                    key: data.result.key || "",
                    limit: data.result.limit || 0,
                    name: data.result.name || "",
                    usage: data.result.usage || 0,
                    username: data.result.username || "",
                    password: password || ""
                })
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                localStorage.setItem('login', 'true');
                navigate('/dashboard');
            } else {
                alert('Error');
            }
        } catch (error) {

        }
    };

    return (
        <Container>
            <Input
                placeholder="Login"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <LoginButton onClick={handleLogin}>Login</LoginButton>
        </Container>
    )
}