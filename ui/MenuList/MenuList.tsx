import * as React from 'react';
import MenuListStyled from './MenuListStyled';
import { MenuList as MaterialMenuList } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const MenuList: React.FC<Props> = ({ children, className, ...rest }) => (
    <MenuListStyled>
        <div className={['Menulist', className && className].join(' ')} data-testid='Menulist'>
            <MaterialMenuList {...rest}>
                {children}
            </MaterialMenuList>            
        </div>
    </MenuListStyled>
);

export default MenuList;
