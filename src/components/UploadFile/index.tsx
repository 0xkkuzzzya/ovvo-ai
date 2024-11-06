import React, { useRef, useState } from 'react';
import styled from "styled-components";

const Container = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
`;

const DropFile = styled.div`
    width: 90%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed #fff;
    border-radius: 15px;
    cursor: pointer;
`;

const DropFileText = styled.a`
    color: #fff;
    font-size: 15px;
    font-weight: 500;
`;

const FieldFileBlock = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-start; 
    flex-direction: column;
    margin-top: 20px;
    max-height: 300px; 
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 5px; 
    }

    &::-webkit-scrollbar-thumb {
        background: #888; 
        border-radius: 5px; 
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #555; 
    } 
`

const FeildFile = styled.div`
    width: 100%;
    min-height: 50px; 
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid #444;
    box-sizing: border-box; 
`;

const ErrorMessage = styled.a`
    color: #fff;
    font-family: 500;
    font-size: 16px;
`

interface FileItem {
    id: number;
    name: string;
}

export const UploadFile = () => {
    const [files, setFiles] = useState<FileItem[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const login = localStorage.getItem("login")

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const droppedFiles = Array.from(e.dataTransfer.files);
        const newFiles = droppedFiles.map((file, index) => ({
            id: files.length + index + 1,
            name: file.name,
        }));
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = Array.from(e.target.files || []);
        const newFiles = selectedFiles.map((file, index) => ({
            id: files.length + index + 1,
            name: file.name,
        }));
        setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    return (
        <>
            {
                login != "true" ?
                    <><ErrorMessage>you need to log in</ErrorMessage></>
                    :
                    <Container>
                        <DropFile onDrop={handleDrop} onDragOver={handleDragOver} onClick={handleClick}>
                            <DropFileText>Drag and drop files here or click to select</DropFileText>
                        </DropFile>
                        <input
                            type="file"
                            multiple
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                        <FieldFileBlock>
                            {files.map(file => (
                                <FeildFile key={file.id}>
                                    <DropFileText>{file.name}</DropFileText>
                                </FeildFile>
                            ))}
                        </FieldFileBlock>
                    </Container>
            }
        </>
    );
};