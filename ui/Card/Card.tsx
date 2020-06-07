import * as React from 'react';
import CardStyled from './CardStyled';
import { Card as MaterialCard } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Card: React.FC<Props> = ({ children, className, ...rest }) => (
    <CardStyled>
        <div className={['Card', className && className].join(' ')} data-testid='Card'>
            <MaterialCard {...rest}>
                {children}
            </MaterialCard>            
        </div>
    </CardStyled>
);

export default Card;
