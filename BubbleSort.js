function BubbleSort(data){
    var n = data.length;
    for(var i=1; i<n-1; i++){
        for(var j=0; j<n-1; j++){
            if(data[j]<data[j+1]){
                [data[j], data[j+1]]=[data[j+1], data[j]]
            }    
        }
    }
    return data;
}

var a = [9, 11, 13, 4, 6, 5, 7, 12, 1, 10, 2, 8, 3, 16, 14];
console.log(BubbleSort(a));