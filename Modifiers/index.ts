function setName() {
    return "COD";
}

class Player {
    private static game: string = "COD";

    // #login: string;
    private _password!: string;
    public server!: string;
    protected consent!: boolean;

    static {
        Player.game = setName();
    }

    constructor(game: string) {
        Player.game = game;
    }

    get password() {
        return this._password;
    }

    set password(newPass: string) {
        // Validation
        this._password = newPass;
    }

    static getGameName() {
        return Player.game
    }
}

console.log(Player.getGameName())

const test = new Player("test");
// test.#login

class CompetitivePlayer extends Player {
    rank!: number;
    private isConsented() {
        this.consent ? "Yes" : "No";
    }
}

const player = new CompetitivePlayer('test');
// player.login = ";dfldkfj"
player.password = "sdfjd";
player

// class User {
//     public email: string;
//     public name: string;

//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }

// class User {
//     constructor(public email: string, public name:string) {}
// }