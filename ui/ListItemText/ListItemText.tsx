import * as React from 'react';
import ListItemTextStyled from './ListItemTextStyled';
import { ListItemText as MaterialListItemText } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const ListItemText: React.FC<Props> = ({ children, className, ...rest }) => (
    <ListItemTextStyled>
        <div className={['Listitemtext', className && className].join(' ')} data-testid='Listitemtext'>
            <MaterialListItemText {...rest}>
                {children}
            </MaterialListItemText>            
        </div>
    </ListItemTextStyled>
);

export default ListItemText;
