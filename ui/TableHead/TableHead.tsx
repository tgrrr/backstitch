import * as React from 'react';
import TableHeadStyled from './TableHeadStyled';
import { TableHead as MaterialTableHead } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const TableHead: React.FC<Props> = ({ children, className, ...rest }) => (
    <TableHeadStyled>
        <div className={['Tablehead', className && className].join(' ')} data-testid='Tablehead'>
            <MaterialTableHead {...rest}>
                {children}
            </MaterialTableHead>            
        </div>
    </TableHeadStyled>
);

export default TableHead;
