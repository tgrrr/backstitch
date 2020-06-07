import * as React from 'react';
import DialogContentStyled from './DialogContentStyled';
import { DialogContent as MaterialDialogContent } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const DialogContent: React.FC<Props> = ({ children, className, ...rest }) => (
    <DialogContentStyled>
        <div className={['Dialogcontent', className && className].join(' ')} data-testid='Dialogcontent'>
            <MaterialDialogContent {...rest}>
                {children}
            </MaterialDialogContent>            
        </div>
    </DialogContentStyled>
);

export default DialogContent;
