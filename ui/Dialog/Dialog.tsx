import * as React from 'react';
import DialogStyled from './DialogStyled';
import { Dialog as MaterialDialog } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Dialog: React.FC<Props> = ({ children, className, ...rest }) => (
    <DialogStyled>
        <div className={['Dialog', className && className].join(' ')} data-testid='Dialog'>
            <MaterialDialog {...rest}>
                {children}
            </MaterialDialog>            
        </div>
    </DialogStyled>
);

export default Dialog;
