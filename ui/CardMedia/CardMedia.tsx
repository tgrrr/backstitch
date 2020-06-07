import * as React from 'react';
import CardMediaStyled from './CardMediaStyled';
import { CardMedia as MaterialCardMedia } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const CardMedia: React.FC<Props> = ({ children, className, ...rest }) => (
    <CardMediaStyled>
        <div className={['Cardmedia', className && className].join(' ')} data-testid='Cardmedia'>
            <MaterialCardMedia {...rest}>
                {children}
            </MaterialCardMedia>            
        </div>
    </CardMediaStyled>
);

export default CardMedia;
