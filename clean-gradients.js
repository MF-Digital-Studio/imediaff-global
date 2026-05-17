const fs = require('fs');
const path = require('path');

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

    content = content.replace(/from-\[#2563EB\] via-\[#2563EB\] to-\[#2563EB\]/g, 'from-[#2563EB] to-[#16A34A]');
    content = content.replace(/from-\[#2563EB\] to-\[#2563EB\]/g, 'from-[#2563EB] to-[#16A34A]');
    content = content.replace(/rgba\(255,107,45/g, 'rgba(37,99,235'); // replace shadow rgb

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
}
