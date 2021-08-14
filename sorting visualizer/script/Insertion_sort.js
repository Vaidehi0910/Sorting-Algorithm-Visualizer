function Insertion(){
    c_delay=0
    for(var i=0;i<array_size;i++){
        var curr=arr[i];
        div_update(div[i],arr[i],'yellow');
        for(var j=i-1;j>=0 && arr[j]>curr;j--){
            //div_update(div[i],arr[i],'red')
            div_update(div[j+1],arr[j+1],'rgb(236, 81, 19)');
            div_update(div[j],arr[j],'rgb(236, 81, 19)');
            arr[j+1]=arr[j];
            div_update(div[j+1],arr[j+1],'rgb(236, 81, 19)');
            div_update(div[j],arr[j],'rgb(236, 81, 19)');

            div_update(div[i],arr[i],'rgb(28, 201, 231)');
            if(j==i-1){
                div_update(div[j+1],arr[j+1],'yellow');
            }
            else{
                div_update(div[j+1],arr[j+1],'rgb(28, 201, 231)')
            }

        }
            arr[j+1]=curr;
            for(var t=0;t<i;t++){
                div_update(div[t],arr[t],'rgb(16, 218, 16)')
            }
        }
            div_update(div[i-1],arr[i-1],'rgb(16, 218, 16)')
   enable_buttons();
}