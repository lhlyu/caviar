const base = process.env.NODE_ENV === 'production' ? '/' : ''

const sidebar = [
    {
        text: '卡片',
        children: [
            { text: 'CardA', link: '/components/cards/card-a/' },
            { text: 'CardB', link: '/components/cards/card-b/' }
        ]
    }
]

module.exports = {
    title: 'caviar',
    description: 'vue hooks',
    srcIncludes: ['./packages/caviar/src/components'],
    outDir: '../dist',
    base,
    themeConfig: {
        lang: 'zh-CN',
        lastUpdated: '最近更新',
        alias: {
            '@lhlyu/caviar': './packages/caviar/src/'
        },
        repo: 'lhlyu/caviar',
        repoLabel: 'Github',
        prevLink: true,
        nextLink: true,
        locales: {
            '/': {
                lang: 'zh-CN',
                title: 'caviar',
                description: 'vue hooks',
                label: '中文',
                selectText: 'Languages',
                nav: [
                    // { text: 'Guide', link: '/' },
                    // { text: 'Document', link: `/v1/` }
                ],
                sidebar
            }
        }
    }
}
