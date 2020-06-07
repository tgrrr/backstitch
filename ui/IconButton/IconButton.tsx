import * as React from 'react';
import IconButtonStyled from './IconButtonStyled';
import { IconButton as MaterialIconButton } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const IconButton: React.FC<Props> = ({ children, className, ...rest }) => (
    <IconButtonStyled>
        <div className={['Iconbutton', className && className].join(' ')} data-testid='Iconbutton'>
            <MaterialIconButton {...rest}>
                {children}
            </MaterialIconButton>            
        </div>
    </IconButtonStyled>
);

export default IconButton;
