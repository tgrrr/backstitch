import * as React from 'react';
import NoSsrStyled from './NoSsrStyled';
import { NoSsr as MaterialNoSsr } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const NoSsr: React.FC<Props> = ({ children, className, ...rest }) => (
    <NoSsrStyled>
        <div className={['Nossr', className && className].join(' ')} data-testid='Nossr'>
            <MaterialNoSsr {...rest}>
                {children}
            </MaterialNoSsr>            
        </div>
    </NoSsrStyled>
);

export default NoSsr;
