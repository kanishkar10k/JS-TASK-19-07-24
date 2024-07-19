let arr=[1,2,3,4,5,6,7,8];
function display(){
let array=[[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
for(let i of array){
    document.write(i+"<br>");
}

}

function del(x){
    document.write(arr+'<br>');
    delete arr[x];
    document.write("After Removing element at index["+x+"]: "+arr);
}

function insert(pos,ele){
    document.write(arr+'<br>');
    if(arr[pos]==null){
        arr[pos]=ele;
    }
    else{
    for(let i=(arr.length)-1;i>pos;i--){
        arr[i+1]=arr[i];
    }
    arr[pos]=ele;}
    document.write("After Inserting the element at the index["+pos+"]:"+arr);
}

function rotate(x){
    document.write(arr+'<br>');
    document.write("No of Rotations:"+x+'<br>');
    let rot=x%arr.length;
    for(let j=0;j<rot;j++){
    let safe=arr[0];
    for(let i=1;i<arr.length;i++){
        arr[i-1]=arr[i];
    }
    arr[(arr.length)-1]=safe;
}
    document.write("After rotation:"+arr);
}

function arrayrange(start,end){
     let array=[];
     let j=0;
     for(let i=start;i<=end;i++){
        array[j]=i;
        j++;
     }
     document.write("["+array+"]");
}