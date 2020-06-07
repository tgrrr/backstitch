import * as React from 'react';
import FabStyled from './FabStyled';
import { Fab as MaterialFab } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Fab: React.FC<Props> = ({ children, className, ...rest }) => (
    <FabStyled>
        <div className={['Fab', className && className].join(' ')} data-testid='Fab'>
            <MaterialFab {...rest}>
                {children}
            </MaterialFab>            
        </div>
    </FabStyled>
);

export default Fab;
