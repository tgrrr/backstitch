import * as React from 'react';
import DividerStyled from './DividerStyled';
import { Divider as MaterialDivider } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Divider: React.FC<Props> = ({ children, className, ...rest }) => (
    <DividerStyled>
        <div className={['Divider', className && className].join(' ')} data-testid='Divider'>
            <MaterialDivider {...rest}>
                {children}
            </MaterialDivider>            
        </div>
    </DividerStyled>
);

export default Divider;
