import React from "react";
import {LoginForm} from "../../components/LoginForm";
import {useCookies} from "react-cookie";
import {AdminPanel} from "../AdminPanel";

export const AdminPage = () => {
    const [cookies, setCookies] = useCookies(['login']);
    return(
        <div>
            {
                !cookies.login && <LoginForm setCookies={setCookies}/>
            }
            {
                cookies.login && <AdminPanel/>
            }
        </div>
    )
}