import * as React from 'react';
import MenuStyled from './MenuStyled';
import { Menu as MaterialMenu } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Menu: React.FC<Props> = ({ children, className, ...rest }) => (
    <MenuStyled>
        <div className={['Menu', className && className].join(' ')} data-testid='Menu'>
            <MaterialMenu {...rest}>
                {children}
            </MaterialMenu>            
        </div>
    </MenuStyled>
);

export default Menu;
