import * as React from 'react';
import StepperStyled from './StepperStyled';
import { Stepper as MaterialStepper } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Stepper: React.FC<Props> = ({ children, className, ...rest }) => (
    <StepperStyled>
        <div className={['Stepper', className && className].join(' ')} data-testid='Stepper'>
            <MaterialStepper {...rest}>
                {children}
            </MaterialStepper>            
        </div>
    </StepperStyled>
);

export default Stepper;
