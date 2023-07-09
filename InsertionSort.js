
function InsertionSort(arr){
    var n = arr.length;
    for (var i = 1; i < n; i++){
        var j = i - 1;
        var temp = arr[i]
        while(j>=0){
            if(temp <= arr[j]){
                arr[j+1] = arr[j];
                j--;
            }else{
                break;
            }   
        }
        arr[j+1] = temp;
    }
    return arr;
}

var a = [2,34,1,3,4,5,6,9,10];
console.log(InsertionSort(a));