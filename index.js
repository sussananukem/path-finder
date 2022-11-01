
// Check if radio buttons are selected

function display(subject) {
    const vList = [".science", ".gart", ".vart", ".hecons", ".business"]

    vList.forEach((e) => {
        if (e === subject) {
            document.querySelector(e).classList.remove("hide");
            document.querySelector(e).classList.add("show");

        } else {
            document.querySelector(e).classList.add("hide");
            document.querySelector(e).classList.remove("show");
        }
    });
}


//SCIENCE 
document.querySelector("#science").addEventListener("click", function () { display(".science") });


// GART 
document.querySelector("#gart").addEventListener("click", function () { display(".gart") });

//BUSINESS 
document.querySelector("#business").addEventListener("click", function () { display(".business") });

// HOMEECONS 
document.querySelector("#hecons").addEventListener("click", function () { display(".hecons") });

// VARTS 
document.querySelector("#vart").addEventListener("click", function () { display(".vart") });





































// var sList = ["gart", "business", "hecons", "vart"];
// var gList = ["science", "business", "hecons", "vart"];
// var bList = ["science", "gart", "hecons", "vart"];
// var vList = ["science", "gart", "business", "hecons"];
// var hList = ["science", "gart", "business", "vart"];

// // SCIENCE
// document.querySelector("#science").addEventListener("click", function (sList) {

//     if ((document.querySelector(".science").classList).length > 1) {
//         document.querySelector(".science").classList.remove("hide");

//     } else {
//         if ((document.querySelector(".science").classList).includes("hide")) {
//             document.querySelector(".science").classList.remove("hide");
//             document.querySelector(".science").classList.add("show");
//         }
//     }


//     for (var i = 0; i < sList.length; i++) {
//         var element = document.querySelector("." + sList[i]);
//         var l = element.classList;
//         if (l.includes("show")) {
//             element.classList.remove("show");
//             element.classList.add("hide");
//         } else if (l.includes("hide") && l.length === 1) {
//             continue
//         } else {
//             element.classList.add("hide");
//         }


//     }
// });

// // GENERAL ART
// document.querySelector("#gart").addEventListener("click", function (gList) {
//     if ((document.querySelector(".gart").classList).length > 1) {
//         document.querySelector(".gart").classList.remove("hide");

//     } else {
//         if ((document.querySelector(".gart").classList).includes("hide")) {
//             document.querySelector(".gart").classList.remove("hide");
//             document.querySelector(".gart").classList.add("show");
//         }
//     }

//     for (var i = 0; i < gList.length; i++) {
//         var element = document.querySelector("." + gList[i]);
//         var l = element.classList;
//         if (l.includes("show")) {
//             element.classList.remove("show");
//             element.classList.add("hide");
//         } else if (l.includes("hide") && l.length === 1) {
//             continue
//         } else {
//             element.classList.add("hide");
//         }


//     }
// })
























// Alt

// document.querySelector('input[name = "course"]').addEventListener("click", function () {
//     var getSelectedValue = document.querySelector('input[name="course"]:checked');
//     if (getSelectedValue != null) {
//         getSelectedValue.classList.remove("hide");
//         getSelectedValue.add("show");
//     }
//     else {
//         getSelectedValue.classList.add("hide");
//         getSelectedValue.remove("show");
//     }
// })

// if(document.querySelector("course").checked == true){

// }