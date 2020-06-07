import * as React from 'react';
import ToolbarStyled from './ToolbarStyled';
import { Toolbar as MaterialToolbar } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Toolbar: React.FC<Props> = ({ children, className, ...rest }) => (
    <ToolbarStyled>
        <div className={['Toolbar', className && className].join(' ')} data-testid='Toolbar'>
            <MaterialToolbar {...rest}>
                {children}
            </MaterialToolbar>            
        </div>
    </ToolbarStyled>
);

export default Toolbar;
