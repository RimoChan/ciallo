// ==UserScript==
// @name         Ciallo
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  别他妈了隔壁念你那通稿
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

red = true
t = -1
f = (x) => {
    好 = false
    for (i of x.childNodes) {
        if (i.nodeType == 3 && i.textContent.trim()) {
            好 = true
            break
        }
    }
    if (好 && x.textContent.trim()) {
        ot = (x.getBoundingClientRect().bottom + x.getBoundingClientRect().top) / 2 + window.scrollY
        if (Math.abs(ot - t) > 6) {
            t = ot
            red = !red
        }
        if (red) {
            color = 'rgb(255, 0, 0)'
        } else {
            color = 'rgb(0, 0, 255)'
        }
        x.style.color = color
        x.style.setProperty('color', color, 'important')
    }
    if (x.children)
        for (i of x.children)
            f(i)
}
go = () => {
    red = true
    t = -1
    f(document.getElementsByTagName('body')[0])
}

setInterval(go, 1000)
