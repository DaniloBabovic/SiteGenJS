class Header {

    constructor(siteGen, logoRelativePath, backgroundImage, siteName, logoWidth, logoHeight) {

        this.pages = siteGen.pageNames
        this.siteGen = siteGen
        this.bodyElement = siteGen.bodyElement
        this.siteName = siteName
        document.title = siteName

        this.logoRelativePath = logoRelativePath
        this.backgroundImage = backgroundImage

        this.logoWidth = logoWidth
        this.logoHeight = logoHeight

        this.links = ''

    }

    makeHeaderBody()
    {
        // max-width: 100%
        this.html = `
            <div class="grid" style="margin-top: 40px;">
                <div class="unit one-third center-on-mobiles">
                    <h1>
                        <a href="` + this.siteGen.filename + `">
                            <span class="sr-only">` + this.siteName + `</span>
                            <div id="logo_img_div" style="position: relative; overflow: hidden;">
                                <img id= "logo_img">
                            </div>
                        </a>
                    </h1>
                </div>
                <nav class="main-nav unit two-thirds hide-on-mobiles">
                    <ul id="header_ul">
                        ` + this.links + `
                    </ul>
                </nav>
                <div class="clear"></div>
            </div>`
    }

    onImageLoad()
    {

        let logoImgElement = document.getElementById("logo_img")
        let logo_img_div = document.getElementById("logo_img_div")
        logoImgElement.src = this.logo_img.src

        if ((this.logoWidth == -1) && (this.logoHeight == -1)){
            this.logoWidth = this.logo_img.width
            this.logoHeight = this.logo_img.height
        }
        else {
            logo_img_div.style.width = this.logoWidth
            logo_img_div.style.height = this.logoHeight

            logoImgElement.style.width = this.logoWidth
            logoImgElement.style.height = this.logoHeight
        }
    }

    loadLogo() {

        this.logo_img = new Image();
        this.logo_img.src = this.logoRelativePath;
        this.logo_img.onload = () => this.onImageLoad();
    }

    setPage(pageName) {

        this.pages.push(pageName)
    }

    onPageClick(pageName)
    {
        //do something extra
        //alert(pageName)
    }

    insert() {

        this.makeHeaderBody()
        this.header  = document.createElement("header");
        this.header.setAttribute("role", "banner");
        this.header.style["width"] = '100%'
        this.header.style["height"] = '138px'

        this.header.style["background-image"] = this.backgroundImage

        this.header.innerHTML = this.html
        this.bodyElement.appendChild(this.header);

        this.loadLogo()

        this.ulElement = document.getElementById("header_ul")
        function insertPage(ul, pageName, index, onClick, filename)
        {
            var li  = document.createElement("li");
            let href = filename + '?page=' + index
            if (index == siteGen.currentPageIndex) {

                li.innerHTML = `<li class="current">
                    <a href=` + href + `>` + pageName + `</a>
                    </li>`
            }
            else {

                li.innerHTML = `<li class="">
                    <a href=` + href + `>` + pageName + `</a>
                    </li>`
            }
            li.onclick = () => (onClick(pageName))
            li.style.cursor = 'pointer'
            ul.appendChild(li)
        }

        for(let i = 0; i < this.pages.length; i++)
        {
            let pageName = this.pages[i]
            insertPage  (   this.ulElement,
                            pageName,
                            i,
                            this.onPageClick,
                            this.siteGen.filename
                        )
        }
    }
}
