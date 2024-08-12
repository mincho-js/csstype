import { spawnSync } from 'child_process';

const result = spawnSync('git', ['status', '--porcelain'], { encoding: 'utf-8' });

if (result.stdout !== '') {
  console.error('Your working directory needs to be clean!');
  console.log(`output: ${result.stdout}`);
  process.exit(1);
}
