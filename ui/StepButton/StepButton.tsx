import * as React from 'react';
import StepButtonStyled from './StepButtonStyled';
import { StepButton as MaterialStepButton } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const StepButton: React.FC<Props> = ({ children, className, ...rest }) => (
    <StepButtonStyled>
        <div className={['Stepbutton', className && className].join(' ')} data-testid='Stepbutton'>
            <MaterialStepButton {...rest}>
                {children}
            </MaterialStepButton>            
        </div>
    </StepButtonStyled>
);

export default StepButton;
