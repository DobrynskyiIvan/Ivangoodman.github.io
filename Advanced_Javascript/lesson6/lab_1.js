function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading user from database ....");
        callback({ id, name: "Bill" });
    }, 2000);
}

function getRepos(user,fn) {
    setTimeout(() => {
        console.log('Call Repos');
        return ["repo1", "repo2", "repo3"];
    }, 2000);
    //Your code here
   
}

console.log("Begin");
getUser(1, function(user) {
    console.log(user);
    getRepos(user.name,function(repos){
        console.log('Repos',repos)
    })
});
console.log("After");
