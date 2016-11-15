#include <iostream>
using namespace std;
void buildHeapMAX(double arr[],int nub)
{
    if(nub<1)
        return;
    if(arr[nub]>arr[nub/2])
    {
        arr[0]=arr[nub];
        arr[nub]=arr[nub/2];
        arr[nub/2]=arr[0];
    }
    buildHeapMAX(arr,nub/2);
}

void showMAXheap(double arr[],int heapsize)
{
    int i;
    while(heapsize>=1)
    {
        i=1;
        cout << arr[i] << endl;
        arr[i] = arr[heapsize];
        heapsize--;
        while(i*2<=heapsize)
        {
            if (heapsize>=i*2+1)
            {
                    if (arr[i * 2] > arr[i * 2 + 1])
                    {
                        if(arr[i]<arr[i*2])
                        {
                            arr[0] = arr[i];
                            arr[i] = arr[i * 2];
                            arr[i * 2] = arr[0];
                            i = i * 2;
                        } else
                            break;
                    }
                    else
                    {
                        if(arr[i*2+1]>arr[i])
                        {
                            arr[0] = arr[i];
                            arr[i] = arr[i * 2 + 1];
                            arr[i * 2 + 1] = arr[0];
                            i = i * 2 + 1;
                        } else
                            break;
                    }
            }
            else
            {
                if(arr[i*2]>arr[i]) {
                    arr[0] = arr[i];
                    arr[i] = arr[i * 2];
                    arr[i * 2] = arr[0];
                    i = i * 2;
                } else
                    break;
            }
        }
    }

}
int main() {
    double arr[11];
    for(int i=1;i<=10;i++)
    {
        cin>>arr[i];
        if(cin.fail()) {
            cout<<"wrong input,please input this number again"<<endl;
            cin.clear();
            cin.ignore(1024,'\n');
            i--;
            continue;
        }
        buildHeapMAX(arr,i);
    }
    //for(int i=1;i<=10;i++)
     //   cout<<arr[i]<<" ";
    cout<<endl;
    showMAXheap(arr,10);
    return 0;
}