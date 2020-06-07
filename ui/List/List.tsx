import * as React from 'react';
import ListStyled from './ListStyled';
import { List as MaterialList } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const List: React.FC<Props> = ({ children, className, ...rest }) => (
    <ListStyled>
        <div className={['List', className && className].join(' ')} data-testid='List'>
            <MaterialList {...rest}>
                {children}
            </MaterialList>            
        </div>
    </ListStyled>
);

export default List;
