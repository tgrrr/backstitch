import * as React from 'react';
import TableStyled from './TableStyled';
import { Table as MaterialTable } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Table: React.FC<Props> = ({ children, className, ...rest }) => (
    <TableStyled>
        <div className={['Table', className && className].join(' ')} data-testid='Table'>
            <MaterialTable {...rest}>
                {children}
            </MaterialTable>            
        </div>
    </TableStyled>
);

export default Table;
