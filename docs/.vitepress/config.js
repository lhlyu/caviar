const { getRouterConfig } = require('./router')
const { kebabCase } = require('lodash')
const { resolve } = require('path')

const base = process.env.NODE_ENV === 'production' ? '/' : ''

module.exports = {
    title: 'caviar',
    description: 'vue hooks',
    srcIncludes: ['./packages/caviar/src/components', './packages/hook/src/components'],
    outDir: '../dist',
    base,
    themeConfig: {
        lang: 'en-US',
        lastUpdated: '最近更新',
        alias: {
            '@lhlyu/caviar': resolve('./packages/caviar/src/'),
            '@lhlyu/hook': resolve('./packages/hook/src/')
        },
        repo: 'lhlyu/caviar',
        repoLabel: 'Github',
        prevLink: true,
        nextLink: true,
        locales: {
            '/': {
                lang: 'en-US',
                title: 'caviar',
                description: 'vue hooks',
                label: 'English',
                selectText: 'Languages',
                nav: [
                    { text: 'Guide', link: '/' },
                    { text: 'Document', link: `/v1/` }
                ],
                sidebar: getRouterConfig()
            }
        }
    }
}
