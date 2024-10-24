import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
`

const Blocks = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    gap: 10px;
`

const Field = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

const InputName = styled.a`
    color: #fff;
    font-weight: 500;
    font-size: 14px;
`

const Input = styled.input`
    width: 150px;
    height: 40px;
    background: #333;
    border-radius: 10px;
    padding: 0px 10px;
    color: #fff;
    font-weight: 500;
    font-size: 15px;
`


export const Details = () => {
    return(
        <Container>
            <Blocks>
                <Field>
                    <InputName>Org name</InputName>
                    <Input placeholder="Name"/>
                </Field>
            </Blocks>
            <Blocks>
                <Field>
                    <InputName>Primary business address</InputName>
                    <Input placeholder="Line 1"/>
                </Field>
                <Field>
                    <Input placeholder="Line 2"/>
                </Field>
            </Blocks>
            <Blocks>
                <Field>
                    <InputName>Country</InputName>
                    <Input placeholder="Country"/>
                </Field>
                <Field>
                    <InputName>State or province</InputName>
                    <Input placeholder="Line 2"/>
                </Field>
                <Field>
                    <InputName>City</InputName>
                    <Input placeholder="Line 2"/>
                </Field>
                <Field>
                    <InputName>Postal code</InputName>
                    <Input style={{width: "100px"}} placeholder="Line 2"/>
                </Field>
            </Blocks>
        </Container>
    )
}