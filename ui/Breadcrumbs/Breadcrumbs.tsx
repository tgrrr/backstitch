import * as React from 'react';
import BreadcrumbsStyled from './BreadcrumbsStyled';
import { Breadcrumbs as MaterialBreadcrumbs } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Breadcrumbs: React.FC<Props> = ({ children, className, ...rest }) => (
    <BreadcrumbsStyled>
        <div className={['Breadcrumbs', className && className].join(' ')} data-testid='Breadcrumbs'>
            <MaterialBreadcrumbs {...rest}>
                {children}
            </MaterialBreadcrumbs>            
        </div>
    </BreadcrumbsStyled>
);

export default Breadcrumbs;
