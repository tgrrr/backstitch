import * as React from 'react';
import MobileStepperStyled from './MobileStepperStyled';
import { MobileStepper as MaterialMobileStepper } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
    steps: number;
}

const MobileStepper: React.FC<Props> = ({ 
    children, 
    className, 
    steps, 
    ...rest 
}) => (
    <MobileStepperStyled>
        <div className={['Mobilestepper', className && className].join(' ')} data-testid='Mobilestepper'>
            <MaterialMobileStepper {...rest}>
                {children}
            </MaterialMobileStepper>            
        </div>
    </MobileStepperStyled>
);

export default MobileStepper;
