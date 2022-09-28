function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
}
printName({ first: 'Thomas', last: 'Shelby' });
var coodinates = { x: 34, y: 2 };
function randomCoord() {
    return { x: Math.random(), y: Math.random() };
}
// printName({ first: 'Bukayo', last: 'saka', age: 20 })
var player = { first: 'Bukayo', last: 'saka', age: 20, team: 'Arsenal FC' };
printName(player);
function doubleCoord(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
function calculatePayout(song) {
    return song.numStreams * 0.003;
}
function printSong(song) {
    console.log("".concat(song.artist, " - ").concat(song.title));
}
var mySong = {
    title: 'Apocalypse',
    artist: 'Cigarettes after sex',
    numStreams: 12486,
    credits: {
        producer: 'Greg Gonzalez',
        writer: 'Greg Gonzalez'
    }
};
var earning = calculatePayout(mySong);
console.log(earning);
printSong(mySong);
