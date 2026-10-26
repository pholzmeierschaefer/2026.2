
#include <stdio.h>
#include <stdlib.h>


typedef struct node{
   struct node * left;  //ponteiro esq
   struct node * right;     //ponteiro dir
   struct node * parent;        //ponteiro sucessor
   int height;              //altura
   int data;                //dado
} node;

//allocar nó
node * create( int data ) {
    node * new = (node*)malloc(sizeof(node));
    new->left = NULL;
    new->right = NULL;
    new->parent = NULL;
    new->data = data;
    new->height = 1;        //recem criados tem altura 1  
    return new; 
}

//retorna o nó de menor valor de uma subarvore
    //extremo inferior esquerdo 
node * minimum(node * n){
   if(n->left) return minimum(n->left);
   return n; 
}


//menor elemento maior q 'n' 
node * sucessor(node * n){
    //caso1 - se existe subarvore direita, sucessor menor nó da subarvore
    if(n->right){
        return minimum(n->right);
    }    

    //caso2 - nao tem na subarvore a direira, sobe usando o pai
    //sucessor é o primeiro ancestral que 'n' é descendente pela esquerda
    node * x = n->parent;
    while(x != NULL && x->right == n){
        n = x;
        x = n->parent;
    }
    return x;
}

//retorna a altura, tratando nós nulos 
//caso esteja vazio, a altura e 0
int height(node * tree){
    if(tree == NULL) return 0; //nulo tem altura 0
    return tree->height;
}

//atualiza a altura de uma arvore baseada nos filhos
void fix_height(node * tree){
     int hl = height(tree->left);
     int hr = height(tree->right);
     
     tree->height = (hl > hr ? hl+1: hr+1); //altura do maior filho mais um 
}

//busca binaria recursiva
node * search(node * tree, int d){
    if(tree->data ==d || tree==NULL) return tree;     //encontrado ou inexistente
    if(tree->data >= d) return search(tree->left, d);
    else return search(tree->right, d);
}


/******
Tenha em mente que a altura das subarvores a direita e a esquerda podem ser diferir apenas em um antes de insercaoo.
Uma vez que inserimos um elemento, eles podem ter apenas 2 de diferenca. 

insere new em uma arvore enraizada por root. Retorna o ponteiro para a raiz.   
*/

node * rotate_left(node * x){
    if (x == NULL || x->right == NULL){
        return x;
    }

    node *y = x->right; //y filho direito, vai virar raiz
    x-> right = y->left; //sub de y vai pra dir de x

    if(y->left != NULL){
        y->left->parent = x; //atualiza pai
    }

    y->parent = x->parent; //herda pai
    y->left = x; //x vira filho esquerdo de y
    x->parent = y; //pai de x agr é y

    fix_height(x);  
    fix_height(y);

    return y; //raiz 
}

node * rotate_right(node * y);


node * fix_right(node * tree);

node * fix_left(node * tree);

node * insert( node * root, node * new ){
    if( root == NULL ) {
        return new;
    }else{
        if( root->data >= new->data ){
            if(!root->left) { //caso nao tenha nada abaixo
                root->left = new;
                new->parent = root;
            } else { 
                insert(root->left, new);
            }
            //root = fix_left(root);   //isso aqui e novo na AVL.
        } else {
            if(!root->right) { //caso nao tenha nada abaixo
                root->right = new;
                new->parent = root;
            }
            else {
               insert(root->right, new);
            }
            //root = fix_right(root);   //isso aqui e novo na AVL.
        }
    }
    return root;
}



//busca em profundidade. Primeiro, abre nodos a esquerda ate o possivel
void dfs( node * tree ){
    if(tree->left) dfs(tree->left);
    printf("%d ", tree->data); 
    if(tree->right) dfs(tree->right);
}



int main ( void ) {

    struct node * root = NULL;
    
    node * new = create(10);
    
    root = insert(root, new);
    
    dfs(root);

    return 0;
}
