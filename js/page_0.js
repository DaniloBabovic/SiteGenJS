class Page_0 extends PageContent{

    constructor(siteGen) {

        super(siteGen)
        this.page.makeTitle("Make your site using only pure Javascript")//, 'rgba(120, 0, 0, 1)'

        this.post_0()
        this.post_1()
        this.post_2()
        this.post_3()
        this.post_4()
        this.post_5()
        this.post_6()
        this.post_7()
    }

    post_0() {

        let post = this.page.makePostBase()
        let scale = 1
        let imgAndTxt = new ImageAndText(   'img/header_shot.png',
                                            649 * scale,
                                            218 * scale,
                                            'left',
                                            "Some Image",
                                            70 )

        let text = `<p style="color: #424242; margin-top: 20px;">
            This is code for header and title above. That simple!<br>
            To create your blog, small site or documentation, download this site and overwrite content.
        </p>`

        imgAndTxt.text(text)
        post.addText('<div style="margin-top: 40px">' + imgAndTxt.getText() + '</div>')
    }

    post_1() {

        let threePost =  this.page.makePostThreeColums('Edit anywhere', 'Run anywhere', 'Save anywhere')

        let text_builder_1 = threePost.getTextBuilderOne()
        let txt_1 = 'Browser and text editor are all that you need to create site like this'
        text_builder_1.text(txt_1)

        let text_builder_2 = threePost.getTextBuilderTwo()
        let txt_2 = 'No server needed! <br>You can run this site from file or form any Web server.'
        text_builder_2.text(txt_2)

        let text_builder_3 = threePost.getTextBuilderThree()
        let txt_3 = 'Paths are relative. You can save and run index.html from flash drive, phone or tablet storage.'
        text_builder_3.text(txt_3)
    }

    post_2() {

        let stye_post = this.page.makePostSimple('Beautiful style', 40)
        let tb = new TextBuilder()

        let {t, l, c, nl, div, para} = tb.allMethods()

        /*
            t:  .text(text);  l: .link(text, url); c: .code(text)
            nl: .newLine(); div: .getText(); para: .getTextAsParagraph()
        */

        t('I was searching for good looking static site generator for quite some time.')
        l('Jekyll', 'https://jekyllrb.com')
        t('static site generator was a most impressive for me.')
        c("css/screen.css")
        t(' style is Jekyll work with little modification. (MIT licence)')
        nl()

        t('This beautiful and readable fonts: ')
        c("css/font.css")
        c('folder: "fonts/..."')
        t('are made by')
        l('Google.', 'https://www.google.com/fonts')
        nl()
        nl()

        t("You don't need write style or components. Use existing one and take care about your content.")

        stye_post.addText(para())
    }

    post_3() {

        let cnsPost = this.page.makePostFancyCode(   "Fancy components",
                                                "Boring console looking great")
        cnsPost.addLine('~', '$', 'gem install jekyll')
        cnsPost.addLine('~', '$', 'jekyll new my-awesome-site')
        cnsPost.addLine('~', '$', 'cd my-awesome-site')
        cnsPost.addComment('# This is example')
        cnsPost.addComment("# Site Gen JS don't use console at all")
    }

    post_4() {

        var post = this.page.makePost()
        post.setTitle("Code syntax highlighter")
        post.setPostInfo(
                                        "Javascript",
                                        '17 Apr 2016',
                                        'Danilo',
                                        'https://github.com/DaniloBabovic/SiteGenJS'
                                    )

        let t = new TextBuilder()
        t.link('Rainbow', 'https://github.com/ccampbell/rainbow')
        t.text('syntax highlighter is embedded in Site Gen JS.')
        t.newLine()
        t.text('Code for fancy component above:')

        post.addText('<p>' + t.getText() + '</p>')

        var code = new Code('js')
        let code_txt = `function fancyComponent() {

    let post = page.makePostFancyCode(  "Fancy components",
                                        "Boring console looking great")
    post.addLine('~', "$", 'gem install jekyll')
    post.addLine('~', "$", 'jekyll new my-awesome-site')
    post.addLine('~', "$", 'cd my-awesome-site')
    post.addComment('# This is example')
    post.addComment("# Site Gen JS don't use console at all")
}
fancyComponent()`

        code.add(code_txt)
        var txt = code.getText()
        post.addText(txt)
    }

    post_5() {

        var post = this.page.makePost()
        post.setTitle("Method description")
        post.setPostInfo(
                            "Method",
                            '17 Apr 2016',
                            'Danilo',
                            'https://github.com/DaniloBabovic/SiteGenJS'
                        )

        post.addText('Metod description example from code above:')

        let metod = new MetodExplain()
        metod.addCodeLine(`cnsPost.addLine(
    blueText = '',
    brownText = '',
    whiteText = '
)`
        )
        metod.addCodeLine('cnsPost.addComment()')

        let tb = new TextBuilder()
        let {t, l, c, nl, div, para} = tb.allMethods()

        t('Metod')
        c('cnsPost.addCodeLine')
        t(`class`)
        c('Code')
        t(`are used for manual code highlighting. You can skip to next color parameter with`)
        c(`'',`)
        nl()

        t('Metod')
        c('cnsPost.addComment')
        t(`has only gray color.`)
        nl()
        t(`Use Rainbow for automatic syntax highlighting.`)

        metod.text(div())
        post.addText(metod.getText())
    }

    post_6() {

        let post = this.page.makePostSimple('Only JS', 40)
        let tb = new TextBuilder()
        let {t, l, c, nl, div, para} = tb.allMethods()

        t('All content in this page are saved in')
        c("main.js"); t('and'); c("page_0.js");
        t('files.')
        t('There is no need for css, html or any markup language. Existing css is great, take care about your content.')
        nl()
        t('No: database, npm, Angular, JQuery, node.js, Babel, Browserify, Promise, back end ...')
        t('All components gets data dynamicaly and self inject as ')
        c('&lt;section&gt;...&lt;/section&gt;')
        t('into page body element using client processor.'); nl()
        t('With basic ECMAScript 6 knowledge, there is no learning curve.')
        nl()
        t('However, you can write HTML instead text if you like or use all those libs.')
        nl()
        t('Our intention is to give you a choice NOT to use it, to make your site less dependable.')
        post.addText(para())
    }

    post_7() {

        var post = this.page.makePost()
        post.setTitle("Notes for documentation")
        post.setPostInfo("notes", '17 Apr 2016', 'Danilo')

        post.addText('<p>Four types of notes:</p>')

        let note = new Note('info', 'Info note')
        note.para('Note component can be: info, tip, warning or tool type. This one is info.')

        let txt = note.getText()
        post.addText(txt)

        let tb = new TextBuilder()
        let {t, l, c, nl, div, para} = tb.allMethods()

        t('... and more.')
        nl()
        l("SiteGenJS", "https://github.com/DaniloBabovic/SiteGenJS")
        t('is open and')
        l('MIT.', 'https://opensource.org/licenses/MIT')
        t('You can write your components and share if you like.')
        nl()
        t('For start, you can')
        l("download", "https://github.com/DaniloBabovic/SiteGenJS")
        t('and replace content of this page with your content.')
        post.addText(para())
    }
}
