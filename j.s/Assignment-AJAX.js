window.onload = getData();

function getData() {
  fetch("https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (datas) {
      let data1 = datas["result"]["results"];
      let Lbox = document.querySelector(".L_box p");
      let LImg = document.querySelector(".L_box img");
      let Rbox = document.querySelector(".R_box p");
      let RImg = document.querySelector(".R_box img");

      let Down = document.querySelector(".down ul");

      for (let i = 0; i < 10; i++) {
        // LP.innerText = ;
        let links = data1[i].file;
        links = links.substring(0, links.search("jpg") + 3);
        if (data1[i]._id == 1) {
          Lbox.innerText = data1[i].stitle;
          LImg.src = links;
        } else if (data1[i]._id == 2) {
          Rbox.innerText = data1[i].stitle;
          RImg.src = links;
        } else if (data1[i]._id > 2) {
          let DownLi = document.createElement("li");
          Down.appendChild(DownLi);

          let Downdiv = document.createElement("div");
          DownLi.appendChild(Downdiv);
          Downdiv.className = "item";

          let DownImg = document.createElement("img");
          Downdiv.appendChild(DownImg);
          DownImg.src = links;
          DownImg.style.objectFit = "cover";

          let DownP = document.createElement("p");
          DownP.innerText = data1[i].stitle;
          Downdiv.appendChild(DownP);
        }
      }
    });
}
