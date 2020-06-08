import * as React from 'react';
import GridListTileBarStyled from './GridListTileBarStyled';
import MaterialGridListTileBar, {
    GridListTileBarProps as MaterialGridListTileBarProps,
} from '@material-ui/core/GridListTileBar';

interface Props
    extends MaterialGridListTileBarProps
        // Uncomment these lines to disable the GridListTileBarProps props:
        // , Omit<
        // MaterialGridListTileBarProps,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {
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
