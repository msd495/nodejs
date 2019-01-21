//App that is supposed to start at boot and keep running for as long as your system is up. 
var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Hello World',
  description: 'The nodejs.org example web server.',
  script: 'C:\\Users\\kumara213\\Desktop\\nodejs-master\\nodejs-master\\middleware.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  console.log("installed here");
  //svc.start();// Fired when the new service is started.
  //svc.stop();//Fired when the service is stopped.
});
svc.on('start',function(){
  console.log(svc.name+"started")
})
svc.on('stop',function(){
  console.log(svc.name+"stopped")
})
svc.on('alreadyinstalled',function(){
  console.log(svc.name+"already installed");
})

svc.install();//Fired when the script is installed as a service.

//svc.alreadyinstalled ();

//for uninstall
/*
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

// Uninstall the service.
svc.uninstall();
*/