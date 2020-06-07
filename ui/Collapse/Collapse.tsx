import * as React from 'react';
import CollapseStyled from './CollapseStyled';
import { Collapse as MaterialCollapse } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Collapse: React.FC<Props> = ({ children, className, ...rest }) => (
    <CollapseStyled>
        <div className={['Collapse', className && className].join(' ')} data-testid='Collapse'>
            <MaterialCollapse {...rest}>
                {children}
            </MaterialCollapse>            
        </div>
    </CollapseStyled>
);

export default Collapse;
