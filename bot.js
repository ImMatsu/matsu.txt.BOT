console.log("the bot is starting");
var Twit = require("twit");

var config= require("./config");
var T = new Twit(config);

tweetIt();
setInterval(tweetIt,1000*60*60);//tweet vai ocorrer a cada 1 hora 1000*60*60
function tweetIt(){
    var r=Math.floor(Math.random()*86);//Here you must enter the number of elements in list r
    var list=[]//the tweets the bot will make should be written here
    var tweet={
        status: list[r]
    }
    T.post('statuses/update', tweet, tweeted);
        
    function  tweeted(err, data, response){
        if(err){
            console.log("Deu ruim")
        }else{
            console.log("funfo")
        }
    }
}
