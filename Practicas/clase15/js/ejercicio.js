let post = [

    ]

    const loadAlbumes = () => {
        let template = albumes.reduce((acc, cv) => {
          return acc += `
            <div class="col">
              <div class="card">
                <img src="${cv.url}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${cv.id}</h5>
                  <p class="card-text">${cv.title}</p>
                </div>
              </div>
            </div>
          `
        }, '')
        
        document.querySelector('.cards__albumes').innerHTML = template
      } 
      
      const loadFinished = () => {
        loadAlbumes()
      }
      
      let botonCargar = document.querySelector("#btnAlbumes")
      botonCargar.addEventListener("click", loadAlbumes)
