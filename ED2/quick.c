#include <stdio.h>

void swap(int *v, int i, int n)
{
    int aux = v[i];
    v[i] = v[n];
    v[n] = aux;
}

int particiona(int *v, int low, int high)
{

    int pivo = v[low]; // pivo primeiro

    int i = low; // inicializa o i, p controle  subvetor dos menores

    for (int j = low + 1; j <= high; j++)
    { // compara elementos com j

        if (v[j] < pivo)
        { // se o elemento for menor q o pivo
            i++;
            swap(v, i, j); // troca para a esquerda usando i, e implementa i com 1
        }
    }

    swap(v, low, i); // coloca o pivo no meio
    return i;        // retorna i, divide as porximas chamadas
}

void quick_sort(int *v, int low, int high)
{
    if (low >= high)
        return;

    int pivo_pos = particiona(v, low, high);

    quick_sort(v, low, pivo_pos - 1);
    quick_sort(v, pivo_pos + 1, high);
}

int main(void)
{
    int n;

    printf("digite o tamanho do vetor: ");
    if (scanf("%d", &n) != 1 || n <= 0)
        return 0;

    int v[n];
    printf("digite os elementos do vetor (separados por espaço): ");
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &v[i]);
    }

    quick_sort(v, 0, n - 1);


    printf("vetor ordenado: ");
    for (int i = 0; i < n; i++)
    {
        printf("%d ", v[i]);
    }
    printf("\n");

    return 0;
}