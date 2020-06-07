import * as React from 'react';
import DialogTitleStyled from './DialogTitleStyled';
import { DialogTitle as MaterialDialogTitle } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const DialogTitle: React.FC<Props> = ({ children, className, ...rest }) => (
    <DialogTitleStyled>
        <div className={['Dialogtitle', className && className].join(' ')} data-testid='Dialogtitle'>
            <MaterialDialogTitle {...rest}>
                {children}
            </MaterialDialogTitle>            
        </div>
    </DialogTitleStyled>
);

export default DialogTitle;
