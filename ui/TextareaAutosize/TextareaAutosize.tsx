import * as React from 'react';
import TextareaAutosizeStyled from './TextareaAutosizeStyled';
import { TextareaAutosize as MaterialTextareaAutosize } from '@material-ui/core';

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const TextareaAutosize: React.FC<Props> = ({ children, className, ...rest }) => (
    <TextareaAutosizeStyled>
        <div className={['Textareaautosize', className && className].join(' ')} data-testid='Textareaautosize'>
            <MaterialTextareaAutosize {...rest}>
                {children}
            </MaterialTextareaAutosize>            
        </div>
    </TextareaAutosizeStyled>
);

export default TextareaAutosize;
