function Selection_sort(){
    c_delay=0
    for(var i=0;i<array_size;i++){
        div_update(div[i],arr[i],'rgb(236, 81, 19)');
        var min=i;
        for(var j=i+1;j<array_size;j++){
            div_update(div[min],arr[min],'yellow');
            if(arr[j]<arr[min]){
                if(min!=i){
                    div_update(div[min],arr[min],'rgb(28, 201, 231)');
                }
                min=j;
                div_update(div[min],arr[min],'rgb(236, 81, 19)')
            }
            else{
                div_update(div[min],arr[min],'rgb(236, 81, 19)');
            }
        }
        if(min!=i){
            let temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
            div_update(div[i],arr[i],'rgb(236, 81, 19)');
            div_update(div[min],arr[min],'rgb(236, 81, 19)');
            div_update(div[min],arr[min],'rgb(28, 201, 231)');
        }
        div_update(div[i],arr[i],'rgb(16, 218, 16)');
    }
    div_update(div[min],arr[min],'rgb(16, 218, 16)');
    enable_buttons();
    // div_update(div[array_size-1],arr[array_size-1],'green');
}