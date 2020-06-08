import * as React from 'react';
import CircularProgressStyled from './CircularProgressStyled';
import MaterialCircularProgress, {
    CircularProgressProps as MaterialCircularProgressProps,
} from '@material-ui/core/CircularProgress';

interface Props 
    extends MaterialCircularProgressProps
    // Uncomment these lines to disable the CircularProgressProps props:
    // , Omit<
    // MaterialCircularProgressProps,
    // | 'checked'
    // | 'type'
    // > 
    {
        className?: string;
    }


const CircularProgress: React.FC<Props> = ({ className, ...rest }) => (
    <CircularProgressStyled>
        <div className={['Circularprogress', className && className].join(' ')} data-testid='Circularprogress'>
            <MaterialCircularProgress {...rest} />
        </div>
    </CircularProgressStyled>
);

export default CircularProgress;
