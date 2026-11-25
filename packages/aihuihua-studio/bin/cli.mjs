#!/usr/bin/env node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.json'), 'utf8'));
const args = process.argv.slice(2);

function installSkill(destRoot) {
  const dest = path.join(destRoot, site.name);
  fs.mkdirSync(destRoot, { recursive: true });
  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of ['SKILL.md', 'README.md', 'install.sh', 'site.json', 'scripts']) {
    const src = path.join(ROOT, entry);
    if (fs.existsSync(src)) {
      fs.cpSync(src, path.join(dest, entry), { recursive: true });
    }
  }
  const studioPath = path.join(dest, 'scripts', 'studio.mjs');
  if (fs.existsSync(studioPath)) fs.chmodSync(studioPath, 0o755);
  console.log(`✓ 已安装 ${site.name} (${site.brand}) 到 ${dest}`);
  console.log(`在 AI 工具里说「用 ${site.brand} 画一张……」即可；也可以直接跑：node ${studioPath} login`);
}

if (args.length === 0 || args[0] === 'install') {
  const flags = new Set(args.slice(args[0] === 'install' ? 1 : 0));
  if (flags.has('--here')) {
    installSkill(path.join(process.cwd(), '.claude', 'skills'));
  } else if (flags.has('--agents')) {
    installSkill(path.join(os.homedir(), '.agents', 'skills'));
  } else {
    installSkill(path.join(os.homedir(), '.claude', 'skills'));
  }
} else {
  const res = spawnSync(process.execPath, [path.join(ROOT, 'scripts', 'studio.mjs'), ...args], {
    stdio: 'inherit',
  });
  process.exit(res.status ?? 1);
}
