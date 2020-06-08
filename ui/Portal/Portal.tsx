import * as React from 'react';
import PortalStyled from './PortalStyled';
import { Portal as MaterialPortal } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
    container?: React.ReactInstance | (() => React.ReactInstance | null) | null;
}

const Portal: React.FC<Props> = ({
    children,
    className,
    container,
    ...rest
}) => (
    <PortalStyled>
        <div className={['Portal', className && className].join(' ')} data-testid='Portal'>
            <MaterialPortal 
                container={container}
                {...rest}
            >
                {children}
            </MaterialPortal>            
        </div>
    </PortalStyled>
);

export default Portal;
