const arr= ['I am ','so Happy', 'To create','My First','Youtube Video']

Array.prototype.ourOwnForEach = function (callback)
{
//console.log(this);
 for (let index=0;index<this.length;index++){
     callback()
 }
}

arr.ourOwnForEach(()=>{

})
