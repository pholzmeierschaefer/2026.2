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
    No* tabela[M];
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
    printf("inseriu key %d no indice %d\n", key, i);

}


No* buscar(TabelaHash* t, int key){
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




void imprimir(TabelaHash* t){
    for (int i = 0; i < M; i++){
        printf("[%d]: ", i);
        No* atual = t->tabela[i];
        while (atual != NULL) {
            printf("(%d, %s, %d anos) -> ", atual->key, atual->nome, atual->idade);
            atual = atual->proximo;
        }
        printf("NULL\n");
    }
}




int main(){
    TabelaHash t;

    nullificar(&t);



    inserir(&t, 7, "Carlos", 20);
    inserir(&t, 14, "Maite", 22);
    inserir(&t, 19, "Nicoli", 18);


    imprimir(&t);

    //teste

    printf("teste busca\n");


    int busca_key = 14;

    No* res = buscar(&t, busca_key);

    if(res){
        printf("chave %d encontrada = Nome %s\n", busca_key, res->nome);
    }
    else{
        printf("chave %d nao encontrada\n", busca_key);
    }

    int buscar_key = 99;
    

    No* result = buscar(&t, buscar_key);

    if(result){
        printf("chave %d encontrada = Nome %s\n", buscar_key, res->nome);
    }
    else{
        printf("chave %d nao encontrada\n", buscar_key);
    }


    printf("teste remoção\n");

    printf("remover chave 7 (i = 0)\n");

    remover(&t, 7);
    imprimir(&t);



    printf("remover chave 26 (i = 5)\n");

    remover(&t, 26);
    imprimir(&t);


    return 0;

}