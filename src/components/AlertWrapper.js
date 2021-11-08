import {Alert, Modal} from "reactstrap";
import React from 'react';

export const AlertWrapper = ({status, setOpen, isOpen}) => {
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setOpen(false);
        }, 5000);
        return () => clearTimeout(timeout);
    }, [setOpen])
    return(
        <Modal cssModule={{'modal': 'alert-wrapper', 'modal-dialog': 'm-1'}} backdrop={false} isOpen={isOpen}>
            <Alert className='m-0' color={status ? 'success' : 'danger'}>
                {status ? 'Повідомлення відправленно' : 'Сталася помилка'}
            </Alert>
        </Modal>
    )
}