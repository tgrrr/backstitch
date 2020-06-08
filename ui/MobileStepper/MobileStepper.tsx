import * as React from 'react';
import MobileStepperStyled from './MobileStepperStyled';
import MaterialMobileStepper, {
    MobileStepperProps as MaterialMobileStepperProps,
} from '@material-ui/core/MobileStepper';
import { LinearProgressProps } from '@material-ui/core/LinearProgress';

interface Props 
    extends MaterialMobileStepperProps
        // Uncomment these lines to disable the MobileStepperProps props:
        // , Omit<
        // MaterialMobileStepperProps,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {
        className?: string;
        steps: number;
        backButton: React.ReactNode;
        nextButton: React.ReactNode;
        LinearProgressProps?: Partial<LinearProgressProps>;
    }


const MobileStepper: React.FC<Props> = ({ 
    backButton,
    nextButton,
    className, 
    steps, 
    ...rest 
}) => (
    <MobileStepperStyled>
        <div className={['Mobilestepper', className && className].join(' ')} data-testid='Mobilestepper'>
            <MaterialMobileStepper 
                backButton={backButton}
                nextButton={nextButton}
                steps={steps}
                {...rest}
            />
        </div>
    </MobileStepperStyled>
);

export default MobileStepper;
