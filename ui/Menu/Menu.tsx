import * as React from 'react';
import MenuStyled from './MenuStyled';
import { Menu as MaterialMenu } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
    open: boolean;
}

const Menu: React.FC<Props> = ({
    children,
    className,
    open = false,
    ...rest
}) => (
    <MenuStyled>
        <div className={['Menu', className && className].join(' ')} data-testid='Menu'>
            <MaterialMenu
                open={open}
                {...rest}
            >
                {children}
            </MaterialMenu>            
        </div>
    </MenuStyled>
);

export default Menu;
