const TOP = 'Top';
const RIGHT = 'Right'

enum Directions {
    TOP, 
    RIGHT,
    LEFT,
    BOTTOM
}

enum TimingFunc {
    EASE = "ease",
    EASE_IN = "ease_in",
    LINEAR = "linear"
}

enum TimingFuncN {
    EASE = 1,
    EASE_IN = 2,
    LINEAR = EASE * 10
}
const frame = (elem: string, dir: Directions, tFunc: TimingFuncN) => {
    if ( dir  === Directions.RIGHT ) {
        console.log(tFunc)

    }
}

frame('id', Directions.RIGHT, TimingFuncN.LINEAR)