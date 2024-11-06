import { useState } from "react";
import styled from "styled-components";
import { Details } from "./Details";
import { Fiends } from "./Friends";
import { Limits } from "./Limits";
import { GetAPIKey } from "./GetAPIKeys";

const Container = styled.div`
    width: 1000px;
    max-height: 100%;
    display: flex;
`

const MenuBlock = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const ContentBlock = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    background: #222;
    border-radius: 20px;
`

const MenuItem = styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    transition: all .1s ease-in-out;
    &:hover{
        color: #fff;
    }
`

const ErrorMessage = styled.a`
    color: #fff;
    font-family: 500;
    font-size: 16px;
`


export const Settings = () => {

    const [page, setPage] = useState("Details")

    const login = localStorage.getItem("login")

    return (
        <>
            {
                login != "true" ?
                    <><ErrorMessage>you need to log in</ErrorMessage></>
                    :

                    <Container>
                        <MenuBlock>
                            <MenuItem
                                style={{ color: page == "Details" ? "#fff" : "#bababa" }}
                                onClick={() => { setPage("Details") }}>
                                Details
                            </MenuItem>
                            <MenuItem
                                style={{ color: page == "Friends" ? "#fff" : "#bababa" }}
                                onClick={() => { setPage("Friends") }}>
                                Friends
                            </MenuItem>
                            <MenuItem
                                style={{ color: page == "Limits" ? "#fff" : "#bababa" }}
                                onClick={() => { setPage("Limits") }}>
                                Limits
                            </MenuItem>
                            <MenuItem
                                style={{
                                    color: page == "API keys" ? "#fff" : "#bababa"
                                }}
                                onClick={() => { setPage("API keys") }}>
                                API keys
                            </MenuItem>
                        </MenuBlock>
                        <ContentBlock>
                            {page == "Details" && <Details />}
                            {page == "Friends" && <Fiends />}
                            {page == "Limits" && <Limits />}
                            {page == "API keys" && <GetAPIKey />}
                        </ContentBlock>
                    </Container>
            }
        </>
    )
}

