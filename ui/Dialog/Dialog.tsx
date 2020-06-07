import * as React from 'react';
import DialogStyled from './DialogStyled';
import { Dialog as MaterialDialog } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
    open: boolean;

}

const Dialog: React.FC<Props> = ({
    children,
    className,
    open = false,
    ...rest 
}) => (
    <DialogStyled>
        <div className={['Dialog', className && className].join(' ')} data-testid='Dialog'>
            <MaterialDialog
                open={open}
                {...rest}
            >
                {children}
            </MaterialDialog>            
        </div>
    </DialogStyled>
);

export default Dialog;
