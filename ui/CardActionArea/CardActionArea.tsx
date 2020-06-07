import * as React from 'react';
import CardActionAreaStyled from './CardActionAreaStyled';
import { CardActionArea as MaterialCardActionArea } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const CardActionArea: React.FC<Props> = ({ children, className, ...rest }) => (
    <CardActionAreaStyled>
        <div className={['Cardactionarea', className && className].join(' ')} data-testid='Cardactionarea'>
            <MaterialCardActionArea {...rest}>
                {children}
            </MaterialCardActionArea>            
        </div>
    </CardActionAreaStyled>
);

export default CardActionArea;
