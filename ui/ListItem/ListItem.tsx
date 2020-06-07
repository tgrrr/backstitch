import * as React from 'react';
import ListItemStyled from './ListItemStyled';
import { ListItem as MaterialListItem } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const ListItem: React.FC<Props> = ({ children, className, ...rest }) => (
    <ListItemStyled>
        <div className={['Listitem', className && className].join(' ')} data-testid='Listitem'>
            <MaterialListItem {...rest}>
                {children}
            </MaterialListItem>            
        </div>
    </ListItemStyled>
);

export default ListItem;
