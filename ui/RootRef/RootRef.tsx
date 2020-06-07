import * as React from 'react';
import RootRefStyled from './RootRefStyled';
import { RootRef as MaterialRootRef } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const RootRef: React.FC<Props> = ({ children, className, ...rest }) => (
    <RootRefStyled>
        <div className={['Rootref', className && className].join(' ')} data-testid='Rootref'>
            <MaterialRootRef {...rest}>
                {children}
            </MaterialRootRef>            
        </div>
    </RootRefStyled>
);

export default RootRef;
