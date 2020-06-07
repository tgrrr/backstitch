import * as React from 'react';
import TypographyStyled from './TypographyStyled';
import { Typography as MaterialTypography } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const Typography: React.FC<Props> = ({ children, className, ...rest }) => (
    <TypographyStyled>
        <div className={['Typography', className && className].join(' ')} data-testid='Typography'>
            <MaterialTypography {...rest}>
                {children}
            </MaterialTypography>            
        </div>
    </TypographyStyled>
);

export default Typography;
