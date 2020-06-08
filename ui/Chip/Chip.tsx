import * as React from 'react';
import ChipStyled from './ChipStyled';
import { Chip as MaterialChip } from '@material-ui/core';

interface Props {
    className?: string;
}

const Chip: React.FC<Props> = ({ children, className, ...rest }) => (
    <ChipStyled>
        <div className={['Chip', className && className].join(' ')} data-testid='Chip'>
            <MaterialChip {...rest} />          
        </div>
    </ChipStyled>
);

export default Chip;
