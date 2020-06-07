import * as React from 'react';
import ListItemAvatarStyled from './ListItemAvatarStyled';
import { ListItemAvatar as MaterialListItemAvatar } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const ListItemAvatar: React.FC<Props> = ({ children, className, ...rest }) => (
    <ListItemAvatarStyled>
        <div className={['Listitemavatar', className && className].join(' ')} data-testid='Listitemavatar'>
            <MaterialListItemAvatar {...rest}>
                {children}
            </MaterialListItemAvatar>            
        </div>
    </ListItemAvatarStyled>
);

export default ListItemAvatar;
