import * as React from 'react';
import CircularProgressStyled from './CircularProgressStyled';
import { CircularProgress as MaterialCircularProgress } from '@material-ui/core';

interface Props 
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
