window.dom = {
    alert() {
        console.log("测试dom")
    },
    //string是新建的元素的内容，node是要挂载的元素。对参数长度进行判断后操作
    create(string, node) {
        if (arguments.length === 1) {
            const temp = document.createElement("template")
            temp.innerHTML = string.trim();
            return temp.content.firstChild
        } else if (arguments.length === 2) {
            const temp = document.createElement("template")
            temp.innerHTML = string.trim();
            node.appendChild(temp.content.firstChild)
        }
    },
    //node为被在后面插入元素的元素，newNode为要插入的元素
    after(node, newNode) {
        let parent = node.parentNode;
        parent.insertBefore(newNode, node.nextSibling)
    },
    before(node, newNode) {
        let parent = node.parentNode;
        parent.insertBefore(newNode, node)
    },
    child(node, child) {
        node.appendChild(child)
    },
    //用string生成一个节点，插在孩子前面，再把孩子变成string的孩子
    wrap(string, child) {
        let parent = dom.create(string)
        dom.before(child, parent)
        dom.child(parent, child)
    },
    remove(node) {
        node.remove()
        return node
    },
    empty(node) {
        //childNodes可以获得所有节点含文本，children只能获取元素节点
        let childrenList = node.childNodes
        let arr = []
        let nodeNext = childrenList[0]
        //这里用i++不行，因为length在动态变化
        while (nodeNext) {
            let nodeNow = nodeNext
            nodeNext = nodeNow.nextSibling
            arr.push(dom.remove(nodeNow))
        }
        return arr
    },
    attr(node, title, value) {
        if (arguments.length === 2) {
            return node.getAttribute(title) ?
                node.getAttribute(title) : alert("没有这个属性啊")
        } else if (arguments.length === 3) {
            node.setAttribute(title, value)
        }
    },
    text(node, string) {
        if (arguments.length === 1) {
            if (node.innerText) {
                return node.innerText
            } else {
                return node.textContent
            }
        } else if (arguments.length === 2) {
            if (node.innerText) {
                node.innerText = string
            } else if (node.textContent) {
                node.contentText = string
            }
        }
    },
    html(node, html) {
        if (arguments.length === 1) {
            return node.innerHTML;
        }
    },
    style(node, style) {
        for (let i in style) {
            console.log(style[i])
            node.style[i] = style[i]
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, action, fn) {
        console.log(action);

        node.addEventListener(action, fn)
    },
    //移除了action上挂载的所有事件
    off(node, action, fn) {
        console.log("移除事件了吗")
        node.removeEventListener(action, fn)
    },
    find(selector) {
        return Array.from(document.querySelectorAll(selector))
    },
    parent(node) {
        return node.parentNode
    },
    //返回一个对象，只获取了元素节点，不含文本
    children(node) {
        return node.children
    },
    siblings(node) {
        let list = Array.from(dom.children(dom.parent(node)))
        for (let i = 0; i < list.length; i++) {
            if (list[i] === node) {
                list.splice(i, 1)
            }
        }
        return list
    },
    next(node) {
        return node.nextElementSibling
    },
    before(node) {
        return node.previousElementSibling
    },
    each(nodes, fn) {
        for (let i = 0; i < nodes.length; i++) {
            fn(nodes[i])
        }
    },
    //i就是下标，从0开始排序的
    index(node) {
        let list = Array.from(dom.children(dom.parent(node)))
        for (let i = 0; i < list.length; i++) {
            if (list[i] === node) {
                return i
            }
        }
        return alert("没有呀怎么会呢")
    }


}