const fs = require('fs');

const files = [
  'app/talent/talent-client-page.tsx',
  'app/talent/cee/page.tsx',
  'app/talent/gulf/page.tsx',
  'app/talent/turkey/page.tsx',
  'app/talent/azerbaijan/page.tsx'
];

function processSection(sectionHtml, index, allSections) {
  const isA = (html) => {
    return html.includes('font-display text-[clamp(') || // Hero
           html.includes('Ready to Start Earning') || // CTA
           html.includes('Fair Play Policy');
  };

  const isB = (html) => {
    return html.includes('Eligibility') ||
           html.includes('How to Get Started') ||
           html.includes('Link Types') ||
           html.includes('Tracking Performance') ||
           html.includes('Agency Support') ||
           html.includes('General Program Rules') ||
           html.includes('Select Your Region'); // Let's make this B
  };

  const isC = (html) => {
    return html.includes('Earnings') ||
           html.includes('Commission') ||
           html.includes('Ranking & Segmentation') ||
           html.includes('Bonus') ||
           html.includes('Coin System') ||
           html.includes('Brand Offers') ||
           html.includes('Partnership') ||
           html.includes('How You Earn') ||
           html.includes('Segment Badges');
  };

  let type = 'A';
  if (isA(sectionHtml)) type = 'A';
  else if (isC(sectionHtml)) type = 'C';
  else if (isB(sectionHtml)) type = 'B';
  else type = 'A'; // default to A

  // 1. Update Section Backgrounds
  // First, remove existing bg- or border-b classes from the section tag
  let newHtml = sectionHtml;
  
  // Find the opening <section tag
  const sectionTagRegex = /<section\s+className="([^"]+)"/g;
  newHtml = newHtml.replace(sectionTagRegex, (match, classes) => {
    let cleanClasses = classes.replace(/bg-\S+/g, '').replace(/border-[a-z]+\s/g, '').replace(/border-[a-z]+"$/g, '"');
    
    if (type === 'B') {
      cleanClasses = cleanClasses + ' bg-[#111111] border-y border-[#1f1f1f]';
    } else if (type === 'C') {
      cleanClasses = cleanClasses + ' bg-gradient-to-b from-[#0a0f1e] to-[#0d0d0d] border-b border-[#1a1a1a]';
    } else {
      // type A
      cleanClasses = cleanClasses + ' bg-[#000000] border-b border-[#1a1a1a]';
    }
    
    // clean up multiple spaces
    cleanClasses = cleanClasses.replace(/\s+/g, ' ').trim();
    return `<section className="${cleanClasses}"`;
  });

  // 2. Add Radial Glow between A -> C
  if (type === 'C' && index > 0) {
    const prevSection = allSections[index - 1];
    let prevType = 'A';
    if (isC(prevSection)) prevType = 'C';
    else if (isB(prevSection)) prevType = 'B';
    
    if (prevType === 'A') {
      // Insert glow right after <section...>
      newHtml = newHtml.replace(/(<section[^>]*>)/, `$1\n        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.06)_0%,transparent_70%)] pointer-events-none" />`);
    }
  }

  // 3. Card Improvements
  if (type === 'B') {
    // Replace border border-white/10 bg-white/5 or similar with Treatment B styles
    newHtml = newHtml.replace(/border border-[^\s"']+\/10 bg-[^\s"']+\/5/g, 'bg-[#1a1a1a] border border-[#2a2a2a] shadow-[0_4px_24px_rgba(0,0,0,0.4)]');
    newHtml = newHtml.replace(/bg-zinc-900/g, 'bg-[#1a1a1a] border border-[#2a2a2a] shadow-[0_4px_24px_rgba(0,0,0,0.4)]');
  } else if (type === 'C') {
    newHtml = newHtml.replace(/border border-[^\s"']+\/10 bg-[^\s"']+\/5/g, 'bg-[#0d1526] border border-[#1e2d4a] shadow-[0_4px_24px_rgba(37,99,235,0.08)]');
    newHtml = newHtml.replace(/bg-zinc-900/g, 'bg-[#0d1526] border border-[#1e2d4a] shadow-[0_4px_24px_rgba(37,99,235,0.08)]');
  }

  // 4. Accent Color Touches
  // "← All Regions" back link: #2563EB
  newHtml = newHtml.replace(/text-muted-foreground hover:text-white/g, 'text-[#2563EB] hover:text-[#1D4ED8]');
  
  // Section label tags (e.g. "/ TrendFam Partner Agency"): #2563EB
  newHtml = newHtml.replace(/text-\S+\s+mb-6/g, 'text-[#2563EB] mb-6'); // roughly targets the kickers

  // Numbered step indicators (01, 02, 03...): gradient text (#2563EB → #16A34A)
  newHtml = newHtml.replace(/text-white\/10/g, 'bg-gradient-to-r from-[#2563EB] to-[#16A34A] bg-clip-text text-transparent');
  newHtml = newHtml.replace(/text-zinc-800/g, 'bg-gradient-to-r from-[#2563EB] to-[#16A34A] bg-clip-text text-transparent');

  // Checkmark icons in eligibility lists: #16A34A
  newHtml = newHtml.replace(/<CheckCircle2 className="w-5 h-5 text-white"/g, '<CheckCircle2 className="w-5 h-5 text-[#16A34A]"');
  newHtml = newHtml.replace(/<Check className="w-5 h-5 text-[^"]+"/g, '<Check className="w-5 h-5 text-[#16A34A]"');
  newHtml = newHtml.replace(/<CheckCircle2 className="w-5 h-5 text-[^"]+"/g, '<CheckCircle2 className="w-5 h-5 text-[#16A34A]"');
  newHtml = newHtml.replace(/text-green-400/g, 'text-[#16A34A]');
  newHtml = newHtml.replace(/text-green-500/g, 'text-[#16A34A]');

  // Info/note box left-border accent: #2563EB
  newHtml = newHtml.replace(/border-blue-[0-9]+/g, 'border-[#2563EB]');
  newHtml = newHtml.replace(/bg-blue-[0-9]+\/10/g, 'bg-[#2563EB]/10');
  newHtml = newHtml.replace(/text-blue-[0-9]+/g, 'text-[#2563EB]');

  // 5. Tables
  // Header row: background #2563EB, text white
  // Even rows: background #0d1526, Odd rows: background #080d1a
  if (newHtml.includes('<table')) {
    // This is a bit tricky, let's just replace specific class names in th and td if they match typical tailwind table classes
    newHtml = newHtml.replace(/<thead[^>]*>/g, '<thead className="bg-[#2563EB] text-white">');
    newHtml = newHtml.replace(/<tr className="border-b border-white\/5">/g, '<tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]">');
    newHtml = newHtml.replace(/<tr\s*>/g, '<tr className="border-b border-[#1e2d4a] odd:bg-[#080d1a] even:bg-[#0d1526] text-[#e5e7eb]">');
  }

  // 6. Typography Accents (Gradient on 2-3 key section titles)
  if (type === 'C') {
    newHtml = newHtml.replace(/<h2([^>]*)>How You Earn<\/h2>/, '<h2$1><span className="text-transparent bg-[linear-gradient(135deg,#2563EB,#16A34A)] bg-clip-text">How You</span> Earn</h2>');
    newHtml = newHtml.replace(/<h2([^>]*)>Your Rank & Segment<\/h2>/, '<h2$1><span className="text-transparent bg-[linear-gradient(135deg,#2563EB,#16A34A)] bg-clip-text">Your Rank</span> & Segment</h2>');
    newHtml = newHtml.replace(/<h2([^>]*)>Bonus Opportunities<\/h2>/, '<h2$1><span className="text-transparent bg-[linear-gradient(135deg,#2563EB,#16A34A)] bg-clip-text">Bonus</span> Opportunities</h2>');
  }

  return newHtml;
}

for (const file of files) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    
    // Split by <section
    // To preserve the delimiter, we use a trick
    const parts = content.split(/(?=<section)/);
    
    // The first part is everything before the first <section
    let result = parts[0];
    
    const sections = parts.slice(1);
    
    for (let i = 0; i < sections.length; i++) {
      result += processSection(sections[i], i, sections);
    }
    
    fs.writeFileSync(file, result, 'utf8');
    console.log('Updated', file);
  }
}
