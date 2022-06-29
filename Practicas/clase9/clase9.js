let nombre = ['Francisco','Manuel','Martinez','Ibarra']

const iniciales = nombre.reduce((acc, cv) => {

    
    return acc += cv.charAt(0).toLowerCase()

},'')

console.log (iniciales)
