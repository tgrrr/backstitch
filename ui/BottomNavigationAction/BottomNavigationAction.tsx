import * as React from 'react';
import BottomNavigationActionStyled from './BottomNavigationActionStyled';
import { BottomNavigationAction as MaterialBottomNavigationAction } from '@material-ui/core';

interface Props {
    className?: string;
}

const BottomNavigationAction: React.FC<Props> = ({ children, className, ...rest }) => (
    <BottomNavigationActionStyled>
        <div className={['Bottomnavigationaction', className && className].join(' ')} data-testid='Bottomnavigationaction'>
            <MaterialBottomNavigationAction {...rest} />           
        </div>
    </BottomNavigationActionStyled>
);

export default BottomNavigationAction;
