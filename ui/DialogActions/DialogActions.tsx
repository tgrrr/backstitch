import * as React from 'react';
import DialogActionsStyled from './DialogActionsStyled';
import { DialogActions as MaterialDialogActions } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const DialogActions: React.FC<Props> = ({ children, className, ...rest }) => (
    <DialogActionsStyled>
        <div className={['Dialogactions', className && className].join(' ')} data-testid='Dialogactions'>
            <MaterialDialogActions {...rest}>
                {children}
            </MaterialDialogActions>            
        </div>
    </DialogActionsStyled>
);

export default DialogActions;
