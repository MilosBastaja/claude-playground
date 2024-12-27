# Common MCP GitHub Integration Errors 🐛

## Error Catalog

### 1. Content Encoding Error
```
Error: Invalid arguments: content.encoding: Required, content.content: Required
```
**Context**: Occurs when trying to create/update files
**Solution**: Need to properly format the content object with both content and encoding specified
**Example Fix**: TBD - Currently investigating proper format

### 2. Pull Request Creation Error
```
Error: MCP error -32603: Invalid arguments: merge_commit_sha: Expected string, received null
```
**Context**: Occurs when creating Pull Requests
**Solution**: Investigating proper PR creation parameters
**Status**: Active Investigation

## Tips for Debugging

1. Always check API response errors carefully
2. Document new errors as they occur
3. Keep track of successful operations for reference
4. Test solutions in isolation before implementing

## Successful Patterns

### Working Operations
- Repository creation ✅
- File addition (using push_files) ✅
- Branch creation ✅
- Issue creation ✅

---

This document will be updated as we discover and solve more issues! 🔍