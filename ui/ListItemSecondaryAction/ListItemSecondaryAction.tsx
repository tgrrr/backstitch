import * as React from 'react';
import ListItemSecondaryActionStyled from './ListItemSecondaryActionStyled';
import { ListItemSecondaryAction as MaterialListItemSecondaryAction } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const ListItemSecondaryAction: React.FC<Props> = ({ children, className, ...rest }) => (
    <ListItemSecondaryActionStyled>
        <div className={['Listitemsecondaryaction', className && className].join(' ')} data-testid='Listitemsecondaryaction'>
            <MaterialListItemSecondaryAction {...rest}>
                {children}
            </MaterialListItemSecondaryAction>            
        </div>
    </ListItemSecondaryActionStyled>
);

export default ListItemSecondaryAction;
