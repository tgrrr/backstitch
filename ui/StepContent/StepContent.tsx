import * as React from 'react';
import StepContentStyled from './StepContentStyled';
import { StepContent as MaterialStepContent } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const StepContent: React.FC<Props> = ({ children, className, ...rest }) => (
    <StepContentStyled>
        <div className={['Stepcontent', className && className].join(' ')} data-testid='Stepcontent'>
            <MaterialStepContent {...rest}>
                {children}
            </MaterialStepContent>            
        </div>
    </StepContentStyled>
);

export default StepContent;
