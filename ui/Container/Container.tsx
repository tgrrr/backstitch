import * as React from 'react';
import ContainerStyled from './ContainerStyled';
import { Container as MaterialContainer } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Container: React.FC<Props> = ({ children, className, ...rest }) => (
    <ContainerStyled>
        <div className={['Container', className && className].join(' ')} data-testid='Container'>
            <MaterialContainer {...rest}>
                {children}
            </MaterialContainer>            
        </div>
    </ContainerStyled>
);

export default Container;
