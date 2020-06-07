import * as React from 'react';
import TableSortLabelStyled from './TableSortLabelStyled';
import { TableSortLabel as MaterialTableSortLabel } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const TableSortLabel: React.FC<Props> = ({ children, className, ...rest }) => (
    <TableSortLabelStyled>
        <div className={['Tablesortlabel', className && className].join(' ')} data-testid='Tablesortlabel'>
            <MaterialTableSortLabel {...rest}>
                {children}
            </MaterialTableSortLabel>            
        </div>
    </TableSortLabelStyled>
);

export default TableSortLabel;
