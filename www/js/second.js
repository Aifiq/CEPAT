$(function(){
    
    crossroads.addRoute('foo');
    crossroads.addRoute('lorem/ipsum');
    crossroads.routed.add(console.log,console);
    
    
    function parseHash(newHash, oldHash){
        crossroads.parse(newHash);
    }
    
    hasher.initialized.add(parseHash);
    hasher.changed.add(parseHash);
    hasher.init();
    
    hasher.setHash('lorem/ipsum');


})