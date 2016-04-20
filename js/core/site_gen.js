class SiteGen {

    constructor(pageNames) {

        this.headerDiv = document.getElementById("header_div");
        this.pageDiv = document.getElementById("page_div");
        this.bottomDiv = document.getElementById("bottom_div");

        this.pageNames = pageNames
        this.pages = []
        this.footer = null
        this.setPath()
        this.header = null
    }

    setPath() {
        this.filename = ''
        this.url = document.location.toString()
        let index  = this.url.lastIndexOf("/");

        if (index > 0) {

            this.filename = this.url.substring(index + 1);
        }
        else {

            this.filename = this.url
        }
        let indexRight  = this.filename.lastIndexOf("?");
        if (indexRight > 0) {
            this.filename = this.filename.substring(0, indexRight);
        }
    }

    createHeader(
                    logoRelativePath = "img/mapalchemy_logo.svg",
                    backgroundImage = 'url("img/header_background.png")',
                    siteName = "Python stuff",
                    logoWidth = -1,
                    logoHeight = -1
                )
    {
        this.header = new Header(
                                    this,
                                    logoRelativePath,
                                    backgroundImage,
                                    siteName,
                                    "100%",
                                    "100%"
                                )
        this.createFooter()
        return this.header
    }

    createFooter() {

        this.footer = new Footer(this)
    }

    makePage(pageName) {

        if(this.header == null) {

            alert("Error creeate page. Create header with this page name first ")
            return null
        }
        for(let i = 0; i < this.header.pages.length; i++)
        {
            if (this.header.pages[i] == pageName)
            {
                var page = new Page(this, pageName)
                this.pages.push(page)
                return page
            }
        }
        alert("Error creeate page. Create header with this page name first ")
        return null
    }

    showPage()
    {
        function show(header, currentPage, footer)
        {
            header.insert()
            currentPage.insert()
            footer.insert()
        }
        let pageNumber = location.search.split('page=')[1]
        if(pageNumber === undefined) pageNumber = "-1"

        this.currentPageIndex = parseInt(pageNumber)

        if (this.currentPageIndex < 1) {

            this.currentPageIndex = 0
            this.currentPage = this.pages[0]
            show(this.header, this.currentPage, this.footer)
        }
        else {
            if (this.currentPageIndex > (this.pages.length-1)) {
                alert("Page index out of range")
            }
            else {
                this.currentPage = this.pages[pageNumber]
                show(this.header, this.currentPage, this.footer)
            }
        }
    }

    pageChanged(pageName) {

        for (let i = 0; i < this.pageNames.length; i++)
        {
            if (pageName == this.pageNames[i])
            {
                this.pageDiv.innerHTML = ''
                this.currentPageIndex = i
                this.currentPage = this.pages[i]
                this.currentPage.insert()

                break
            }
        }

        this.header.updateSelected(this.currentPageIndex)
        this.footer.updateSelected(this.currentPageIndex)
    }
}
