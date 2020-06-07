import * as React from 'react';
import ListItemIconStyled from './ListItemIconStyled';
import { ListItemIcon as MaterialListItemIcon } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const ListItemIcon: React.FC<Props> = ({ children, className, ...rest }) => (
    <ListItemIconStyled>
        <div className={['Listitemicon', className && className].join(' ')} data-testid='Listitemicon'>
            <MaterialListItemIcon {...rest}>
                {children}
            </MaterialListItemIcon>            
        </div>
    </ListItemIconStyled>
);

export default ListItemIcon;
