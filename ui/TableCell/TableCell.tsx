import * as React from 'react';
import TableCellStyled from './TableCellStyled';
import { TableCell as MaterialTableCell } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const TableCell: React.FC<Props> = ({ children, className, ...rest }) => (
    <TableCellStyled>
        <div className={['Tablecell', className && className].join(' ')} data-testid='Tablecell'>
            <MaterialTableCell {...rest}>
                {children}
            </MaterialTableCell>            
        </div>
    </TableCellStyled>
);

export default TableCell;
