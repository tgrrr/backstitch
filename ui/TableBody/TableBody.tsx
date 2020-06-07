import * as React from 'react';
import TableBodyStyled from './TableBodyStyled';
import { TableBody as MaterialTableBody } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const TableBody: React.FC<Props> = ({ children, className, ...rest }) => (
    <TableBodyStyled>
        <div className={['Tablebody', className && className].join(' ')} data-testid='Tablebody'>
            <MaterialTableBody {...rest}>
                {children}
            </MaterialTableBody>            
        </div>
    </TableBodyStyled>
);

export default TableBody;
