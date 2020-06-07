import * as React from 'react';
import ListSubheaderStyled from './ListSubheaderStyled';
import { ListSubheader as MaterialListSubheader } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const ListSubheader: React.FC<Props> = ({ children, className, ...rest }) => (
    <ListSubheaderStyled>
        <div className={['Listsubheader', className && className].join(' ')} data-testid='Listsubheader'>
            <MaterialListSubheader {...rest}>
                {children}
            </MaterialListSubheader>            
        </div>
    </ListSubheaderStyled>
);

export default ListSubheader;
