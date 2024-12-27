# Available GitHub MCP Functions 📖

## Core Repository Operations

### Repository Management
- `create_repository` - Create new repositories
- `fork_repository` - Fork existing repositories
- `search_repositories` - Search through repositories

### File Operations
- `create_or_update_file` - Work with single files
- `push_files` - Push multiple files at once
- `get_file_contents` - Retrieve file contents

### Branch Management
- `create_branch` - Create new branches
- `list_commits` - View commit history

## Issue Management

### Core Issue Operations
- `create_issue` - Create new issues
- `get_issue` - Get issue details
- `list_issues` - List repository issues
- `update_issue` - Update existing issues
- `add_issue_comment` - Comment on issues

### Search Operations
- `search_code` - Search through code
- `search_issues` - Find issues and PRs
- `search_users` - Look up GitHub users

## Pull Requests
- `create_pull_request` - Create new PRs

---

# Function Examples

## List Commits Example
```javascript
const commits = await list_commits({
    owner: 'username',
    repo: 'repo-name',
    per_page: 10
});
```

## Update Issue Example
```javascript
await update_issue({
    owner: 'username',
    repo: 'repo-name',
    issue_number: 1,
    title: 'Updated Title',
    body: 'Updated description',
    state: 'open'
});
```

More examples will be added as we test each function! 🚀