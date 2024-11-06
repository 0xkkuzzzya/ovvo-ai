import styled from "styled-components";
import { Header } from "./Header";
import { Dashboard } from "./Dashboard";
import { Workbench } from "./Workbench";
import { Route, Routes } from "react-router-dom";
import { Settings } from "./Settings";
import { Login } from "./Login";
import { UploadFile } from "./UploadFile";


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`
 
const routes = [
    { path: '/', name: 'Login', element: <Login /> },
    { path: '/workbench/:model', name: 'Workbeanch', element: <Workbench /> },
    { path: '/settings', name: 'Settings', element: <Settings /> },
    { path: '/dashboard', name: 'Dashboard', element: <Dashboard /> },
    { path: '/uploadfile', name: 'Uploadfile', element: <UploadFile /> },
]


export const MainIndex = () => {
    return(
        <Container>
            {window.location.pathname !== '/' && <Header />}
            <Routes>
                {routes.map(({ path, element }) =>
                    <Route key={path} path={path} element={element} />
                )}
            </Routes>
        </Container>
    )
}