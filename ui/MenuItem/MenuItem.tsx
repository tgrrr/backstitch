import * as React from 'react';
import MenuItemStyled from './MenuItemStyled';
import { MenuItem as MaterialMenuItem } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const MenuItem: React.FC<Props> = ({ children, className, ...rest }) => (
    <MenuItemStyled>
        <div className={['Menuitem', className && className].join(' ')} data-testid='Menuitem'>
            <MaterialMenuItem {...rest}>
                {children}
            </MaterialMenuItem>            
        </div>
    </MenuItemStyled>
);

export default MenuItem;
