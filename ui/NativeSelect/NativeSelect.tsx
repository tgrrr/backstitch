import * as React from 'react';
import NativeSelectStyled from './NativeSelectStyled';
import { NativeSelect as MaterialNativeSelect } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const NativeSelect: React.FC<Props> = ({ children, className, ...rest }) => (
    <NativeSelectStyled>
        <div className={['Nativeselect', className && className].join(' ')} data-testid='Nativeselect'>
            <MaterialNativeSelect {...rest}>
                {children}
            </MaterialNativeSelect>            
        </div>
    </NativeSelectStyled>
);

export default NativeSelect;
