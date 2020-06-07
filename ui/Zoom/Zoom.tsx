import * as React from 'react';
import ZoomStyled from './ZoomStyled';
import { Zoom as MaterialZoom } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Zoom: React.FC<Props> = ({ children, className, ...rest }) => (
    <ZoomStyled>
        <div className={['Zoom', className && className].join(' ')} data-testid='Zoom'>
            <MaterialZoom {...rest}>
                {children}
            </MaterialZoom>            
        </div>
    </ZoomStyled>
);

export default Zoom;
