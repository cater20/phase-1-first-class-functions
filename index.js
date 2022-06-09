

function receivesAFunction(callback){
let chai='spy';
    callback();
}

  function returnsANamedFunction(){
      return function namedfn(){
        return 'this is a named function'
      }
  }  

function returnsAnAnonymousFunction(){
    return function (){
        
    }
}