#include <stdio.h>
#include <stdlib.h>


void lerVet(int *vetor, int tamanho){
    //for que vai de 0 até o tamanho do vetor escolhido
    for(int i = 0; i<tamanho; i++){
        //printf que mostra o valor em que vai ser inserido o elemento digitado %d
        printf("digite o valor %d: ", i+1);
        //scanf que coloca o elemento digitado na posicao i
        scanf("%d", &vetor[i]);
    }
}


void imprimeVet(int *vetor, int tamanho){
    //for que passa todo o vetor
    for(int i = 0; i<tamanho; i++){
        //printa o elemento i do vetor
        printf("%d ", vetor[i]);
        
    }
    printf("\n");
}


void merge(int *vetor, int inicio, int meio, int fim){
    int i = inicio; //marca o inicio da metade da esquerda

    int j = meio+1;//marca o inicio da metade da direita


    int k = 0; //onde vai ser inserido o prox elemento



    int tamanho = fim-inicio+1; /*+1 pos se fazer por exemplo um vetor de 4 elementos (2,3,4,5) e querer ver quantos indices 
    vão do indice 2 ate o 5 fazendo fim-inicio (5-2 = 3) isso calcula apenas o deslocamento entre os dois pontos, nao contando
    o primeiro elemento*/


    //aux pra guardar os elementos
                                //reserva bytes (sizeof(int)) para o tanto de elementos que quer (tamanho)
    int *aux = (int *)malloc(tamanho*sizeof(int));


    
    //loop enquanto ambas as metades tiverem elementos
    while(i<=meio && j <=fim){
        //se elemento i <= elemento j
        if(vetor[i]<=vetor[j]){
            // se for copia i na proxima posicao livre k
            aux[k] = vetor[i];
            i++;
        }

        else{
            //se nao for, copia j (metade direita) para aux
            aux[k] = vetor[j];
            j++;
        }

        k++;
    }

    //passa aqui, caso i ou j tenham acabado
    //entra no while se for j que acabou, se nao vai para o while de baixo
    //loop enquanto existir i para copiar todos os elementos da primeira metade
    while(i<=meio){
        aux[k] = vetor[i];
        i++;
        k++;
    }

    //cai aqui caso tenha sido i que acabou primeiro
    //loop enquanto existir elementos em j
    while(j<=fim){
        aux[k] = vetor[j];
        j++;
        k++;
    }

    //for percorrendo todos os elementos de aux
    for(i = 0; i<tamanho; i++){
              //inicio mais i para ir progredindo no vetor
        vetor[inicio+i] = aux[i];
    }

    free(aux);


}


void mergeSort(int *vetor, int inicio, int fim){
    //se inicio < fim significa que tem mais de um elemento no vetor
    if(inicio<fim){
        //trunca pra baixo, em caso de elementos impares, o subvetor da esquerda fica com o "meio"
        int meio = (inicio+fim)/2;

        //chamadas recursivas
        //primeiro, ordena inicio ate o meio
        mergeSort(vetor, inicio, meio);

        //depois ordena de meio+1 ate o fim
        mergeSort(vetor, meio+1, fim);

        //depois junta, inicio coloca o meio e fim  
        merge(vetor, inicio, meio, fim);
    }
}


int main(){
    int tamanho;

    printf("tamanho do vetor que vai ser ordenado: ");

    scanf("%d", &tamanho);

    if(tamanho<=0){
        printf("tamanho do vetor deve ser maior que zero\n");
        return 1;
    }

    int *vetor = (int *)malloc(tamanho*sizeof(int));

    lerVet(vetor, tamanho);

    printf("\nvetor orginal:\n");
    imprimeVet(vetor, tamanho);
                    //primeiro indice valido, ultimo indice valido
    mergeSort(vetor, 0, tamanho-1);

    printf("\nvetor ordenado:\n");
    imprimeVet(vetor, tamanho);

    free(vetor);

    return 0;
}




