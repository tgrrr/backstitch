import * as React from 'react';
import CardActionsStyled from './CardActionsStyled';
import { CardActions as MaterialCardActions } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const CardActions: React.FC<Props> = ({ children, className, ...rest }) => (
    <CardActionsStyled>
        <div className={['Cardactions', className && className].join(' ')} data-testid='Cardactions'>
            <MaterialCardActions {...rest}>
                {children}
            </MaterialCardActions>            
        </div>
    </CardActionsStyled>
);

export default CardActions;
