import styled from "styled-components";
import { useUser } from "../store/useUsers";
import { useEffect } from "react";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px 15px;
`

const HeaderText = styled.a`
    color: #fff;
    font-size: 22px;
    font-weight: 500;
`

const BlocksContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`

const Blocks = styled.div`
    width: 340px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #333;
    border-radius: 10px;
    border: 2px solid #444;
    padding-left: 10px;
    padding-bottom: 10px;
`

const BlockHeaderText = styled.a`
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    margin-top: 15px;
`

const Description = styled.a`
    color: #aaa;
    font-size: 13px;
    font-weight: 500;
    margin-top: 20px;
`

const ProcessLineBlock = styled.div`
    width: 90%;
    height: 6px;
    border-radius: 50px;
    margin-top: 15px;
    background: #222;
    border-radius: 50px;
`

const ProcessLine = styled.div`
    width: 10%;
    height: 100%;
    background: #ff4d00;
    border-radius: 50px;
`

const LimitBlock = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
`

const AmountText = styled.a`
    color: #fff;
    font-size: 22px;
    font-weight: 500;
`

const ChangeLimitButton = styled.button`
    width: 150px;
    height: 50px;
    border: 2px solid #333;
    background: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: #fff;
    font-weight: 500;
`

const UnderText = styled.a`
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    margin-top: 10px;
`

const AddNotification = styled.button`
    width: 90%;
    height: 50px;
    border: 2px solid #333;
    background: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    color: #fff;
    font-weight: 500;
    margin: auto;
    margin-bottom: 0px;
`


export const Limits = () => {

    const [user, setUser] = useUser();

    return (
        <Container>
            <HeaderText>Spend Limits</HeaderText>
            <BlocksContainer>
                <Blocks>
                    <BlockHeaderText>Monthly limit</BlockHeaderText>
                    <ProcessLineBlock>
                        <ProcessLine style={{ width: `${(user.usage / user.limit) * 100}%` }} />
                    </ProcessLineBlock>
                    <LimitBlock>
                        <AmountText>{user.usage} of {user.limit}</AmountText>
                        <ChangeLimitButton>Change Limit</ChangeLimitButton>
                    </LimitBlock>
                    <UnderText>Resets on 1 Nov 2024</UnderText>
                </Blocks>
                <Blocks>
                    <BlockHeaderText>Email Notification</BlockHeaderText>
                    <Description>Notify all admins when monthly spend reaches a
                        certain amount</Description>
                    <AddNotification>Add notification</AddNotification>
                </Blocks>
            </BlocksContainer>
        </Container>
    )
}