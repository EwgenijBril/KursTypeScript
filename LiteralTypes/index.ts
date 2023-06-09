let msg: "Hello" = "Hello"

msg = "Hello"

// type Config = { protocol: "http" | "https"; port: 3000 | 3001 };

interface Config {
    protocol: "http" | "https";
    port: 3000 | 3001;
    log: (msg: string) => void
}
// type Role = {
//     role: string;
// };

// type ConfigWithRole = Config & Role;

interface Role {
    role: string;
}

interface ConfigWithRole extends Config, Role {}


const serverConfig: ConfigWithRole = {
    protocol: 'https',
    port: 3001,
    role: 'admin',
    log: (msg: string): void => console.log(msg)
}

// const backupConfig: ConfigWithRole = {
//     protocol: "http",
//     port: 3001,
//     role: 'sysadmin'
// }

type StartFunction = (
    protocol: "http" | "https", 
    port: 3000 | 3001, 
    log: (msg: string) => void
    ) => string;

// const serverConfig: { protocol:"http" | "https"; port: 3000 | 3001   } = {
//     protocol: "https",
//     port: 3001
// }

const startServer: StartFunction  = (
    protocol: "http" | "https", 
    port: 3000 | 3001,
    log: (msg: string) => void
): "Server started" => {
    log (`Server started on ${protocol}//sserver:${port}`); 

    return "Server started"
}

startServer(serverConfig.protocol , serverConfig.port, serverConfig.log)

interface Styles {
    [key: string]: string
}

const styles: Styles = {
    position: 'absolute',
    top: '20px',
    left: '50px'
}

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