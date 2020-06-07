import * as React from 'react';
import RadioStyled from './RadioStyled';
import { Radio as MaterialRadio } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Radio: React.FC<Props> = ({ children, className, ...rest }) => (
    <RadioStyled>
        <div className={['Radio', className && className].join(' ')} data-testid='Radio'>
            <MaterialRadio {...rest}>
                {children}
            </MaterialRadio>            
        </div>
    </RadioStyled>
);

export default Radio;
