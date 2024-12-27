// Demonstration of filesystem operations

async function filesystemDemo() {
    // Create directory
    await window.fs.createDirectory('E:/claude/projects/demo');

    // Write file
    await window.fs.writeFile(
        'E:/claude/projects/demo/hello.txt',
        'Hello from Claude!'
    );

    // Read file
    const content = await window.fs.readFile(
        'E:/claude/projects/demo/hello.txt',
        { encoding: 'utf8' }
    );

    return content;
}