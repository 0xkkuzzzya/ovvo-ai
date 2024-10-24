import { Link } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "./store/useUsers";


const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NameBlock = styled.div`
    height: 100%;
    margin-left: 50px;
    display: flex;
    align-items: center;
`

const NavigateBlock = styled.nav`
    display: flex;
    align-items: center;
    gap: 10px;
`

const MenuBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
    gap: 10px;
`

const Name = styled.a`
    color: #fff;
    font-size: 18px;
    font-weight: 400;
`

const NavigateItem = styled.div`
    width: 115px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .3s ease-in-out;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background: #212121;
    }
`

const NavigateText = styled.a`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
`

const AccountItem = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50px;
    border: 2px solid #bababa;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AccountName = styled.a`
    color: #111;
    font-size: 16px;
    font-weight: 600;
`


export const Header = () => {

    const [user, setUser] = useUser();

    return (
        <HeaderContainer>
            <Link to={user ? "/dashboard" : "/"} style={{textDecoration: "none"}}>
                <NameBlock>
                    <Name>Ovvo.AI</Name>
                </NameBlock>
            </Link>
            <MenuBlock>
                <Link to="/settings" style={{ textDecoration: "none" }}>
                    <NavigateItem>
                        <NavigateText>
                            Settings
                        </NavigateText>
                    </NavigateItem>
                </Link>
                <AccountItem>
                    <AccountName>IK</AccountName>
                </AccountItem>
            </MenuBlock>
        </HeaderContainer>
    )
}

