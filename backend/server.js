const app = require('./app');
const connectDatabase = require('./config/database');



connectDatabase();

const server = app.listen(
    process.env.PORT,
    () => {
        console.log(`Server listening on the port: ${process.env.PORT} in ${process.env.NODE_ENV}`);
    }
)

process.on('unhandledRejection', (err)=>{ // event listener function
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to unhandled rejection error');
    server.close(() => {  // to stop the server
        process.exit();  // stop the node program
    });  
})

process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to uncaught exception error');
    server.close(() => {  // to stop the server
        process.exit();  // stop the node program
    }); 
})

