import * as React from 'react';
import ModalStyled from './ModalStyled';
import { Modal as MaterialModal } from '@material-ui/core';

interface Props {
    children: React.ReactElement; // Needs to be able to hold a ref
    className?: string;
    open: boolean;
}

const Modal: React.FC<Props> = ({
    children,
    className,
    open=false,
    ...rest
}) => (
    <ModalStyled>
        <div className={['Modal', className && className].join(' ')} data-testid='Modal'>
            <MaterialModal
                open={open}
                {...rest}
            >
                {children}
            </MaterialModal>            
        </div>
    </ModalStyled>
);

export default Modal;
