// Demonstration of Brave Search capabilities

async function searchExample() {
    // Web search
    const webResults = await brave_web_search({
        query: 'Latest AI developments 2024',
        count: 5
    });

    // Local search
    const localResults = await brave_local_search({
        query: 'Best restaurants near Central Park',
        count: 3
    });

    return {
        web: webResults,
        local: localResults
    };
}