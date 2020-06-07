import * as React from 'react';
import PopoverStyled from './PopoverStyled';
import { Popover as MaterialPopover } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
    open: boolean;
}

const Popover: React.FC<Props> = ({
    children,
    className,
    open = false,
    ...rest
}) => (
    <PopoverStyled>
        <div className={['Popover', className && className].join(' ')} data-testid='Popover'>
            <MaterialPopover 
                open={open}
                {...rest}
            >
                {children}
            </MaterialPopover>            
        </div>
    </PopoverStyled>
);

export default Popover;
