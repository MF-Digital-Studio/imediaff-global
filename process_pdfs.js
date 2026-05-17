const fs = require('fs');

const text = fs.readFileSync('pdfs_out.txt', 'utf8');
const docs = text.split('---END_OF_PDF---').filter(d => d.trim().length > 0);

const metas = [
  {
    title: "What is Affiliate Marketing.",
    slug: "what-is-affiliate-marketing",
    category: "Affiliate Marketing",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    summary: "A comprehensive guide to understanding affiliate marketing and its potential earnings."
  },
  {
    title: "How to do Affiliate Marketing.",
    slug: "how-to-do-affiliate-marketing",
    category: "Affiliate Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    summary: "Discover the essential steps and tips for successfully starting and managing an affiliate marketing campaign."
  },
  {
    title: "What is an Influencer.",
    slug: "what-is-an-influencer",
    category: "Influencer Marketing",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
    summary: "An overview of what influencers are, how to become one, and the different categories based on follower count."
  },
  {
    title: "What is Influencer Marketing.",
    slug: "what-is-influencer-marketing",
    category: "Influencer Marketing",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop",
    summary: "Learn the fundamentals of influencer marketing, how to choose the right influencer, and run successful campaigns."
  }
];

const objects = docs.map((doc, i) => {
  const meta = metas[i];
  const blocks = doc.split(/\n\s*\n/).map(b => b.trim()).filter(b => b.length > 0);
  
  let html = '';
  let words = 0;
  
  let inList = false;

  blocks.forEach((block, index) => {
    let cleanBlock = block.replace(/\n/g, ' ').replace(/\s+/g, ' ');
    words += cleanBlock.split(' ').length;
    
    // Heading detection
    const isHeading = block.split('\n').length === 1 && cleanBlock.length < 100 && !cleanBlock.endsWith('.') && !cleanBlock.includes('•');
    
    if (isHeading) {
      if (inList) { html += `</ul>\n`; inList = false; }
      if (index === 0) {
        html += `\n<h2>${cleanBlock}</h2>\n`;
      } else {
        html += `\n<h3>${cleanBlock}</h3>\n`;
      }
    } else {
      if (cleanBlock.includes('•')) {
        if (!inList) { html += `\n<ul>\n`; inList = true; }
        const items = cleanBlock.split('•').filter(it => it.trim().length > 0);
        items.forEach(item => {
          html += `<li>${item.trim()}</li>\n`;
        });
      } else {
        if (inList) { html += `</ul>\n`; inList = false; }
        html += `\n<p>${cleanBlock}</p>\n`;
      }
    }
  });
  
  if (inList) { html += `</ul>\n`; }

  const readTime = Math.ceil(words / 200) + ' min read';

  return `  {
    slug: "${meta.slug}",
    title: "${meta.title}",
    category: "${meta.category}",
    date: "May 2026",
    readTime: "${readTime}",
    image: "${meta.image}",
    summary: "${meta.summary}",
    content: \`${html}\`
  }`;
});

const contentToAdd = ',\n' + objects.join(',\n');
const blogDataPath = 'lib/blog-data.ts';
let blogData = fs.readFileSync(blogDataPath, 'utf8');
blogData = blogData.replace(/];[\s\n]*$/, contentToAdd + '\n];\n');
fs.writeFileSync(blogDataPath, blogData);

console.log("Added 4 items. New length should be " + blogData.match(/slug:/g).length);
