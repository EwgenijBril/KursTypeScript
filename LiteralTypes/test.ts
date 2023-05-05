const serverNewConfig = {
    protocol: 'https',
    port: 3001,
    role: 'admin',
  
}

const backupConfig = {
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

startNewServer(serverNewConfig)
startNewServer(backupConfig)