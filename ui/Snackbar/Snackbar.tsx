import * as React from 'react';
import SnackbarStyled from './SnackbarStyled';
import { Snackbar as MaterialSnackbar } from '@material-ui/core';

interface Props {
    children?: React.ReactElement<any, any>;
    className?: string;
}

const Snackbar: React.FC<Props> = ({ children, className, ...rest }) => (
    <SnackbarStyled>
        <div className={['Snackbar', className && className].join(' ')} data-testid='Snackbar'>
            <MaterialSnackbar {...rest}>
                {children}
            </MaterialSnackbar>            
        </div>
    </SnackbarStyled>
);

export default Snackbar;
