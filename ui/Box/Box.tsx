import * as React from 'react';
import BoxStyled from './BoxStyled';
import { Box as MaterialBox } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Box: React.FC<Props> = ({ children, className, ...rest }) => (
    <BoxStyled>
        <div className={['Box', className && className].join(' ')} data-testid='Box'>
            <MaterialBox {...rest}>
                {children}
            </MaterialBox>            
        </div>
    </BoxStyled>
);

export default Box;
