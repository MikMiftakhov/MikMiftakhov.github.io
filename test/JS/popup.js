function popupOpen() {
    let popup = document.getElementById("popup");
    popup.style.visibility = "visible";
    history.pushState(true, null, "#form");
}

function popupClose() {
    let popup = document.getElementById("popup");
    popup.style.visibility = "hidden";
    history.pushState(false, null, "\u0000");
}


console.log(location.hash);

window.addEventListener("popstate", (e) => {
    if (e.state == true) {
        let popup = document.getElementById("popup");
        popup.style.visibility = "visible";
    }
    else {
        let popup = document.getElementById("popup");
        popup.style.visibility = "hidden";
    }
})

window.addEventListener("DOMContentLoaded", function (event) {
    let popup = document.getElementById("popup");
    popup.style.visibility = "hidden";

    let buttonOpen = document.getElementById("popupOpen");
    buttonOpen.addEventListener("click", popupOpen);

    let buttonClose = document.getElementById("popupClose");
    buttonClose.addEventListener("click", popupClose);

    if (location.hash === "#form") {
        let popup = document.getElementById("popup");
        popup.style.visibility = "visible";
    }
});

// {
//     let buttonTest = document.getElementById("test_button");
//     buttonTest.addEventListener("click", testA);

//     let fbutton = document.getElementById("fbutton");
//     fbutton.addEventListener("click", testB);

//     let bbutton = document.getElementById("bbutton");
//     bbutton.addEventListener("click", testC);

//     let gbutton = document.getElementById("gbutton");
//     gbutton.addEventListener("click", testD);

//     let pbutton = document.getElementById("pbutton");
//     pbutton.addEventListener("click", testE);

//     let rbutton = document.getElementById("rbutton");
//     rbutton.addEventListener("click", testF);

//     let apbutton = document.getElementById("apbutton");
//     apbutton.addEventListener("click", testG);

//     let arbutton = document.getElementById("arbutton");
//     arbutton.addEventListener("click", testH);
// }

// {
//     function testA() {
//         console.log(window.history.length);
//         console.log(window.history.state);
//     }
//     function testB() {
//         window.history.forward();
//     }
//     function testC() {
//         window.history.back();
//     }
//     function testD() {
//         console.log(window.history.length);
//         console.log(window.history.state);
//     }
//     let i = 0;
//     function testE() {
//         i++;
//         history.pushState("data " + i, null);
//     }
//     let j = 1000000;
//     function testF() {
//         j++;
//         history.replaceState("data " + j, null);
//     }
//     let k = 300000;
//     function testG() {
//         k++;
//         history.pushState("data " + k, null, "");
//     }
//     let l = 4000000;
//     function testH() {
//         l++;
//         history.replaceState("data " + l, null,);
//     }
// }