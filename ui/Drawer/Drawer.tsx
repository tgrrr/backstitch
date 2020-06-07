import * as React from 'react';
import DrawerStyled from './DrawerStyled';
import { Drawer as MaterialDrawer } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Drawer: React.FC<Props> = ({ children, className, ...rest }) => (
    <DrawerStyled>
        <div className={['Drawer', className && className].join(' ')} data-testid='Drawer'>
            <MaterialDrawer {...rest}>
                {children}
            </MaterialDrawer>            
        </div>
    </DrawerStyled>
);

export default Drawer;
