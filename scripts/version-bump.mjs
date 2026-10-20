// `npm version x.y.z` runs this: manifest.json follows package.json.
import fs from 'node:fs';

const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
manifest.version = process.env.npm_package_version;
fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2) + '\n');
