import * as React from 'react';
import GridListTileBarStyled from './GridListTileBarStyled';
import { GridListTileBar as MaterialGridListTileBar } from '@material-ui/core';

interface Props {
    className?: string;
}

const GridListTileBar: React.FC<Props> = ({ className, ...rest }) => (
    <GridListTileBarStyled>
        <div className={['Gridlisttilebar', className && className].join(' ')} data-testid='Gridlisttilebar'>
            <MaterialGridListTileBar {...rest} />          
        </div>
    </GridListTileBarStyled>
);

export default GridListTileBar;
