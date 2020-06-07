import * as React from 'react';
import RadioGroupStyled from './RadioGroupStyled';
import { RadioGroup as MaterialRadioGroup } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const RadioGroup: React.FC<Props> = ({ children, className, ...rest }) => (
    <RadioGroupStyled>
        <div className={['Radiogroup', className && className].join(' ')} data-testid='Radiogroup'>
            <MaterialRadioGroup {...rest}>
                {children}
            </MaterialRadioGroup>            
        </div>
    </RadioGroupStyled>
);

export default RadioGroup;
