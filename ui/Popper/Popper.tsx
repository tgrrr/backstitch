import * as React from 'react';
import PopperStyled from './PopperStyled';
import { Popper as MaterialPopper } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Popper: React.FC<Props> = ({ children, className, ...rest }) => (
    <PopperStyled>
        <div className={['Popper', className && className].join(' ')} data-testid='Popper'>
            <MaterialPopper {...rest}>
                {children}
            </MaterialPopper>            
        </div>
    </PopperStyled>
);

export default Popper;
