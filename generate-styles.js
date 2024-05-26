const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

exec('npx tailwindcss -o tailwind.css', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }

  const tailwindCss = fs.readFileSync(path.join(__dirname, 'tailwind.css'), 'utf8');
  const styles = tailwindCss
    .match(/(?<=\n)([^{\n]+)\s*{[^}]+}/g)
    .reduce((acc, rule) => {
      const [className, style] = rule.split(/(?<=^\S+)\s/);
      acc[className.trim()] = style
        .replace(/[{}]/g, '')
        .split(';')
        .reduce((styleAcc, prop) => {
          const [key, value] = prop.split(':').map((s) => s.trim());
          if (key) {
            styleAcc[key] = value;
          }
          return styleAcc;
        }, {});
      return acc;
    }, {});

  fs.writeFileSync(path.join(__dirname, 'src/styles.json'), JSON.stringify(styles, null, 2));
});
