import * as React from 'react';
import ButtonBaseStyled from './ButtonBaseStyled';
import { ButtonBase as MaterialButtonBase } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const ButtonBase: React.FC<Props> = ({ children, className, ...rest }) => (
    <ButtonBaseStyled>
        <div className={['Buttonbase', className && className].join(' ')} data-testid='Buttonbase'>
            <MaterialButtonBase {...rest}>
                {children}
            </MaterialButtonBase>            
        </div>
    </ButtonBaseStyled>
);

export default ButtonBase;
