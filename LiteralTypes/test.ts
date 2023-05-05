const serverNewConfig: BasicConfig = {
    protocol: 'https',
    port: 3001,
  
}

const backupConfig: BasicConfig = {
    protocol: "http",
    port: 3001,
}

interface BasicConfig {
    protocol: string;
    port: number;
}

const startNewServer = (config: BasicConfig): "Server started" => {
    console.log(`Server started on ${config.protocol}//sserver:${config.port}`); 

    return "Server started"
}

startNewServer(serverNewConfig);
startNewServer(backupConfig);