var flexynote = {};

loader = {
        exec: function(controller, action){
          var ns = flexynote;
          action = (action === undefined ) ? 'init' : action;
          if (controller !== '' &&  ns[controller] && typeof ns[controller][action] == 'function') {
            ns[controller][action]();
          }
        },
        
        init: function(){
          var body = document.body,
          controller = body.getAttribute('data-controller'),
          action = body.getAttribute('data-action');
          
          loader.exec(controller, action);
        }
}
