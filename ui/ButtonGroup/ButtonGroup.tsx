import * as React from 'react';
import ButtonGroupStyled from './ButtonGroupStyled';
import { ButtonGroup as MaterialButtonGroup } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const ButtonGroup: React.FC<Props> = ({ children, className, ...rest }) => (
    <ButtonGroupStyled>
        <div className={['Buttongroup', className && className].join(' ')} data-testid='Buttongroup'>
            <MaterialButtonGroup {...rest}>
                {children}
            </MaterialButtonGroup>            
        </div>
    </ButtonGroupStyled>
);

export default ButtonGroup;
