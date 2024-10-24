import styled from "styled-components";
import { useUser } from "../store/useUsers";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 0px;
`

const APIKeyBlock = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    background: #3335;
    border: 1px solid #444;
    border-radius: 10px;
`

const HeaderBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border-bottom: 2px solid #555;
    padding-bottom: 10px;
`

const HeaderText = styled.a`
    color: #fff;
    font-size: 18px;
    font-weight: 500;
`

const DescriptionText = styled.a`
    color: #aaa;
    font-size: 13px;
    font-weight: 500;
    margin-top: 15px;
`

const LearnMoreButton = styled.button`
    width: 150px;
    height: 50px;
    border: 2px solid #444;
    background: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
`

const APIField = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #444;
    margin-top: 20px;
    padding-bottom: 5px;
`

const APIKeyText = styled.a`
    color: #fff;
    font-size: 19px;
    font-weight: 500;
`

const CopyButton = styled.div`
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #222;
    border: 2px solid #444;
    border-radius: 10px;
    padding: 0px 10px;
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    transition: all .1s ease-in-out;
    cursor: pointer;
    &:active{
        scale: calc(0.97);
    }
`


export const GetAPIKey = () => {

    const [user, setUser] = useUser();

    const handleCopy = (key: string) => {
        navigator.clipboard.writeText(key)
    };

    console.log(user)

    return (
        <Container>
            <APIKeyBlock>
                <HeaderBlock>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <HeaderText>API keys</HeaderText>
                        <DescriptionText>Your keys will be stored here</DescriptionText>
                    </div>
                    <LearnMoreButton>Create</LearnMoreButton>
                </HeaderBlock>
                    <APIField>
                        <APIKeyText>{user.key}</APIKeyText> 
                        <CopyButton onClick={() => handleCopy(user.key)}>Copy</CopyButton>
                    </APIField>
            </APIKeyBlock>
        </Container>
    )
}