getUser(1).then ((user) =>{

    getRepositories(user.gitHubUsername, 2).then((repos)=>  {

        getBrunch(repos).then((repo) => {

            if (repo == "master")

                postCommit('new Version', (commited) => {

                    if (commited) console.log("The new version is commited");

                    else console.log("The new version is not commited");

                });

            });

    });

}) ;


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