import * as React from 'react';
import PopoverStyled from './PopoverStyled';
import { Popover as MaterialPopover } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Popover: React.FC<Props> = ({ children, className, ...rest }) => (
    <PopoverStyled>
        <div className={['Popover', className && className].join(' ')} data-testid='Popover'>
            <MaterialPopover {...rest}>
                {children}
            </MaterialPopover>            
        </div>
    </PopoverStyled>
);

export default Popover;
