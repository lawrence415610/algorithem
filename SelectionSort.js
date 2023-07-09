var a = [9, 11, 13, 4, 6, 5, 7, 12, 1, 10, 2, 8, 3, 16, 14]

function SelectionSort(data){
    for(var i=0; i < data.length-1; i++){
        var max = i;
        for(var j=i+1; j < data.length; j++){
            if(data[j] > data[max]){
                max = j
            }
        }
        [data[i], data[max]] = [data[max], data[i]];
    }
    return data;
}

console.log(SelectionSort(a));