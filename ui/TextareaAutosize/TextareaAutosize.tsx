import * as React from 'react';
// import TextareaAutosizeStyled from './TextareaAutosizeStyled';
import { TextareaAutosize as MaterialTextareaAutosize } from '@material-ui/core';

interface Props {
    className?: string;
    rows?: number | string;
    rowsMax?: number | string;
    rowsMin?: number | string;
}

const TextareaAutosize: React.FC<Props> = ({
    className,
    rows,
    rowsMax,
    rowsMin,
    ...rest
}) => (
    // <TextareaAutosizeStyled>
        <div className={['Textareaautosize', className && className].join(' ')} data-testid='Textareaautosize'>
            <MaterialTextareaAutosize 
                rows={rows}
                rowsMax={rowsMax}
                rowsMin={rowsMin}
                {...rest}
            />
        </div>
    // </TextareaAutosizeStyled>
);

export default TextareaAutosize;
