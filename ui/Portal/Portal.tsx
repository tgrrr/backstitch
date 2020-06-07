import * as React from 'react';
import PortalStyled from './PortalStyled';
import { Portal as MaterialPortal } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Portal: React.FC<Props> = ({ children, className, ...rest }) => (
    <PortalStyled>
        <div className={['Portal', className && className].join(' ')} data-testid='Portal'>
            <MaterialPortal {...rest}>
                {children}
            </MaterialPortal>            
        </div>
    </PortalStyled>
);

export default Portal;
