#include <stdio.h>
#include <stdbool.h>

void bubbleSort(int v[], int n){
    for(int j = 0; j < n -1; j++){
        bool trocou = false;

        for (int i = 0; i<n-1-j; i++){
            if(v[i]>v[i+1]){
                int temporario = v[i];
                v[i] = v[i+1];
                v[i+1] = temporario;

                trocou = true;
            }
        }
        if(!trocou){
            break;
        }
    }

}


void selecao(int v[], int n){
    for(int i=0; i < n - 1; i++){
        int p = v[i];
        int ip = i;

        for(int y = i+1; y < n; y++){
            if(p>v[v]){
                p = v[y];
                ip = y;
            }
        }

        int aux = v[i];
        v[i] = p;
        v[ip] = aux;
    }
}




void insercao(int v[], int n){
    for(int i = 1; i < n; i++){
        int chave = v[i];
        
    }
}


int main(){


}