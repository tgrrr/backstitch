import * as React from 'react';
import FilledInputStyled from './FilledInputStyled';
import { FilledInput as MaterialFilledInput } from '@material-ui/core';

interface Props {
    className?: string;
}

const FilledInput: React.FC<Props> = ({ className, ...rest }) => (
    <FilledInputStyled>
        <div className={['Filledinput', className && className].join(' ')} data-testid='Filledinput'>
            <MaterialFilledInput {...rest} />           
        </div>
    </FilledInputStyled>
);

export default FilledInput;
