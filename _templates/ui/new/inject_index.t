---
inject: true
to: src/common/ui/index.ts
before: github.com/mui-org/material-ui/blob/master/packages/material-ui/src/index.js
skip_if: import <%= name %> from './<%= name %>/<%= name %>';
append: true
---
import <%= name %> from './<%= name %>/<%= name %>';