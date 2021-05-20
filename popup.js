// @Date    : 2020-09-12 16:26:48
// @Author  : residuallaugh
const bg = browser.extension.getBackgroundPage();
var result;
var current;
var key = ["ip","ip_port","domain","path","url","static","sfz","mobile","mail"]
let querying = browser.tabs.query({active: true, currentWindow: true});
function test(tabs) {
        current=tabs[0].url;
		console.log(current);
        result = bg.result(current);
        console.log(result)
        for (var k in key){
            if (result[key[k]]!=null && result[key[k]].length != 0){
                console.log(result[key[k]])
                let p="";
                for(var i in result[key[k]]){
                    p = p + result[key[k]][i].substring(1,result[key[k]][i].length-1) +'\n'
                }
                document.getElementById(key[k]).innerText=p;
            }
        }
};
function onError(error) {
  console.log(`Error: ${error}`);
}
querying.then(test,onError);

