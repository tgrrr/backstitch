import * as React from 'react';
import ModalStyled from './ModalStyled';
import { Modal as MaterialModal } from '@material-ui/core';

interface Props {
    open: boolean;

    children?: React.ReactNode;
    className?: string;
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
