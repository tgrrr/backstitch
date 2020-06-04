---
to: src/common/ui/<%= name %>/<%= name %>.tsx
---
<% const comp = h.inflection.undasherize(name) -%>
import * as React from 'react';
import { <%= name %> as Material<%= name %> } from '@material-ui/core';

interface Props {
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
        return (
            <div className={[<%= comp %>, this.props.className].join(' ')} data-testid='<%= comp %>'>
                <Material<%= name %> {...props}>
                    {this.props.children}
                </Material<%= name %>>
            </div>
        );
    }
}
<% } else { -%>
const <%= name %>: React.FC<Props> = ({ children, className, ...props }) => (
    <div className=[<%= comp %>, className].join(' ')} data-testid='<%= comp %>'>
        <Material<%= name %> {...props}>
            {children}
        </Material<%= name %>>
    </div>
);
<% } -%>

export default <%= name %>;
