import styled from "styled-components";
import { useUser } from "../store/useUsers";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 10px;
`

const Header = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`

const HeaderText = styled.a`
    color: #444;
    font-size: 14px;
    font-weight: 500;
`

const FieldFriends = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #333;
    padding-bottom: 10px;
`

const Text = styled.a`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
`

const InviteButton = styled.button`
    width: 130px;
    height: 37px;
    border-radius: 5px;
    background: #ff4d00;
    margin-right: 50px;
    font-size: 15px;
    font-weight: 500;
`


export const Fiends = () => {

    const [user, setUser] = useUser();

    return (
        <Container>
            <Header>
                <HeaderText style={{ width: "45%" }}>Name</HeaderText>
                <HeaderText style={{ textAlign: "center" }}>EMAIL</HeaderText>
            </Header>
            <>
                {Array.isArray(user.friends) && user.friends.map((friend: string, index: number) => (
                    <FieldFriends key={index}>
                        <Text style={{ width: "45%" }}>{friend}</Text>
                    </FieldFriends>
                ))}
            </>
        </Container>
    )
}