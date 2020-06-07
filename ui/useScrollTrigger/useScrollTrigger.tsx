import * as React from 'react';
import useScrollTriggerStyled from './useScrollTriggerStyled';
import { useScrollTrigger as MaterialuseScrollTrigger } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const useScrollTrigger: React.FC<Props> = ({ children, className, ...rest }) => (
    <useScrollTriggerStyled>
        <div className={['Usescrolltrigger', className && className].join(' ')} data-testid='Usescrolltrigger'>
            <MaterialuseScrollTrigger {...rest}>
                {children}
            </MaterialuseScrollTrigger>            
        </div>
    </useScrollTriggerStyled>
);

export default useScrollTrigger;
