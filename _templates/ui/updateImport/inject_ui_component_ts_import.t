---
inject: true
to: src/common/ui/<%= name %>/<%= name %>.tsx
after: import { <%= name %> as Material<%= name %> } from '@material-ui/core';
skip_if: import Material<%= name %>, {
message: "NOTE: this doesn't replace the import props, don't forget to delete the old import statement"
---
import Material<%= name %>, {
    <%= name %>Props as Material<%= name %>Props,
} from '@material-ui/core/<%= name %>';