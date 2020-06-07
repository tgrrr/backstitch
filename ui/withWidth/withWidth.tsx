import * as React from 'react';
import withWidthStyled from './withWidthStyled';
import { withWidth as MaterialwithWidth } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const withWidth: React.FC<Props> = ({ children, className, ...rest }) => (
    <withWidthStyled>
        <div className={['Withwidth', className && className].join(' ')} data-testid='Withwidth'>
            <MaterialwithWidth {...rest}>
                {children}
            </MaterialwithWidth>            
        </div>
    </withWidthStyled>
);

export default withWidth;
