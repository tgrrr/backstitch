import * as React from 'react';
import ChipStyled from './ChipStyled';
import { Chip as MaterialChip } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Chip: React.FC<Props> = ({ children, className, ...rest }) => (
    <ChipStyled>
        <div className={['Chip', className && className].join(' ')} data-testid='Chip'>
            <MaterialChip {...rest}>
                {children}
            </MaterialChip>            
        </div>
    </ChipStyled>
);

export default Chip;
