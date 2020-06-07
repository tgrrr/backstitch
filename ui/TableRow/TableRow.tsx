import * as React from 'react';
import TableRowStyled from './TableRowStyled';
import { TableRow as MaterialTableRow } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const TableRow: React.FC<Props> = ({ children, className, ...rest }) => (
    <TableRowStyled>
        <div className={['Tablerow', className && className].join(' ')} data-testid='Tablerow'>
            <MaterialTableRow {...rest}>
                {children}
            </MaterialTableRow>            
        </div>
    </TableRowStyled>
);

export default TableRow;
