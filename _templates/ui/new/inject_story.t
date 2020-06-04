# TODO:
---
inject: true
to: src/common/ui/stories/index.js
skip_if: src/common/ui/<%= name %>
prepend: true
---
import '../common/ui/<%= name %>/<%= name %>.story'