import styled from "styled-components";
import AddFile from '../../assets/AddFile.svg'
import WriteToPerplex from '../../assets/WtiteToPerplex.svg'
import WriteToRAG from '../../assets/WtiteToRAG.svg'
import FriendsAdd from '../../assets/FirendsAdd.svg'
import { Link } from "react-router-dom";
import { useUser } from "../store/useUsers";

const Container = styled.div`
    width: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 200px;
`

const MainText = styled.a`
    color: #fff;
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
`

const NavigateBlock = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const NavigateItem = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: 2px solid #333;
    display: flex;
    align-items: center;
    transition: all .3s ease-in-out;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0 10px #444;
        border: 2px solid #444;
    }
`

const NagigateItemLogo = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    margin-left: 20px;
`

const NagigateItemText = styled.a`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
`

const UnderText = styled.a`
    color: #666;
    font-size: 16px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 100px;
    cursor: pointer;
`

const ErrorMessage = styled.a`
    color: #fff;
    font-family: 500;
    font-size: 16px;
`


export const Dashboard = () => {

    const [user, setUser] = useUser();

    let Ovvo = "ovvo-1-2024-small"
    let Perplexity = "llama-3.1-sonar-small-128k-online"

    const login = localStorage.getItem("login")

    return (
        <>
            {
                login != "true" ?
                    <><ErrorMessage>you need to log in</ErrorMessage></>
                    :
                    <Container>
                        <NavigateBlock>
                            <MainText>Hello, {user.name}</MainText>
                            <Link to={`/workbench/${Ovvo}`} style={{ textDecoration: "none", width: "100%" }}>
                                <NavigateItem>
                                    <NagigateItemLogo src={WriteToRAG} />
                                    <NagigateItemText>Write a prompt to Ovvo AI</NagigateItemText>
                                </NavigateItem>
                            </Link>
                            <Link to={`/workbench/${Perplexity}`} style={{ textDecoration: "none", width: "100%" }}>
                                <NavigateItem>
                                    <NagigateItemLogo src={WriteToPerplex} />
                                    <NagigateItemText>Write a prompt to Perplexity AI</NagigateItemText>
                                </NavigateItem>
                            </Link>
                            <Link to="/uploadfile" style={{ textDecoration: "none", width: "100%" }}>
                                <NavigateItem>
                                    <NagigateItemLogo src={AddFile} />
                                    <NagigateItemText>Upload file to Ovvo AI</NagigateItemText>
                                </NavigateItem>
                            </Link>
                            <NavigateItem>
                                <NagigateItemLogo src={FriendsAdd} />
                                <NagigateItemText>Invite your friends to your Ovvo AI</NagigateItemText>
                            </NavigateItem>
                        </NavigateBlock>
                        <UnderText>Help & Support</UnderText>
                    </Container>
            }
        </>
    )
}