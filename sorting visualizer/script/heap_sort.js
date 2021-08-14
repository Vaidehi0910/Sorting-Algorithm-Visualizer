function Heap()
{
    c_delay=0;

    heap_sort();
    
    enable_buttons();
}

function swap(i,j)
{
    div_update(div[i],arr[i],"rgb(236, 81, 19)");//Color update
    div_update(div[j],arr[j],"rgb(236, 81, 19)");//Color update

    var temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;

    div_update(div[i],arr[i],"rgb(236, 81, 19)");//Height update
    div_update(div[j],arr[j],"rgb(236, 81, 19)");//Height update

    div_update(div[i],arr[i],"rgb(28, 201, 231)");//Color update
    div_update(div[j],arr[j],"rgb(28, 201, 231)");//Color update
}

function max_heapify(n,i)
{
    var largest=i;
    var l=2*i+1;
    var r=2*i+2;

    if(l<n && arr[l]>arr[largest])
    {
        if(largest!=i)
        {
            div_update(div[largest],arr[largest],"rgb(28, 201, 231)");//Color update
        }

        largest=l;

        div_update(div[largest],arr[largest],"rgb(236, 81, 19)");//Color update
    }

    if(r<n && arr[r]>arr[largest])
    {
        if(largest!=i)
        {
            div_update(div[largest],arr[largest],"rgb(28, 201, 231)");//Color update
        }

        largest=r;

        div_update(div[largest],arr[largest],"rgb(236, 81, 19)");//Color update
    }

    if(largest!=i)
    {
        swap(i,largest);

        max_heapify(n,largest);
    }
}

function heap_sort()
{
    for(var i=Math.floor(array_size/2)-1;i>=0;i--)
    {
        max_heapify(array_size,i);
    }

    for(var i=array_size-1;i>0;i--)
    {
        swap(0,i);
        div_update(div[i],arr[i],"rgb(16, 218, 16)");//Color update
        div_update(div[i],arr[i],"yellow");//Color update

        max_heapify(i,0);

        div_update(div[i],arr[i],"rgb(28, 201, 231)");//Color update
        div_update(div[i],arr[i],"rgb(16, 218, 16)");//Color update
    }
    div_update(div[i],arr[i],"rgb(16, 218, 16)");//Color update
}