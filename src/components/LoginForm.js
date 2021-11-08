import {baseUrl} from "../constants/baseUrl";
import React from 'react';
import { Formik, Form as FormikForm, Field } from 'formik';
import "../styles/form.scss";

export const LoginForm = ({setCookies}) => {
    const onSubmit = ({login, password}) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                "name": login,
                "password": password,
                "type": "login"
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }
        fetch(baseUrl + '/api/database/login.php', requestOptions)
            .then(response => {
                    if(response.ok){
                        return response;
                    } else {
                        let error = new Error('Error ' + response.status + ': ' + response.statusText);
                        error.response = response;
                        throw error;
                    }
                },
                error => {
                    throw new Error(error.message);
                })
            .then(response => response.json())
            .then(data => data.status ? setCookies("login", data.cookie) : setCookies(undefined))
            .catch(e => {
                setCookies(undefined);
                console.log(e);
            });
    }
    const initialValues = {login: '', password: ''}
    return(
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <FormikForm id="formEmail" className='w-100'>
                <div>
                    <div className="input-wrapper">
                        <Field id="login" type="text" placeholder="Логін" name="login"
                               className='name-input' required={true}/>
                    </div>
                    <div className="input-wrapper">
                        <Field id="password" type="password" placeholder="Пароль"
                               className='name-input' name="password" required={true}/>
                    </div>
                </div>
                <div>
                    <button type="submit" className="submit-input">Увійти</button>
                </div>
            </FormikForm>
        </Formik>
    )
}