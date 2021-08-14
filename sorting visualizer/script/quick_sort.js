function Quick()
{
    c_delay=0;

    quick_sort(0,array_size-1);

    enable_buttons();
}

function quick_partition (start, end)
{
    var i = start + 1;
    var piv = arr[start] ;//make the first element as pivot element.
    div_update(div[start],arr[start],"yellow");//Color update

        for(var j =start + 1; j <= end ; j++ )
        {
            //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
            if (arr[ j ] < piv)
            {
                div_update(div[j],arr[j],"yellow");//Color update

                div_update(div[i],arr[i],"rgb(236, 81, 19)");//Color update
                div_update(div[j],arr[j],"rgb(236, 81, 19)");//Color update

                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;

                div_update(div[i],arr[i],"red");//Height update
                div_update(div[j],arr[j],"red");//Height update

                div_update(div[i],arr[i],"rgb(28, 201, 231)");//Height update
                div_update(div[j],arr[j],"rgb(28, 201, 231)");//Height update

                i += 1;
            }
    }
    div_update(div[start],arr[start],"rgb(236, 81, 19)");//Color update
    div_update(div[i-1],arr[i-1],"rgb(236, 81, 19)");//Color update
    
    var temp=arr[start];//put the pivot element in its proper place.
    arr[start]=arr[i-1];
    arr[i-1]=temp;

    div_update(div[start],arr[start],"rgb(236, 81, 19)");//Height update
    div_update(div[i-1],arr[i-1],"rgb(236, 81, 19)");//Height update

    for(var t=start;t<=i;t++)
    {
        div_update(div[t],arr[t],"rgb(16, 218, 16)");//Color update
    }

    return i-1;//return the position of the pivot
}

function quick_sort (start, end )
{
    if( start < end )
    {
        //stores the position of pivot element
        var piv_pos = quick_partition (start, end ) ;     
        quick_sort (start, piv_pos -1);//sorts the left side of pivot.
        quick_sort (piv_pos +1, end) ;//sorts the right side of pivot.
    }
 }
