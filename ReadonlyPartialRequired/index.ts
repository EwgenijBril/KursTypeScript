const arr: Array<number> = [1, 2, 3];
const arr1: number[] = [1, 2, 3];

const roarr: ReadonlyArray<string> = ["dfjek"];
// roarr[0] = "sfdfdk"

interface  IState {
    data: {
        name: string
    },
    tag?: string
}

const state: Partial<IState> = {
    data: {
        name: "John"
    }
}

const strictState: Required<IState> = {
    data: {
        name: "dfkdf"
    },
    tag: "dfkdf"
}

// strictState.data = "dfdkf"

function action(state: Readonly<IState> ) {
    state.data.name = "abs"
}