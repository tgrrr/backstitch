import * as React from 'react';
import HiddenStyled from './HiddenStyled';
import { Hidden as MaterialHidden } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Hidden: React.FC<Props> = ({ children, className, ...rest }) => (
    <HiddenStyled>
        <div className={['Hidden', className && className].join(' ')} data-testid='Hidden'>
            <MaterialHidden {...rest}>
                {children}
            </MaterialHidden>            
        </div>
    </HiddenStyled>
);

export default Hidden;
