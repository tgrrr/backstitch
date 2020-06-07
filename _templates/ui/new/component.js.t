---
to: src/common/ui/<%= name %>/<%= name %>.tsx
---
<% const comp = h.inflection.undasherize(name) -%>
import * as React from 'react';
import <%= name %>Styled from './<%= name %>Styled';
import { <%= name %> as Material<%= name %> } from '@material-ui/core';

interface Props {
    name: string;
    children?: React.ReactNode;
    className?: string;
}

<% if(locals.stateful) { -%>
interface State {
    myStateValue?: boolean;
}

const INITIAL_STATE: State = {
    myStateValue: true,
};


class <%= name %> extends React.PureComponent<Props, State> {
    public state = INITIAL_STATE;

    public render() {

        const { className, children, ...rest } = this.props;

        return (
            <<%= name %>Styled>
                <div className={['<%= comp %>', className && {className}].join(' ')} data-testid='<%= comp %>'>
                    <Material<%= name %> name={name} {...rest}>
                        {children}
                    </Material<%= name %>>
                </div>
            </<%= name %>Styled>
        );
    }
}
<% } else { -%>
const <%= name %>: React.FC<Props> = ({ children, className, name, ...rest }) => (
    <<%= name %>Styled>
        <div className={['<%= comp %>', className && className].join(' ')} data-testid='<%= comp %>'>
            <Material<%= name %> name={name} {...rest}>
                {children}
            </Material<%= name %>>            
        </div>
    </<%= name %>Styled>
);
<% } -%>

export default <%= name %>;
