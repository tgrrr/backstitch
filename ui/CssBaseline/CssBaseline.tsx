import * as React from 'react';
import CssBaselineStyled from './CssBaselineStyled';
import { CssBaseline as MaterialCssBaseline } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const CssBaseline: React.FC<Props> = ({ children, className, ...rest }) => (
    <CssBaselineStyled>
        <div className={['Cssbaseline', className && className].join(' ')} data-testid='Cssbaseline'>
            <MaterialCssBaseline {...rest}>
                {children}
            </MaterialCssBaseline>            
        </div>
    </CssBaselineStyled>
);

export default CssBaseline;
