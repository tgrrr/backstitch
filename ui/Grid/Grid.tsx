import * as React from 'react';
import GridStyled from './GridStyled';
import { Grid as MaterialGrid } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Grid: React.FC<Props> = ({ children, className, ...rest }) => (
    <GridStyled>
        <div className={['Grid', className && className].join(' ')} data-testid='Grid'>
            <MaterialGrid {...rest}>
                {children}
            </MaterialGrid>            
        </div>
    </GridStyled>
);

export default Grid;
