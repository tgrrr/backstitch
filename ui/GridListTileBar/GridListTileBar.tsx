import * as React from 'react';
import GridListTileBarStyled from './GridListTileBarStyled';
import { GridListTileBar as MaterialGridListTileBar } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const GridListTileBar: React.FC<Props> = ({ children, className, ...rest }) => (
    <GridListTileBarStyled>
        <div className={['Gridlisttilebar', className && className].join(' ')} data-testid='Gridlisttilebar'>
            <MaterialGridListTileBar {...rest}>
                {children}
            </MaterialGridListTileBar>            
        </div>
    </GridListTileBarStyled>
);

export default GridListTileBar;
