import * as React from 'react';
import ListItemAvatarStyled from './ListItemAvatarStyled';
import MaterialListItemAvatar, {
    ListItemAvatarProps as MaterialListItemAvatarProps,
} from '@material-ui/core/ListItemAvatar';

interface Props
    extends MaterialListItemAvatarProps
        // Uncomment these lines to disable the ListItemAvatarProps props:
        // , Omit<
        // MaterialListItemAvatarProps,
        // | 'propToDisable1'
        // | 'propToDisable2'
        // > 
    {
    children: React.ReactElement;
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
