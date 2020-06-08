import * as React from 'react';
import TabScrollButtonStyled from './TabScrollButtonStyled';
import { TabScrollButton as MaterialTabScrollButton } from '@material-ui/core';

interface Props {
    direction: 'left' | 'right';
    orientation: 'horizontal' | 'vertical';

    children?: React.ReactNode;
    className?: string;
}

const TabScrollButton: React.FC<Props> = ({
    direction = 'right',
    orientation = 'vertical',
    children,
    className,
    ...rest
}) => (
    <TabScrollButtonStyled>
        <div className={['Tabscrollbutton', className && className].join(' ')} data-testid='Tabscrollbutton'>
            <MaterialTabScrollButton
                direction={direction}
                orientation={orientation}
                {...rest}
            >
                {children}
            </MaterialTabScrollButton>            
        </div>
    </TabScrollButtonStyled>
);

export default TabScrollButton;
