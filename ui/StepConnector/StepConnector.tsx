import * as React from 'react';
import StepConnectorStyled from './StepConnectorStyled';
import { StepConnector as MaterialStepConnector } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const StepConnector: React.FC<Props> = ({ children, className, ...rest }) => (
    <StepConnectorStyled>
        <div className={['Stepconnector', className && className].join(' ')} data-testid='Stepconnector'>
            <MaterialStepConnector {...rest}>
                {children}
            </MaterialStepConnector>            
        </div>
    </StepConnectorStyled>
);

export default StepConnector;
