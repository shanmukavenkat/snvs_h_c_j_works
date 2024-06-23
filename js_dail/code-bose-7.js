const user1 = {
    username : "the codebose",
    followers : 34,
};

const user2 = user1;
user2.followers = user1.followers ;

console.log(user1.followers);
console.log(user2.followers);


let y = 0;
//increments to  1 but
//returns old value ,i.e., 0
y = y++;
console.log(y);