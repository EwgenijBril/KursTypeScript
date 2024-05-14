class Box {
    width: number;
    height: number = 500;
    volume: number |undefined;
    _content: string | undefined;

    constructor(widt: number, volume?: number, content?: string) {
        this.width = widt;
        this.volume = volume;
        this._content = content;
        // this.height = 500;
    }

    calculateVolume(): void {
        if (!this.volume) {
            this.volume = this.width * this.height;
            console.log(`Parcel volume: ${this.volume}`);
        } else {
            console.log(`Parcel volume: ${this.volume}`);
        }
    }

    checkBoxSize(transport: number): string;
    checkBoxSize(transport: number[]): string;
    checkBoxSize(transport: number | number[]): string {
        if (typeof transport === "number") {
            return transport >= this.width ? "Ok" : "Not ok"
        } else {
            return transport.some(t => t >= this.width) ? "Ok" : "Not ok"
        }
    }

    // get content() {
    //     return this._content;
    // }

    // set content(value) {
    //     this._content = `Date: ${new Date().toTimeString()}, Content: ${value}`;
    // }

    async content(value: string) {
        const date  = await new Date().toTimeString();
        this._content = `Date: ${date}, Content: ${value}`;
    }
}

const firstBox = new Box(250);
firstBox.volume = 50000;
// console.log(firstBox.content = "Test");
console.log(firstBox.content);


// class User {
//     name: string;
// }

// const ivan = new User();
// ivan.name = "Ivan";
// console.log(ivan)

class Styles {
    [s: string]: string | ((s: string) => boolean);

    // method() {

    // }
}

const style = new Styles();
style.color = "red";
style.font = "Roboto";