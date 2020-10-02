let div1 = window.dom.create("   <div>创建一个盒子</div>")
create.appendChild(div1)
let div2 = window.dom.create("<div>创建第2个盒子</div>", create)

let div3 = window.dom.create("<div>after的div</div>")
dom.after(after, div3)

let li = dom.create("<li>在2之前的li</li>")
dom.before(before, li)

let p = dom.create("<p>是append的孩子，与ul平级，在文字后面</p>")
dom.child(append, p)

dom.wrap("<section></section>", append)

console.log(dom.remove(remove))

dom.empty(empty)

dom.attr(attr, "test", "1234")

dom.attr(attr, { "fontSize": "22px" })

console.log(dom.attr(attr, "index"))

console.log(dom.attr(attr, "test"))

console.log(dom.text(text, "6677"))

// dom.attr(attr, "xxyy")

console.log(dom.html(html2))
//text只展示给用户看的部分
console.log(dom.text(html2))

dom.html(html2, "<p>修改了html</p>")

dom.style(style, { backgroundColor: "red" })

dom.class.add(class1, "red")

//没有延时直接blue就不见了？
setTimeout(dom.class.remove(class1, "blue"), 2000)

console.log(dom.class.has(class1, "red"));

dom.on(on, "click", () => {
    console.log(1111111111);

})
let clickOff = function () {
    console.log("被惦记了")
}
dom.on(off, "click", clickOff)

dom.off(off, "click", clickOff)

console.log(dom.find("li"))

console.log(dom.parent(childSelect))

console.log(typeof dom.children(pp))

console.log(dom.siblings(childSelect))

console.log(dom.next(childSelect))

console.log(dom.before(childSelect))

dom.each(dom.children(pp), (x) => {
    console.log(x);
})

console.log(dom.index(childSelect))




