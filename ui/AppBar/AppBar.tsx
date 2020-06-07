import * as React from 'react';
import AppBarStyled from './AppBarStyled';
import { AppBar as MaterialAppBar } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const AppBar: React.FC<Props> = ({ children, className, ...rest }) => (
    <AppBarStyled>
        <div className={['Appbar', className && className].join(' ')} data-testid='Appbar'>
            <MaterialAppBar {...rest}>
                {children}
            </MaterialAppBar>            
        </div>
    </AppBarStyled>
);

export default AppBar;
