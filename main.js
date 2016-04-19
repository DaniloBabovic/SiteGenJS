let siteGen = new SiteGen(["Home", "Manual", "Why?", "Download"])

siteGen.createHeader(  'img/sitegen_js.svg',
                        'url("img/header_background.png")',
                        'Site Gen JS')
new Page_0(siteGen)
new Page_1(siteGen)
new Page_2(siteGen)
new Page_3(siteGen)

siteGen.showPage()
