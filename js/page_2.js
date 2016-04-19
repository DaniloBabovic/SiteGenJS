class Page_2 extends PageContent{

    constructor(siteGen) {

        super(siteGen)
        this.page.makeTitle("Why creating a new site generator?", 'rgba(190, 190, 0, 1)')
        this.post_0()
    }

    post_0() {

        let post = this.page.makePostSimple('Reasons:', 40)
        let {t, l, c, nl, div, para} = new TextBuilder().allMethods()
        
        t('With ECMAScript 6 it is possible.'); nl()
        t('ECMAScript 6 reduce code footprint seriously. Now we can realy see page text content in the code.');nl();nl()
        t('Main reasons:'); nl()
        t(`When I need to write documentation, I don't want to waste time for tools setup.`); nl()
        post.addText(para())

        let note = new Note('info', 'Off line')
        note.para('I want to read documentation in offline enviroments.')
        post.addText(note.getText())
        let noteTip = new Note('tip', 'Less code')
        noteTip.para('This page has less then 30 lines of code including content.')
        post.addText(noteTip.getText())
    }
}
