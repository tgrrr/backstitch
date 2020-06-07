import * as React from 'react';
import TablePaginationStyled from './TablePaginationStyled';
import { TablePagination as MaterialTablePagination } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const TablePagination: React.FC<Props> = ({ children, className, ...rest }) => (
    <TablePaginationStyled>
        <div className={['Tablepagination', className && className].join(' ')} data-testid='Tablepagination'>
            <MaterialTablePagination {...rest}>
                {children}
            </MaterialTablePagination>            
        </div>
    </TablePaginationStyled>
);

export default TablePagination;
