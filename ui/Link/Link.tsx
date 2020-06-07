import * as React from 'react';
import LinkStyled from './LinkStyled';
import { Link as MaterialLink } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Link: React.FC<Props> = ({ children, className, ...rest }) => (
    <LinkStyled>
        <div className={['Link', className && className].join(' ')} data-testid='Link'>
            <MaterialLink {...rest}>
                {children}
            </MaterialLink>            
        </div>
    </LinkStyled>
);

export default Link;
