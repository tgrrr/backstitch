import * as React from 'react';
import SnackbarContentStyled from './SnackbarContentStyled';
import { SnackbarContent as MaterialSnackbarContent } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const SnackbarContent: React.FC<Props> = ({ children, className, ...rest }) => (
    <SnackbarContentStyled>
        <div className={['Snackbarcontent', className && className].join(' ')} data-testid='Snackbarcontent'>
            <MaterialSnackbarContent {...rest}>
                {children}
            </MaterialSnackbarContent>            
        </div>
    </SnackbarContentStyled>
);

export default SnackbarContent;
