import * as React from 'react';
import TabScrollButtonStyled from './TabScrollButtonStyled';
import { TabScrollButton as MaterialTabScrollButton } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const TabScrollButton: React.FC<Props> = ({ children, className, ...rest }) => (
    <TabScrollButtonStyled>
        <div className={['Tabscrollbutton', className && className].join(' ')} data-testid='Tabscrollbutton'>
            <MaterialTabScrollButton {...rest}>
                {children}
            </MaterialTabScrollButton>            
        </div>
    </TabScrollButtonStyled>
);

export default TabScrollButton;
