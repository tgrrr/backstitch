import * as React from 'react';
import GrowStyled from './GrowStyled';
import { Grow as MaterialGrow } from '@material-ui/core';

interface Props {
    children?: React.ReactElement<any, any>;
    className?: string;
}

const Grow: React.FC<Props> = ({ children, className, ...rest }) => (
    <GrowStyled>
        <div className={['Grow', className && className].join(' ')} data-testid='Grow'>
            <MaterialGrow {...rest}>
                {children}
            </MaterialGrow>            
        </div>
    </GrowStyled>
);

export default Grow;
