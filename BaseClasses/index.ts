// class Box {
//     width: number;
//     height: number;
//     volume: string;

//     constructor(volume: string)
//     constructor(width: number)

//     constructor(widthOrVolume: number | string) {
//         if (typeof widthOrVolume === "number") {
//             this.width = widthOrVolume;
//         } else {
//             this.volume = widthOrVolume;
//         }
//         this.height = 500;
//     }
// }

class Box<T> {
    width: number;
    height: number;
    volume: string;

    constructor(widt: number) {
        this.width = widt;
        this.height = 500;
    }
}

const firstBox =new Box(250);
console.log(firstBox)


class User {
    name: string;
}

const ivan = new User();
ivan.name = "Ivan";
console.log(ivan)