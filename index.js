
const myhttp = require("http");


const fs = require("fs").promises;


const requestListener = function( myrequest, myresponse ) {
        console.log( myrequest.url );

        if ( myrequest.url ==='/' ){
            //special variable__dirname has absolute path of where node code is running
            fs.readFile(__dirname + "/nba.html")
                .then(
                    //function(contents){...}
                    contents => {
                        //set http response header entry
                        myresponse.setHeader("Content-Type", "text/html; charset=UTF-8");
                        // return 200O http status code
                        myresponse.writeHead(200);

                        myresponse.end(contents);
                    }

                );
        }else{
            //if request url not root, return json file
            fs.readFile(__dirname + "/nbaplayers.json")
                .then(
                    contents => {
                        //set http response header entry
                        myresponse.setHeader("Content-Type", "application/json; charset=UTF-8");
                        // return 200O http status code
                        myresponse.writeHead(200);

                        myresponse.end(contents);
                    }
                )
        }

    }


let myserver = myhttp.createServer(

    requestListener
);

//https://
myserver.listen( 8080, "127.0.0.1" );