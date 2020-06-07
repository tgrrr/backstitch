import * as React from 'react';
import CardContentStyled from './CardContentStyled';
import { CardContent as MaterialCardContent } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const CardContent: React.FC<Props> = ({ children, className, ...rest }) => (
    <CardContentStyled>
        <div className={['Cardcontent', className && className].join(' ')} data-testid='Cardcontent'>
            <MaterialCardContent {...rest}>
                {children}
            </MaterialCardContent>            
        </div>
    </CardContentStyled>
);

export default CardContent;
