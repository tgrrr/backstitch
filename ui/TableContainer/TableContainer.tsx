import * as React from 'react';
import TableContainerStyled from './TableContainerStyled';
import { TableContainer as MaterialTableContainer } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const TableContainer: React.FC<Props> = ({ children, className, ...rest }) => (
    <TableContainerStyled>
        <div className={['Tablecontainer', className && className].join(' ')} data-testid='Tablecontainer'>
            <MaterialTableContainer {...rest}>
                {children}
            </MaterialTableContainer>            
        </div>
    </TableContainerStyled>
);

export default TableContainer;
