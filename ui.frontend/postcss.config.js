module.exports = {
    plugins: [
        require('postcss-easy-import')({
            prefix: '_'
        }),
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-each'),
        require('postcss-inline-svg'),
        require('postcss-extend'),
        require('postcss-nested'),
    ]
}