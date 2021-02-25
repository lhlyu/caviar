const execa = require('execa')

async function buildAll() {
    await execa('yarn', ['workspace', '@lhlyu/caviar', 'run', 'dev'], { stdio: 'inherit' })
    await execa('yarn', ['workspace', '@lhlyu/hook', 'run', 'dev'], { stdio: 'inherit' })
}

buildAll()
