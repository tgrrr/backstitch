import * as React from 'react';
import BadgeStyled from './BadgeStyled';
import { Badge as MaterialBadge } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Badge: React.FC<Props> = ({ children, className, ...rest }) => (
    <BadgeStyled>
        <div className={['Badge', className && className].join(' ')} data-testid='Badge'>
            <MaterialBadge {...rest}>
                {children}
            </MaterialBadge>            
        </div>
    </BadgeStyled>
);

export default Badge;
