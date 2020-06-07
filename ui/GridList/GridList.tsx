import * as React from 'react';
import GridListStyled from './GridListStyled';
import { GridList as MaterialGridList } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const GridList: React.FC<Props> = ({ children, className, ...rest }) => (
    <GridListStyled>
        <div className={['Gridlist', className && className].join(' ')} data-testid='Gridlist'>
            <MaterialGridList {...rest}>
                {children}
            </MaterialGridList>            
        </div>
    </GridListStyled>
);

export default GridList;
