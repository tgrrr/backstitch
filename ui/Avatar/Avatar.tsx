import * as React from 'react';
import AvatarStyled from './AvatarStyled';
import { Avatar as MaterialAvatar } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Avatar: React.FC<Props> = ({ children, className, ...rest }) => (
    <AvatarStyled>
        <div className={['Avatar', className && className].join(' ')} data-testid='Avatar'>
            <MaterialAvatar {...rest}>
                {children}
            </MaterialAvatar>            
        </div>
    </AvatarStyled>
);

export default Avatar;
