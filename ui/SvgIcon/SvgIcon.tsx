import * as React from 'react';
import SvgIconStyled from './SvgIconStyled';
import { SvgIcon as MaterialSvgIcon } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const SvgIcon: React.FC<Props> = ({ children, className, ...rest }) => (
    <SvgIconStyled>
        <div className={['Svgicon', className && className].join(' ')} data-testid='Svgicon'>
            <MaterialSvgIcon {...rest}>
                {children}
            </MaterialSvgIcon>            
        </div>
    </SvgIconStyled>
);

export default SvgIcon;
