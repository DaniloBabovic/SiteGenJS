class Page_3 extends PageContent{

    constructor(siteGen) {
        super(siteGen)
        this.page.makeTitle("Download page", 'rgba(0, 180, 0, 1)')

        this.post_0()
    }

    post_0() {

        let stye_post = this.page.makePostSimple('GitHub', 40)
        let tb = new TextBuilder()

        let {t, l, c, nl, div, para} = tb.allMethods()

        l('GitHub', 'https://github.com/DaniloBabovic/SiteGenJS')
        t('is the main download place.'); nl()
        t('Feel free to send me a few thoughts: sitegenjs@gmail.com')
        stye_post.addText(para())
    }
}
