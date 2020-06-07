import * as React from 'react';
import BottomNavigationStyled from './BottomNavigationStyled';
import { BottomNavigation as MaterialBottomNavigation } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const BottomNavigation: React.FC<Props> = ({ children, className, ...rest }) => (
    <BottomNavigationStyled>
        <div className={['Bottomnavigation', className && className].join(' ')} data-testid='Bottomnavigation'>
            <MaterialBottomNavigation {...rest}>
                {children}
            </MaterialBottomNavigation>            
        </div>
    </BottomNavigationStyled>
);

export default BottomNavigation;
