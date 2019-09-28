const firePixelArray = []
const fireWidth = 2
const fireHeight = 3
function start(){
    createFireStructure()
    console.log(firePixelArray)
}
function createFireStructure(){
    const numberOfPixels = fireWidth * fireHeight
    for( let i = 0; i < numberOfPixels; i++){
        firePixelArray[i] = 0
    }
}
function calculateFirePropagation(){

}
function renderFire(){

}
start()