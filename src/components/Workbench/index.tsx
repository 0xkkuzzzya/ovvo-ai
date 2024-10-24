import styled from "styled-components";
import AddPrompt from '../../assets/AddPrompt.svg'
import HistoryPrompt from '../../assets/HistoryPrompt.svg'
import { useParams } from "react-router-dom";
import { usePrompt, usePromptHistory } from "../store/usePrompt";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { useUser } from "../store/useUsers";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #111;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
`

const ContentBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-top: 20px;
    gap: 20px;
`

const PromtBlock = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 50px;
`

const AddPromptField = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #333;
    border-radius: 20px;
`

const HistoryPromtBlock = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background: #111;
    border: 2px solid #333;
    border-bottom: none;
`

const OutPromtBlock = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 50px;
`

const OutPrompt = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #191919;
    border: 2px solid #333;
    border-bottom: none;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding-top: 20px;
`

const WritePromtInput = styled.input`
    width: 100%;
    height: 50px;
    background: transparent;
    border-radius: 20px;
    margin-left: 20px;
    font-size: 20px;
    color: #eee;
    font-weight: 500;
`

const FunctionalBlockInHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-left: 50px;
`

const AddNewPromtButton = styled.div`
    width: 36px;
    height: 36px;
    cursor: pointer;
    background: #222;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AddNewPromtButtonIcon = styled.img`
    width: 22px;
    height: 22px;
`

const HistoryPromtButton = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const HistoryPromtButtonLogo = styled.img`
    width: 18px;
    height: 18px;
`

const NamePromtButton = styled.div` // кнопка которая открывает модель с инпутом
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    transition: all .2s ease-in-out;
    border-radius: 50px;
    padding: 7px 15px;
    cursor: pointer;
    &:hover{
        background: #212121;
    }
`

const ModelName = styled.div`
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    border-radius: 50px;
    padding: 5px 10px;
    background: #212121;
`

const RunButton = styled.button <{ background: string }>`
    width: 160px;
    height: 37px;
    border-radius: 5px;
    background: ${props => props.background};
    margin-right: 50px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: all .1s ease-in-out;
    &:active{
        scale: calc(0.9);
    }
`

const PromiseContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    min-height: 100%;
`

const PromiseBlock = styled.div`
    width: 90%;
    min-height: 50px;
    display: flex;
    align-items: flex-end;
    border: 1px solid #444;
    border-radius: 15px;
    margin-top: 20px;
    padding: 10px;
`

const AIName = styled.a`
    color: #fff;
    font-size: 20px;
    font-weight: 500;
`

const MarkdownText = styled(ReactMarkdown)`
    color: #fff;
    font-weight: 500;
`

//#683b28
//#ff4d00


export const Workbench = () => {

    const [promptData, setPrompData] = usePromptHistory()
    const [value, setValue] = useState("")
    const [prompt, setPrompt] = usePrompt();
    const [user, setUser] = useUser();

    let { model } = useParams()

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const SendingInput = async () => {

        const requestBody = {
            model: model,
            messages: [
                {
                    role: "user",
                    content: value
                }
            ],
            max_tokens: "1000"
        };

        try {
            const res = await fetch('http://46.226.162.53:5678/webhook/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ requestBody }),
            });

            const data = await res.json();
            console.log(data);

            if (data.ok) {
                setPrompt({
                    model: data.result.model || "",
                    time: data.result.time || "",
                    role: data.result.role || "",
                    value: data.result.content.text.value || ""
                })
                setPrompData({
                    name_prompt: "Untitled",
                    model: model || "",
                    messages: [prompt.value]
                })
            } else {
                alert('Error');
            }
        } catch (error) {

        }
    }

    return (
        <Container>
            <Header>
                <FunctionalBlockInHeader>
                    <AddNewPromtButton>
                        <AddNewPromtButtonIcon src={AddPrompt} />
                    </AddNewPromtButton>
                    <HistoryPromtButton>
                        <HistoryPromtButtonLogo src={HistoryPrompt} />
                    </HistoryPromtButton>
                    {/* кнопка с названием промта открывает модалку
                        если название промта не задано вставлять Untitled */}
                    <NamePromtButton>
                        {promptData.name_prompt}
                    </NamePromtButton>
                    <ModelName>{model}</ModelName>
                </FunctionalBlockInHeader>
                <RunButton onClick={SendingInput} background={value !== "" ? "#ff4d00" : "#683b28"}>Run</RunButton>
            </Header>
            <ContentBlock>
                <PromtBlock>
                    <AddPromptField>
                        <WritePromtInput
                            value={value}
                            onChange={handleInputChange}
                            placeholder={`Напишите запрос ${model}`} />
                    </AddPromptField>
                    <HistoryPromtBlock>

                    </HistoryPromtBlock>
                </PromtBlock>
                <OutPromtBlock>
                    <OutPrompt>
                        <AIName>Ovvo</AIName>
                        {Array.isArray(promptData.messages) && promptData.messages.length > 0 ? 
                            <PromiseContainer>
                                {promptData.messages.map((message: string, index: number) => (
                                    <PromiseBlock key={index}>
                                        <MarkdownText>{message}</MarkdownText>
                                    </PromiseBlock>
                                ))}
                            </PromiseContainer>
                            :
                            <></>
                        }
                    </OutPrompt>
                </OutPromtBlock>
            </ContentBlock>
        </Container>
    )
}