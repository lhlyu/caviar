const { kebabCase } = require('lodash')

const Router = {
    Caviar: ['Welcome'],
    Hook: ['Letgo']
}

function getRouterConfig(langPrefix = '/') {
    return [
        {
            text: langPrefix === '/' ? 'Getting started' : '介绍',
            link: `${langPrefix}`
        },
        ...Object.entries(Router).map(([text, children]) => ({
            text,
            children: children.map(hookName => ({
                link: `${langPrefix}components/${kebabCase(hookName)}/`,
                text: hookName
            }))
        }))
    ]
}

module.exports = {
    getRouterConfig
}
