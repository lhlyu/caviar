const execa = require('execa')

async function buildAll() {
    await execa('yarn', ['workspace', '@lhlyu/caviar', 'run', 'build'], { stdio: 'inherit' })
    await execa('yarn', ['workspace', '@lhlyu/hook', 'run', 'build'], { stdio: 'inherit' })
}

buildAll()
