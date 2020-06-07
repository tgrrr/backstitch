import * as React from 'react';
import StepStyled from './StepStyled';
import { Step as MaterialStep } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Step: React.FC<Props> = ({ children, className, ...rest }) => (
    <StepStyled>
        <div className={['Step', className && className].join(' ')} data-testid='Step'>
            <MaterialStep {...rest}>
                {children}
            </MaterialStep>            
        </div>
    </StepStyled>
);

export default Step;
