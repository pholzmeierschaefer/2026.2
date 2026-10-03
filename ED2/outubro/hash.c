#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define M 7



typedef struct No{
    int key;
    char nome[50];
    int idade;
    struct No* proximo;

} No;



typedef struct{
    No* tabela[M]
} TabelaHash;


void nullificar(TabelaHash* t){
    for (int i = 0; i <M; i++){
        t->tabela[i] = NULL;
    }
}


int hash(int k){
    return k % M;
}



void inserir(TabelaHash* t, int key, const char* nome, int idade){
    int i = hash(key);

    No* novo = (No*)malloc(sizeof(No));
    
    novo->key = key;
    strcpy(novo->nome, nome);
    novo->idade = idade;


    novo->proximo = t->tabela[i];
    t->tabela[i] = novo;
    printf("inseriu key %d no indice %d", key, i);

}


void buscar(TabelaHash* t, int key){
    int i = hash(key);
    No* atual = t->tabela[i];


    while(atual!=NULL){
        if(atual->key == key){
            return atual;
        }
        else{
            atual=atual->proximo;
        }
    }
    return NULL;
}




int remover(TabelaHash* t, int key){
    int i = hash(key);
    No* atual = t->tabela[i];
    No* anterior = NULL;

    while (atual!= NULL && atual -> key != key){
        anterior = atual;
        atual = atual-> proximo;
    }

    if (atual == NULL){
        return 0;
    }

    if (anterior == NULL){
        t->tabela[i] = atual->proximo;
    }

    else{
        anterior->proximo = atual->proximo;
    }

    free(atual);
    return 1;
}




int imprimir(TabelaHash* t){
    for (int i = 0; i <M; i**){
        printf("[%d]", i);
        No* atual = t->tabela[i];
        while( atual != NULL){
            printf("registro: %d, %s, %d anos -> ", atual->key, atual-> nome, atual->idade);
            atual = atual->proximo;
        }
    }
}




int main(){
    TabelaHash t;

    nullificar(&t);



    inserir(&t, 7, "Carlos", 20);
    inserir(&t, 14, "Bia", 22);
    inserir(&t, 19, "Nicoli", 18);



}