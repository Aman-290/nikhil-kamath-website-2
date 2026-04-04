const fs = require('fs');

const files = [
  { path: 'src/components/sections/Origins.jsx', id: 'section-origins' },
  { path: 'src/components/sections/TheFlush.jsx', id: 'section-flush' },
  { path: 'src/components/sections/TheFake.jsx', id: 'section-fake' },
  { path: 'src/components/sections/FivePhases.jsx', id: 'section-phases' },
  { path: 'src/components/sections/TheBigSpike.jsx', id: 'section-spike' },
  { path: 'src/components/sections/ThePlateau.jsx', id: 'section-plateau' },
  { path: 'src/components/sections/TheEcosystem.jsx', id: 'section-ecosystem' },
  { path: 'src/components/sections/TheConversations.jsx', id: 'section-conversations' },
  { path: 'src/components/sections/TheGiving.jsx', id: 'section-giving' },
  { path: 'src/components/sections/ThePerson.jsx', id: 'section-person' }
];

files.forEach(({path, id}) => {
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    if (!content.includes('id=\"' + id + '\"')) {
      content = content.replace(/<section/, '<section id=\"' + id + '\"');
      fs.writeFileSync(path, content);
      console.log('Added ' + id + ' to ' + path);
    }
  }
});
