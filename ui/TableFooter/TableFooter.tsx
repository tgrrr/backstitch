import * as React from 'react';
import TableFooterStyled from './TableFooterStyled';
import { TableFooter as MaterialTableFooter } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const TableFooter: React.FC<Props> = ({ children, className, ...rest }) => (
    <TableFooterStyled>
        <div className={['Tablefooter', className && className].join(' ')} data-testid='Tablefooter'>
            <MaterialTableFooter {...rest}>
                {children}
            </MaterialTableFooter>            
        </div>
    </TableFooterStyled>
);

export default TableFooter;
