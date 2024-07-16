// import json server using requires key word
const jsonServer=require("json-server")
// create json server using create method
const MediaPlayerServer=jsonServer.create()
// create path for json file (data file) -router()
const router=jsonServer.router("db.json")
// create middleware to parse json
const middleWare=jsonServer.defaults()
// allow server to use router and middleware
MediaPlayerServer.use(middleWare)
MediaPlayerServer.use(router)
// set up port for the server to run
PORT=3000 || process.env.PORT  
// listen to the request (run server)
MediaPlayerServer.listen(PORT,()=>{
console.log(`server running success at port number ${PORT} `);
});
