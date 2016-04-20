class Page_1 extends PageContent{

    constructor(siteGen) {

        super(siteGen)
        this.page.makeTitle("Post to code manual", 'rgba(120, 0, 0, 1)')

        this.post_0()
        this.post_0_explain()

        this.post_1()
        this.post_1_explain()

        this.post_2()
        this.post_2_explain()

        this.post_3()
    }

    post_0() {

        let post = this.page.makePostSimple('1. Post simple', 40)
        let {t, l, c, nl, div, para} = new TextBuilder().allMethods()

        t('This post is created by')
        c('PostSimple()')
        t('class.')
        nl()
        t('Code for this component is presented in the post below.')
        post.addText(para())
    }

    post_0_explain() {

        var post = this.page.makePost()
        post.setTitle("1. Post simple explanation")
        post.setPostInfo(
                                        "post simple",
                                        '17 Apr 2016',
                                        'Danilo',
                                        'https://github.com/DaniloBabovic'
                                    )

        var code = new Code('js')
        let code_txt = `    let post = this.page.makePostSimple('Post simple example', 40)
    let tb = new TextBuilder()
    //Common methods for TextBuilder() class
    let {t, l, c, nl, div, para} = tb.allMethods()
    t('This post is created by')
    c('PostSimple()')
    t('class.')
    nl()
    t('Code for this component is presented in the post below.')
    post.addText(para())`

        code.add(code_txt)
        var txt = code.getText()
        post.addText(txt)

        let {t, l, c, nl, div, para} = new TextBuilder().allMethods()

        t('The first line is for the title and top margin.'); nl()
        c('let tb = new TextBuilder()')
        t('The purpose of TextBuilder is to transform text into html '); nl()

        c("t('...')"); t('is a short named method TextBuilder.text("text") used to insert plain text');nl()
        c("c('...')"); t('is a short named method TextBuilder.code("text") used to highlight code in text');nl()
        c("nl()"); t('new line');nl()
        c("div()"); t('to inject as div');nl()
        c("para()"); t('to inject as paragraph');nl()

        t('TextBuilder is the most used class.'); nl()
        t('Short methods make text content readable.')

        post.addText(para())

    }

    post_1() {

        var post = this.page.makePost()
        post.setTitle("2. Post example", 'https://github.com/DaniloBabovic')
        post.setPostInfo(
                                        "post",
                                        '17 Apr 2016',
                                        'Danilo',
                                        'https://github.com/DaniloBabovic/SiteGenJS'
                                    )
        post.addText('Hello world!')
        post.addText('<br><br>Code for this component is presented in the post below.')
    }

    post_1_explain() {

        var post = this.page.makePost()
        post.setTitle("2. Post explanation")
        post.setPostInfo(
                                        "post",
                                        '17 Apr 2016',
                                        'Danilo',
                                        'https://github.com/DaniloBabovic/SiteGenJS'
                                    )

        var code = new Code('js')
        let code_txt = `    var post = this.page.makePost()
    post.setTitle("2. Post example", 'https://github.com/DaniloBabovic/SiteGenJS')
    post.setPostInfo(
                        "post",
                        '17 Apr 2016',
                        'Danilo',
                        'https://github.com/DaniloBabovic/SiteGenJS'
                    )
    post.addText('Hello world!')
    post.addText('<br><br>Code for this component is presented in the post below.')`

        code.add(code_txt)
        var txt = code.getText()
        post.addText(txt)

        let {t, l, c, nl, div, para} = new TextBuilder().allMethods()

        t('Header in this kind of post is a link as well.'); nl()
        c(".setPostInfo(infoText = 'infoText', dateString = '', autor = '', autorLink = '')")
        t('has optional parameters except infoText.'); nl()
        t('You can write HTML in every type of post, like')
        t('br tag')
        t('in the last line.')

        post.addText(para())
    }

    post_2() {

        let post = this.page.makePostBase()
        let scale = 0.85
        let imgAndTxt = new ImageAndText(   'img/file_structure.png',
                                            795 * scale,
                                            306 * scale,
                                            'left',
                                            "File structure",
                                            70 )

        let text = `<p style="color: #424242; margin-top: 20px;">
            This page is saved in the page_1.js file.<br>
            Code for this image and text is in this.post_2() method.
            Code for this component is presented in the post below.
        </p>`

        imgAndTxt.text(text)
        post.addText('<div style="margin-top: 40px">' + imgAndTxt.getText() + '</div>')
    }

    post_2_explain() {

        var post = this.page.makePost()
        post.setTitle("2. Image and text explanation")
        post.setPostInfo(
                                        "Post base",
                                        '17 Apr 2016',
                                        'Danilo',
                                        'https://github.com/DaniloBabovic/SiteGenJS'
                                    )

        var code = new Code('js')
        let code_txt = `    let post = this.page.makePostBase()
    let scale = 0.85
    let imgAndTxt = new ImageAndText(   'img/file_structure.png',
                                        795 * scale,
                                        306 * scale,
                                        'left',
                                        "File structure",
                                        70 )

    let text = '<p style="color: #424242; margin-top: 20px;">
        This page is saved in the page_1.js file.<br>
        Code for this image and text is in this.post_2() method.
        Code for this component is presented in the post below.
    </p>'

    imgAndTxt.text(text)
    post.addText('<div style="margin-top: 40px">' + imgAndTxt.getText() + '</div>')`

        code.add(code_txt)
        var txt = code.getText()
        post.addText(txt)

        let {t, l, c, nl, div, para} = new TextBuilder().allMethods()

        c('ImageAndText');
        t('class purpose is to make HTML for the component above.')
        c('left')
        t('parameter is the side for the image.')
        c('PostBase()')
        t('is the simplest post in the Site Gen JS.')
        post.addText(para())

    }

    post_3() {

        let post = this.page.makePostSimple('More examples?', 40)
        let {t, l, c, nl, div, para} = new TextBuilder().allMethods()

        t('Take a look at page_1.js'); nl()
        t('That file contains this page.'); nl()
        t('This will be enough for start to make your site.'); nl(); nl()
        t('Happy coding!')
        post.addText(para())
    }
}
