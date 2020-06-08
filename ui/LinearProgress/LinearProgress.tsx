import * as React from 'react';
import LinearProgressStyled from './LinearProgressStyled';
import MaterialLinearProgress, {
    LinearProgressProps as MaterialLinearProgressProps,
} from '@material-ui/core/LinearProgress';

interface Props
    extends MaterialLinearProgressProps
        // Uncomment these lines to disable the LinearProgressProps props:
        // , Omit<
        // MaterialLinearProgressProps,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {
    children?: React.ReactNode;
    className?: string;
}

const LinearProgress: React.FC<Props> = ({ children, className, ...rest }) => (
    <LinearProgressStyled>
        <div className={['Linearprogress', className && className].join(' ')} data-testid='Linearprogress'>
            <MaterialLinearProgress {...rest}>
                {children}
            </MaterialLinearProgress>            
        </div>
    </LinearProgressStyled>
);

export default LinearProgress;
