class Footer {

    constructor(siteGen) {

        this.pages = siteGen.pageNames
        this.siteGen = siteGen
        this.bodyElement = siteGen.bodyElement
        this.backgroundColor = '#222222'

        this.siteName = siteGen.header.siteName

        this.logoRelativePath = siteGen.header.logoRelativePath
        this.logoWidth = siteGen.header.logoWidth
        this.logoHeight = siteGen.header.logoHeight

        this.links = ''

    }

    makefooterBody()
    {

        //style="max-width: 90%"
        this.html = `
            <div class="grid" >
                <div class="unit one-quarter center-on-mobiles">
                    <h1>
                        <a href="` + this.siteGen.filename + `">
                            <span class="sr-only">` + this.siteName + `</span>
                            <div id="logo_img_div_footer" style="position: relative; overflow: hidden;">
                                <img id= "logo_img_footer">
                            </div>
                        </a>
                    </h1>
                </div>
                <nav class="main-nav unit half hide-on-mobiles">
                    <ul id="footer_ul">
                        ` + this.links + `
                    </ul>
                </nav>
                <div    class="unit one-quarter center-on-mobiles"
                        style=" display: flex;
                                justify-content: center;
                                align-items: center;"
                >
                    <p>
                    The contents of this website are
                    © 2016 under the terms of the MIT License.
                    </p>
                </div>
            </div>`
    }

    onImageLoad()
    {

        let logoImgElement = document.getElementById("logo_img_footer")
        let logo_img_div = document.getElementById("logo_img_div_footer")
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
        //alert(" yo " + pageName)
    }

    insert() {

        this.makefooterBody()
        this.footer  = document.createElement("footer");
        this.footer.setAttribute("role", "banner");
        this.footer.style["width"] = '100%'

         this.footer.style["background-color"] = this.backgroundColor
        //this.footer.style["background-image"] = 'url("img/carbon_fibre.png")'
        //this.footer.style["background-image"] = 'url("img/large-leather.png")'
        //this.footer.style["background-repeat"] = "repeat-xy"

        this.footer.innerHTML = this.html
        this.bodyElement.appendChild(this.footer);

        this.loadLogo()

        this.ulElement = document.getElementById("footer_ul")
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
