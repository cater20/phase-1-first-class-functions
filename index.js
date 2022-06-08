

function receivesAFunction(callback){
    let chai='spy';
    callback();
}
function returnsANamedFunction(){
    return function(){

    }
}
function returnsAnAnonymousFunction(){
    return function ()
    {
return 'not to deeply equal';

}
    
}
