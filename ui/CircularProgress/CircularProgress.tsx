import * as React from 'react';
import CircularProgressStyled from './CircularProgressStyled';
import { CircularProgress as MaterialCircularProgress } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const CircularProgress: React.FC<Props> = ({ children, className, ...rest }) => (
    <CircularProgressStyled>
        <div className={['Circularprogress', className && className].join(' ')} data-testid='Circularprogress'>
            <MaterialCircularProgress {...rest}>
                {children}
            </MaterialCircularProgress>            
        </div>
    </CircularProgressStyled>
);

export default CircularProgress;
