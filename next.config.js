module.exports = {
    publicRuntimeConfig: {
        BACKEND_URL: process.env.BACKEND_URL,
    },
    trailingSlash: true,
    i18n: {
        locales: ['en'],
        defaultLocale: 'en',
        domains: [
            {
                domain: 'boatplans.ru',
                defaultLocale: 'ru',
                locales: ['ru'],
            },
        ],
    },
}