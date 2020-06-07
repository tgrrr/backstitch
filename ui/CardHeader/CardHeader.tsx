import * as React from 'react';
import CardHeaderStyled from './CardHeaderStyled';
import { CardHeader as MaterialCardHeader } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const CardHeader: React.FC<Props> = ({ children, className, ...rest }) => (
    <CardHeaderStyled>
        <div className={['Cardheader', className && className].join(' ')} data-testid='Cardheader'>
            <MaterialCardHeader {...rest}>
                {children}
            </MaterialCardHeader>            
        </div>
    </CardHeaderStyled>
);

export default CardHeader;
