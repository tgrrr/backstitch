import * as React from 'react';
import PaperStyled from './PaperStyled';
import { Paper as MaterialPaper } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Paper: React.FC<Props> = ({ children, className, ...rest }) => (
    <PaperStyled>
        <div className={['Paper', className && className].join(' ')} data-testid='Paper'>
            <MaterialPaper {...rest}>
                {children}
            </MaterialPaper>            
        </div>
    </PaperStyled>
);

export default Paper;
