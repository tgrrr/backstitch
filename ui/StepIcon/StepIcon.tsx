import * as React from 'react';
import StepIconStyled from './StepIconStyled';
import { StepIcon as MaterialStepIcon } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const StepIcon: React.FC<Props> = ({ children, className, ...rest }) => (
    <StepIconStyled>
        <div className={['Stepicon', className && className].join(' ')} data-testid='Stepicon'>
            <MaterialStepIcon {...rest}>
                {children}
            </MaterialStepIcon>            
        </div>
    </StepIconStyled>
);

export default StepIcon;
