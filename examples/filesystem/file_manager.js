// Practical file system operations using MCP

class FileManager {
    constructor(basePath) {
        this.basePath = basePath;
    }

    async createStructure() {
        const paths = [
            'projects',
            'projects/active',
            'projects/archived',
            'data',
            'data/raw',
            'data/processed',
            'logs'
        ];

        for (const path of paths) {
            await window.fs.createDirectory(`${this.basePath}/${path}`);
        }
    }

    async saveLog(content) {
        const timestamp = new Date().toISOString();
        const logPath = `${this.basePath}/logs/${timestamp}.log`;
        await window.fs.writeFile(logPath, content);
        return logPath;
    }

    async archiveProject(projectName) {
        const sourcePath = `${this.basePath}/projects/active/${projectName}`;
        const destPath = `${this.basePath}/projects/archived/${projectName}`;
        
        // First verify project exists
        const sourceInfo = await window.fs.getFileInfo(sourcePath);
        if (!sourceInfo) throw new Error('Project not found');

        // Create archive entry
        await window.fs.writeFile(
            `${destPath}/archive_info.json`,
            JSON.stringify({
                archivedAt: new Date().toISOString(),
                originalPath: sourcePath
            })
        );

        // Move project files
        // Note: This is a simplified version, in reality we'd need to handle file copying
        await window.fs.move_file(sourcePath, destPath);

        // Log the operation
        await this.saveLog(`Archived project ${projectName}`);
    }

    async listStructure() {
        const structure = {};
        const paths = ['projects', 'data', 'logs'];

        for (const path of paths) {
            const fullPath = `${this.basePath}/${path}`;
            const contents = await window.fs.list_directory(fullPath);
            structure[path] = contents;
        }

        return structure;
    }
}

// Usage example:
/*
const manager = new FileManager('E:/claude');
await manager.createStructure();
await manager.saveLog('System initialized');
console.log(await manager.listStructure());
*/