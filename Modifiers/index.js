var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    function Player() {
    }
    Object.defineProperty(Player.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (newPass) {
            // Validation
            this._password = newPass;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
var test = new Player();
// test.#login
var CompetitivePlayer = /** @class */ (function (_super) {
    __extends(CompetitivePlayer, _super);
    function CompetitivePlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompetitivePlayer.prototype.isConsented = function () {
        this.consent ? "Yes" : "No";
    };
    return CompetitivePlayer;
}(Player));
var player = new CompetitivePlayer();
// player.login = ";dfldkfj"
player.password = "sdfjd";
player;
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
