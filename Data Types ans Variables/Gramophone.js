
function solve(nameBand, nameAlbum, nameSong) {
   
    let songDuration = (nameAlbum.length * nameBand.length) * nameSong.length / 2

    let rotations = Math.ceil(songDuration/2.5)
    
    console.log(`The plate was rotated ${rotations} times.`);
}

solve('Black Sabbath', 'Paranoid',

'War Pigs')