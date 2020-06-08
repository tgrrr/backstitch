import * as React from 'react';
import StepConnectorStyled from './StepConnectorStyled';
import MaterialStepConnector, {
    StepConnectorProps as MaterialStepConnectorProps,
} from '@material-ui/core/StepConnector';


interface Props
    extends MaterialStepConnectorProps
        // Uncomment these lines to disable the StepConnectorProps props:
        // , Omit<
        // MaterialStepConnectorProps,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {
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
