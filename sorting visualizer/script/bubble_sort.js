function Bubble()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(div[j],arr[j],"yellow");//Color update

            if(arr[j]>arr[j+1])
            {
                div_update(div[j],arr[j], "rgb(236, 81, 19)");//Color update
                div_update(div[j+1],arr[j+1], "rgb(236, 81, 19)");//Color update

                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;

                div_update(div[j],arr[j], "rgb(236, 81, 19)");//Height update
                div_update(div[j+1],arr[j+1], "rgb(236, 81, 19)");//Height update red
            }
            div_update(div[j],arr[j], "rgb(28, 201, 231)");//Color update blue
        }
        div_update(div[j],arr[j], "rgb(16, 218, 16)");//Color update green
    }
    div_update(div[0],arr[0], "rgb(16, 218, 16)");//Color update

    enable_buttons();
}