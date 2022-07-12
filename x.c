#include<stdio.h>

void func(int* array, int m)
{
    printf("Pairs having same values are : \n");
    for(int i = 0; i < m ; i++)
    {
        for(int j = i+1; j < m ;j ++)
        {
            if(array[i] == array[j])
            {
                printf("{%d,%d}\n",i+1,j+1);
            }
        }
    }

    return;
}

int main()
{
    int m;
    printf("Enter m: ");
    scanf("%d",&m);
    int a[m];
    printf("Enter weights of boxes\n");
    for(int i = 0; i < m ; i++)
    {
        scanf("%d",&a[i]);
    }

    func(a,m);

    return 0;
}