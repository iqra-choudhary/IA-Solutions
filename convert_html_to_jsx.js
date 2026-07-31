const fs = require('fs');
const path = require('path');

const inputFile = process.argv[2];
const outputFile = process.argv[3];
const componentName = process.argv[4];

let html = fs.readFileSync(inputFile, 'utf-8');

let bodyMatch = html.match(/<\/header>([\s\S]*?)<footer>/i);
if (!bodyMatch) {
    bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/i);
}

let content = bodyMatch ? bodyMatch[1] : html;

content = content.replace(/class=/g, 'className=');
content = content.replace(/for=/g, 'htmlFor=');
content = content.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
content = content.replace(/stroke-width/g, 'strokeWidth');
content = content.replace(/stroke-dasharray/g, 'strokeDasharray');
content = content.replace(/stroke-linecap/g, 'strokeLinecap');
content = content.replace(/stroke-linejoin/g, 'strokeLinejoin');
content = content.replace(/<img([^>]+)>/g, (match, p1) => {
    if (!p1.endsWith('/')) {
        return `<img${p1} />`;
    }
    return match;
});
content = content.replace(/<br>/g, '<br />');
content = content.replace(/<hr>/g, '<hr />');
content = content.replace(/<input([^>]+)>/g, (match, p1) => {
    if (!p1.endsWith('/')) {
        return `<input${p1} />`;
    }
    return match;
});

content = content.replace(/style="([^"]*)"/g, (match, styleString) => {
    const styles = styleString.split(';').filter(s => s.trim());
    const styleObj = {};
    styles.forEach(s => {
        const [key, value] = s.split(':');
        if (key && value) {
            const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            styleObj[camelKey] = value.trim();
        }
    });
    return `style={${JSON.stringify(styleObj)}}`;
});

content = content.replace(/href="([^"]+)\.html(#?[^"]*)"/g, 'href="/$1$2"');
content = content.replace(/href="index\.html"/g, 'href="/"');
content = content.replace(/href="\/index"/g, 'href="/"');

// Add Image imports
content = content.replace(/<img(.*?)src="([^"]+)"(.*?)(\/?)>/gi, (match, before, src, after) => {
    return `<img${before}src="${src}"${after} />`;
});

const fileContent = `import Link from "next/link";
import Image from "next/image";

export default function ${componentName}() {
  return (
    <main>
      ${content}
    </main>
  );
}
`;

fs.writeFileSync(outputFile, fileContent, 'utf-8');
console.log(`Successfully wrote ${outputFile}`);
