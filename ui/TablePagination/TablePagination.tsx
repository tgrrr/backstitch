import * as React from 'react';
import TablePaginationStyled from './TablePaginationStyled';
import { TablePagination as MaterialTablePagination } from '@material-ui/core';

interface Props {
    count: number;
    onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;    children?: React.ReactNode;
    page: number;
    rowsPerPage: number;

    className?: string;    
}


const TablePagination: React.FC<Props> = ({
    className,
    count = 10,
    onChangePage,
    page = 0,
    rowsPerPage = 10,
    ...rest
}) => (
    <TablePaginationStyled>
        <div className={['Tablepagination', className && className].join(' ')} data-testid='Tablepagination'>
            <MaterialTablePagination
                onChangePage={onChangePage}
                count={count}
                page={page}
                rowsPerPage={rowsPerPage}
                {...rest}
            />           
        </div>
    </TablePaginationStyled>
);

export default TablePagination;
