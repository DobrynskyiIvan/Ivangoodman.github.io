var playList = [

    {
        author: "LED ZEPPELIN",
        song: "STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song: "BOHEMIAN RHAPSODY"
    },
    {
        author: "LYNYRD SKYNYRD",
        song: "FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song: "SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song: "ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song: "BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song: "WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song: "ENTER SANDMAN"
    }
];

// console.log(playList);

window.onload = document.write(`<ol id="list"></ol>`);

function camelize(str) {
    return str
        .split(' ')
        .map(
            (word) => word[0].toUpperCase() + word.toLowerCase().slice(1)
        )
        .join(' ');
}

function showList(arr) {
    let list = document.getElementById("list");
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.innerText = ` ${camelize(arr[i].author)}  \n ${camelize(arr[i].song)} `;
        list.appendChild(li);
    };
};
showList(playList);

/// Task ---> 2

function closeWindow() {
    document.body.firstElementChild.children[1].style.display = "none";
}

function openWindow() {
    document.body.firstElementChild.children[1].style.display = "block";
};

//Task -->3

let node = null;
//set colors by click
function selectNextNode() {
    resetColor();
    if (node == null) {

        let list = document.getElementById("trafficcolor");
        node = list.firstElementChild;
        node.style.opacity = 1
        return;

    }
    // Получение следующего элемента, которые в дереве находиться на одном уровне.
    node = node.nextElementSibling;
    console.log(node);

    if (node != null) {
        node.style.opacity = 1
    }

}
//set standart options for color
function resetColor() {
    let liList = document.getElementsByClassName("round");
    for (let i = 0; i < liList.length; i++) {
        liList[i].setAttribute("style", "opacity:0.3");
    }
}