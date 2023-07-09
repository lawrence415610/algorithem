function CountingSort(arr){
    var n = arr.length;
    var cnt = {};
    for(var i = 0; i<n-1; i++){
        if(!cnt[arr[i]]){
            cnt[arr[i]] = 1;
        }else{
            cnt[arr[i]]++;
        }
    }
    
    arr = [];
    Object.keys(cnt).forEach(key => {
        while(cnt[key]>0){
            arr.push(Number(key));
            cnt[key]--;
        }    
    })
    
    return arr;
}

var a = [1,2,4,5,3,5,4,3,4,5,5,4,3];
console.log(CountingSort(a));