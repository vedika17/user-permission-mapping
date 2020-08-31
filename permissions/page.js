const { ROLE } = require('../data');

function canViewPage(user, page){
    return (
        user.role === ROLE.ADMIN || 
        page.userId === user.id
    )
}

function canDeletePage(user, page){
    return page.userId === user.id
}

function scopedPages(user, pages){
    if(user.role === ROLE.ADMIN) return pages;
    return pages.filter(page => page.userId === user.id);
}

module.exports = {
    canViewPage,
    scopedPages,
    canDeletePage
}