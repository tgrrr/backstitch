import * as React from 'react';
import BackdropStyled from './BackdropStyled';
import { Backdrop as MaterialBackdrop } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
    open: boolean;
}

const Backdrop: React.FC<Props> = ({ 
    children,
    className,
    open = false,
    ...rest 
}) => (
    <BackdropStyled>
        <div className={['Backdrop', className && className].join(' ')} data-testid='Backdrop'>
            <MaterialBackdrop 
                open={open}
                {...rest}
            >
                {children}
            </MaterialBackdrop>            
        </div>
    </BackdropStyled>
);

export default Backdrop;
