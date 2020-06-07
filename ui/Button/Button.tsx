import * as React from 'react';
import ButtonStyled from './ButtonStyled';
import { Button as MaterialButton } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Button: React.FC<Props> = ({ children, className, ...rest }) => (
    <ButtonStyled>
        <div className={['Button', className && className].join(' ')} data-testid='Button'>
            <MaterialButton {...rest}>
                {children}
            </MaterialButton>            
        </div>
    </ButtonStyled>
);

export default Button;
