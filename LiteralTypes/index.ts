let msg: "Hello" = "Hello"

msg = "Hello"

const serverConfig: { protocol:"http" | "https"; port: 3000 | 3001   } = {
    protocol: "https",
    port: 3001
}

const startServer: (protocol: "http" | "https", port: 3000 | 3001 ) => string = (
    protocol: "http" | "https", 
    port: 3000 | 3001, 
): "Server started" => {
    console.log (`Server started on ${protocol}//sserver:${port}`); 

    return "Server started"
}

startServer(serverConfig.protocol , serverConfig.port)

// const port3000: number = 3000;
// const port3001: number = 3001

// const startServer = (protocol: "http" | "https", port: 3000 | 3001 ): "Server started" => {
//     if (port === port3000 || port === port3001 ) {
//        console.log (`Server started on ${protocol}//sserver:${port}`); 
//     } else {
//         console.log("Invalid port");
//     }
    
//     return "Server started"
// }

// startServer("https", 3001)

type AnimationTimingFunc = "ease" | "ease-out" | "ease-in";
type AnimationID = string | number ;

const createAnimation = (
    id: AnimationID, 
    animName: string, 
    limingFunc: AnimationTimingFunc = "ease", 
    duration: number, 
    iterCount: "infinite" | number 
): void => { 
    //const elem  = document.querySelector(`#${id}`) as HTMLElement;
   // if ( elem ) {
        console.log(`${animName} ${limingFunc} ${duration} ${iterCount}`)
        //elem.style.animation  = `${animName} ${limingFunc} ${duration} ${iterCount}`
    //}
}

createAnimation('id', 'fade', 'ease-in', 5, 'infinite')