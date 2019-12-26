const url_for = hexo.extend.helper.get('url_for').bind(hexo);

hexo.extend.helper.register('url_for_post', function(path) {
    return url_for(path) + 'index.html';
});