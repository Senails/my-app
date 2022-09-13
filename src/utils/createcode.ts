
export function getkey():number {
    let date = new Date();
    let y = date.getUTCFullYear();
    let m = date.getUTCMonth();
    let d = date.getUTCDate();
    let h = date.getUTCHours();
    let min = date.getUTCMinutes();
    let sec = date.getUTCSeconds();
    let str = Math.floor(sec / 5);

    let sum = +(Math.floor(+('' + y + m + d + h + min) / min)+''+str);

    return sum
}