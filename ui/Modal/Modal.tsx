import * as React from 'react';
import ModalStyled from './ModalStyled';
import { Modal as MaterialModal } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Modal: React.FC<Props> = ({ children, className, ...rest }) => (
    <ModalStyled>
        <div className={['Modal', className && className].join(' ')} data-testid='Modal'>
            <MaterialModal {...rest}>
                {children}
            </MaterialModal>            
        </div>
    </ModalStyled>
);

export default Modal;
