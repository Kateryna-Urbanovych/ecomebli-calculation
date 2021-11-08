import {baseUrl} from "../constants/baseUrl";
import React from 'react';
import { Formik, Form as FormikForm, Field } from 'formik';
import "../styles/form.scss";
import {useOrders} from "../hooks/useOrders";

export const ContactForm = ({setStatus, product_id, product, isHome}) => {
    const {saveOrder} = useOrders();
    const onSubmit = ({tel, fullName}) => {
        if(!isHome){
            saveOrder({tel: tel, name: fullName, product: product_id});
        }
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                "tel": tel,
                "fullName": fullName,
                ...(product ? {"product": product} : {})
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }
        /*
        fetch(baseUrl + '/api/mailer.php', requestOptions)
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
            .then(data => setStatus({ok: data.status, error: data.status ? undefined : 'Some error'}))
            .catch(e => {
                setStatus({ok: false, error: e});
                console.log(e);
            });
         */
    }
    const initialValues = {tel: '', fullName: ''}
    return(
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <FormikForm id="formEmail" className='w-100'>
                    <div>
                        <div className="input-wrapper">
                            <Field id="fullName" type="text" placeholder="Ім'я Прізвище" name="fullName"
                                   className={isHome ? 'name-input-home' : 'name-input'} required={true}/>
                        </div>
                        <div className="input-wrapper">
                            <Field id="tel" type="tel" placeholder="+(380) ___ ___ ___"
                                   className={isHome ? 'tel-input-home' : 'tel-input'} name="tel" required={true}/>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="submit-input">Залишити контакти</button>
                    </div>
                </FormikForm>
            </Formik>
    )
}