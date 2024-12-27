// Simple test of GitHub API functions

async function testGitHubAPI() {
    try {
        // List repositories
        const repos = await searchRepositories({
            query: 'MCP server',
            perPage: 5
        });
        console.log('Found repositories:', repos);
        
        // Create an issue
        const issue = await createIssue({
            title: 'Test API Integration',
            body: 'Testing our GitHub API integration through MCP!',
            labels: ['test', 'mcp']
        });
        console.log('Created issue:', issue);
        
    } catch (error) {
        console.error('Error:', error);
    }
}

// Run the test
testGitHubAPI();