const container = document.getElementById("main-container");


prepareDocs()


function generateDocs() {
 return fetch("../db.json")
    .then(res => res.json())
    .then(data =>
     data.docs
    ).catch(err=>console.log(err))
};

async function prepareDocs () {
  try {
    const data = await generateDocs()
    for (let i = 0; i <= data.length; i++) {
      container.innerHTML += `

        <div id='${data[i].premiereTag}' class="doc col-sm-6 col-md-4 slide">
          <div class="slide_content">
            <div>${data[i].title}</div>
            <div class="slide_options">

              <a href="${data[i].pdfLink}" target="_blank"
                class="anchor_1">
                <i class="icon-down-circled2 option_1">Otwórz PDF</i>
              </a>

              <a href="${data[i].zipLink}" download
                class="anchor_2">
                <i class="icon-file-archive option_2">Pobierz .zip</i>
              </a>

            </div>
          </div>
          <img alt="strona tytułowa" src="${data[i].imgLink}">
            <div class="doc_aside">
              <div class="doc_info_head">${data[i].shortTitle}</div>
              <div class="doc_info">
                <i class="icon-calendar-check-o"></i>Data przyjęcia: ${data[i].publishDate}
                <br>
                  <i class="icon-sort-number-up"></i>Numer wersji: ${data[i].ver}
                  <br>
                    <i class="icon-bookmark"></i>Liczba stron: ${data[i].pagesCount}
                    <br>
                      <i class="icon-back-in-time"></i>Poprzednia wersja: ${data[i].prevVer}
                    </div>
                </div>
               </div>
            `;
    }
  } catch (err) {
    console.log(err)
  }

};
