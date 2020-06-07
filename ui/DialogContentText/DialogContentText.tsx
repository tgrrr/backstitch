import * as React from 'react';
import DialogContentTextStyled from './DialogContentTextStyled';
import { DialogContentText as MaterialDialogContentText } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const DialogContentText: React.FC<Props> = ({ children, className, ...rest }) => (
    <DialogContentTextStyled>
        <div className={['Dialogcontenttext', className && className].join(' ')} data-testid='Dialogcontenttext'>
            <MaterialDialogContentText {...rest}>
                {children}
            </MaterialDialogContentText>            
        </div>
    </DialogContentTextStyled>
);

export default DialogContentText;
