import * as React from 'react';
import StepLabelStyled from './StepLabelStyled';
import { StepLabel as MaterialStepLabel } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const StepLabel: React.FC<Props> = ({ children, className, ...rest }) => (
    <StepLabelStyled>
        <div className={['Steplabel', className && className].join(' ')} data-testid='Steplabel'>
            <MaterialStepLabel {...rest}>
                {children}
            </MaterialStepLabel>            
        </div>
    </StepLabelStyled>
);

export default StepLabel;
