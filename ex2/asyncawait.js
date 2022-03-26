
  async function main()
  {
    user = await getUser(1);
    repos = await getRepositories(user.gitHubUsername,2);
    brunch = await getBrunch(repos);
     if (brunch == "master")
          //commited = await  postCommit('new Version') ;
          if ( await  postCommit('new Version') )
          console.log("The new version is commited");
          else console.log("The new version is not commited");
 };
 main();

  function getUser(id) {



        let user = {id: id,gitHubUsername : 'username'};
    
        return new Promise((resolve,reject)=>{
    
            setTimeout(() => {
    
                console.log('User is founded');
    
                resolve(user);
    
               
    
        }, 1000);
    
        })    ;
    
    }
    function getRepositories(username, level) {
    
        return new Promise((resolve,reject)=>{
    
            console.log('repos is ready');
    
            let repos = ['br1','main','master'];
    
            resolve(repos,level);
    
    
    
        }, 2000);
    
    }
    
    
    
    function getBrunch(repo ) {
    
        return new Promise((resolve,reject)=>{
    
    
    
            console.log('repo[] is ready');
    
            resolve(repo);
    
        }, 2000);
    
    }
    function postCommit(vers) {
    
        return new Promise((resolve,reject)=>{
    
            console.log('new Version');
    
            resolve(vers == 'new Version');
    
    
    
        }, 2000);
    
    }