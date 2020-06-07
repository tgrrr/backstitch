import * as React from 'react';
import BackdropStyled from './BackdropStyled';
import { Backdrop as MaterialBackdrop } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Backdrop: React.FC<Props> = ({ children, className, ...rest }) => (
    <BackdropStyled>
        <div className={['Backdrop', className && className].join(' ')} data-testid='Backdrop'>
            <MaterialBackdrop {...rest}>
                {children}
            </MaterialBackdrop>            
        </div>
    </BackdropStyled>
);

export default Backdrop;
