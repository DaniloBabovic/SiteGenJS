class Page {

    constructor(siteGen, pageName) {

        this.siteGen = siteGen
        this.pageName = pageName
        this.posts = []
    }

    makePostBase() {

        let post = new PostBase(this)
        this.posts.push(post)
        return post
    }

    makePost() {

        let post = new Post(this)
        this.posts.push(post)
        return post
    }

    makePostSimple(title = 'Title', marginTop = 20) {

        let post = new PostSimple(this, title, marginTop)
        this.posts.push(post)
        return post
    }

    makePostFancyCode(title = 'Title', formTitle = '') {

        let post = new PostFancyCode(this, title, formTitle)
        this.posts.push(post)
        return post
    }

    makePostThreeColums(    titleOne = 'Title One',
                            titleTwo = 'Title Two',
                            titleThree = 'Title Three') {

        let post = new PostThreeColums(this, titleOne, titleTwo, titleThree)
        this.posts.push(post)
        return post
    }

    makeTitle(titleText = 'Title', backgroundColor = 'rgba(0, 63, 63, 0.8)') {
        let title = new TitleBig(this.siteGen, titleText, backgroundColor)
        this.posts.push(title)
        return title
    }

    insert() {

        for (let i = 0; i < this.posts.length; i++)
        {
            this.posts[i].insert()
        }
    }
}

class PageContent {

    constructor(siteGen) {

        this.siteGen = siteGen
        this.pageName = siteGen.pageNames[0]
        this.page = siteGen.makePage(this.pageName)
    }
}
