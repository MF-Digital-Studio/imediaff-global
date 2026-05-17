const fs = require('fs');
const path = require('path');

const colors = [
    { from: /#2563EB/gi, to: '#2563EB' },
    { from: /#2563EB/gi, to: '#2563EB' },
    { from: /#2563EB/gi, to: '#2563EB' }
];

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
                results = results.concat(walk(filePath));
            }
        } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.css')) {
            results.push(filePath);
        }
    }
    return results;
}

const files = walk('.');

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    for (const c of colors) {
        content = content.replace(c.from, c.to);
    }

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
}
