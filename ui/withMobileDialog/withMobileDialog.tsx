import * as React from 'react';
import withMobileDialogStyled from './withMobileDialogStyled';
import { withMobileDialog as MaterialwithMobileDialog } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const withMobileDialog: React.FC<Props> = ({ children, className, ...rest }) => (
    <withMobileDialogStyled>
        <div className={['Withmobiledialog', className && className].join(' ')} data-testid='Withmobiledialog'>
            <MaterialwithMobileDialog {...rest}>
                {children}
            </MaterialwithMobileDialog>            
        </div>
    </withMobileDialogStyled>
);

export default withMobileDialog;
