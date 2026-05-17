const fs = require('fs');
const path = require('path');

const gradients = [
    { from: /from-\[#2563EB\] via-\[#FA1702\] to-\[#2563EB\]/gi, to: 'from-[#2563EB] to-[#16A34A]' },
    { from: /from-\[#2563EB\] via-\[#2563EB\] to-\[#2563EB\]/gi, to: 'from-[#2563EB] to-[#16A34A]' },
    { from: /from-\[#2563EB\] to-\[#2563EB\]/gi, to: 'from-[#2563EB] to-[#16A34A]' },
    { from: /from-\[#2563EB\]\/10 via-\[#FA1702\]\/10 to-\[#2563EB\]\/10/gi, to: 'from-[#2563EB]/10 to-[#16A34A]/10' },
    { from: /from-\[#2563EB\]\/5 via-\[#FA1702\]\/5 to-\[#2563EB\]\/5/gi, to: 'from-[#2563EB]/5 to-[#16A34A]/5' },
    { from: /from-\[#2563EB\]\/20 to-\[#2563EB\]\/20/gi, to: 'from-[#2563EB]/20 to-[#16A34A]/20' },
    { from: /from-\[#2563EB\]\/8 to-transparent/gi, to: 'from-[#2563EB]/8 to-transparent' },
    { from: /bg-gradient-to-r from-\[#2563EB\]/g, to: 'bg-gradient-to-br from-[#2563EB]' },
    { from: /linear-gradient\(to right,\s*#2563EB,\s*#FA1702,\s*#2563EB,\s*#2563EB\)/gi, to: 'linear-gradient(135deg, #2563EB, #16A34A)' },
    { from: /linear-gradient\(90deg,\s*#2563EB\s*0%,\s*#2563EB\s*55%,\s*#2563EB\s*100%\)/gi, to: 'linear-gradient(135deg, #2563EB 0%, #16A34A 100%)' },
    { from: /linear-gradient\(135deg,\s*#2563EB,\s*#2563EB,\s*#2563EB\)/gi, to: 'linear-gradient(135deg, #2563EB, #16A34A)' },
    { from: /linear-gradient\(to bottom,\s*#2563EB,\s*#2563EB\)/gi, to: 'linear-gradient(to bottom, #2563EB, #16A34A)' },
    { from: /linear-gradient\(90deg,\s*#2563EB,\s*#2563EB,\s*#2563EB\)/gi, to: 'linear-gradient(135deg, #2563EB, #16A34A)' },
    { from: /rgba\(229,21,171/g, to: 'rgba(37,99,235' }, // #2563EB in rgb
];

const colors = [
    { from: /#2563EB/gi, to: '#2563EB' },
    { from: /#2563EB/gi, to: '#2563EB' },
    { from: /#2563EB/gi, to: '#2563EB' },
    { from: /#2563EB/gi, to: '#2563EB' }, // wait, maybe secondary green #16A34A if we want it to be green, but prompt says "Replace orange/amber text with #2563EB". So all individual accents become #2563EB
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

    for (const g of gradients) {
        content = content.replace(g.from, g.to);
    }
    for (const c of colors) {
        content = content.replace(c.from, c.to);
    }

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
}
