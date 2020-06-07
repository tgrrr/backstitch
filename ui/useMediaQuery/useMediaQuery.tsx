import * as React from 'react';
import useMediaQueryStyled from './useMediaQueryStyled';
import { useMediaQuery as MaterialuseMediaQuery } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const useMediaQuery: React.FC<Props> = ({ children, className, ...rest }) => (
    <useMediaQueryStyled>
        <div className={['Usemediaquery', className && className].join(' ')} data-testid='Usemediaquery'>
            <MaterialuseMediaQuery {...rest}>
                {children}
            </MaterialuseMediaQuery>            
        </div>
    </useMediaQueryStyled>
);

export default useMediaQuery;
