var array=[1,2,2,3,4,7,6,2,2]
var res={};
for (let i = 0; i < array.length; i++) {
    var element = array[i];
    if (res[element]!=undefined) {
        ++res[element];
    }else{
        res[element]=1;
    }
}
console.log('Element '+ element + ' repeated '+res[element]);