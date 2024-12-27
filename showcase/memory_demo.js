// Demonstration of memory capabilities

async function memoryDemo() {
    // Create entities
    await create_entities({
        entities: [{
            name: 'project_demo',
            entityType: 'project',
            observations: [
                'Created to showcase Claude capabilities',
                'Includes multiple examples',
                'Uses MCP integration'
            ]
        }]
    });

    // Create relations
    await create_relations({
        relations: [{
            from: 'Claude',
            to: 'project_demo',
            relationType: 'created'
        }]
    });

    // Read graph
    const memory = await read_graph();
    return memory;
}