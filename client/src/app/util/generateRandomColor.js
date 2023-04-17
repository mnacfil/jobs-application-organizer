
const data = [ 0,1,2,3,4,5,6,7,8,9, 'A','B', 'C', 'D', 'E', 'F'];
const getRandomIndex = () => Math.floor(Math.random() * data.length);

export const generateRandomColor = () => {
    let hexCode = '#';
    
    for(let i = 0; i < 6; i++) {
        hexCode = hexCode + data[getRandomIndex()];
    }

    return hexCode
}