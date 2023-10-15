#include <stdio.h>
int main()
{
    int n = 0;
    printf("Please input an integer:");
    while (scanf("%d", &n))
    {
        printf("%c \n", (char)n);
        printf("Please input an integer:");
    }
    return 0;
}