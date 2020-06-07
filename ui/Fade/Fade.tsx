import * as React from 'react';
import FadeStyled from './FadeStyled';
import { Fade as MaterialFade } from '@material-ui/core';

interface Props {
    children?: React.ReactElement<any, any>;
    className?: string;
}

const Fade: React.FC<Props> = ({ children, className, ...rest }) => (
    <FadeStyled>
        <div className={['Fade', className && className].join(' ')} data-testid='Fade'>
            <MaterialFade {...rest}>
                {children}
            </MaterialFade>            
        </div>
    </FadeStyled>
);

export default Fade;
