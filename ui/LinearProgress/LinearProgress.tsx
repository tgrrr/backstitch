import * as React from 'react';
import LinearProgressStyled from './LinearProgressStyled';
import { LinearProgress as MaterialLinearProgress } from '@material-ui/core';

interface Props {
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
