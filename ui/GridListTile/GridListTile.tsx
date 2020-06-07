import * as React from 'react';
import GridListTileStyled from './GridListTileStyled';
import { GridListTile as MaterialGridListTile } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const GridListTile: React.FC<Props> = ({ children, className, ...rest }) => (
    <GridListTileStyled>
        <div className={['Gridlisttile', className && className].join(' ')} data-testid='Gridlisttile'>
            <MaterialGridListTile {...rest}>
                {children}
            </MaterialGridListTile>            
        </div>
    </GridListTileStyled>
);

export default GridListTile;
