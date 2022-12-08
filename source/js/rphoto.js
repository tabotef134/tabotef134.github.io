function obcbo() {
    if (document.getElementById("page-header").getAttribute("style") == "background: url()" || document.getElementById("page-header").getAttribute("style") == null) {
        var background_urls = [
            ' http://lc-pm3CjG3f.cn-n1.lcfile.com/Yevx8X8iAHilgAr9dKGHbJwDvN16iOde/A.jpg ',
            ' http://lc-pm3CjG3f.cn-n1.lcfile.com/zEDN5kagCpnryBTqRrSzC6uVIxzbyQVU/B.jpg ',
            ' http://lc-pm3CjG3f.cn-n1.lcfile.com/mLIk5PqAueS0g1CdEdOQAgx0myIaa37U/I.jpg ' 
        ]
        var index = Math.floor((Math.random() * background_urls.length));
        var urlphoto = ('background-image:url(' + background_urls[index] + ')');
        document.getElementById("page-header").style = urlphoto;
    }
}