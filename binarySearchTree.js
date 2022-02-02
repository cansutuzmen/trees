//Binary Search Tree implementation

class Node {
  constructor(data){
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class BinarySearchTree {
  constructor(){
    this.parent = null;
  }

  insert(data){
    //create new Node
    const newNode = new Node(data);

    if(!this.parent){
      //if tree is empty 
      this.parent = newNode;
    }else{
      let currentNode = this.parent;
      while(true){
        if(data < currentNode.data){
          //if data is less than current data insert to left side 
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }else{
           //if data is greater than current data insert to rigt side 
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(data){
    //if tree is empty 
    if(!this.parent){
      return false;
    }

    // if tree is not empty
    let currentNode = this.parent;

    while(currentNode){
      if(data < currentNode.data){
        //if data is less than current data check the left side
        currentNode = currentNode.left;
      }
      
      if(data > currentNode.data){
        //if data is greater than current data check the right side
        currentNode = currentNode.right;
      }
      
      if(currentNode.data === data){
        return currentNode;
      }
    }
    return false;
  }
  
  remove(data){
    //if tree is empty 
    if(!this.parent){
      return false;
    }

    // if tree is not empty
    let currentNode = this.parent;
    let parentNode = null;

    while(currentNode){
      if(data < currentNode.data){
        //if data is less than current data check the left side
        parentNode = currentNode;
        currentNode = currentNode.left;
      }
      
      if(data > currentNode.data){
        //if data is greater than current data check the right side
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
      
      if(currentNode.data === data){
        //if current node has no right child
        if(currentNode.right === null){
          if(parentNode === null){
            this.parent = currentNode.left;
          }else{
            //if parent is greater than current data, make current left child a child of parent node
            if(currentNode.data < parentNode.data){
              parentNode.left = currentNode.left;
            }
            //if parent is less than current data, make current left child a right child of parent
            if(currentNode.data > parentNode.data){
              parentNode.right = currentNode.left;
            }
          }
        }
        //if current node's right child has no left child
        else if(currentNode.right.left === null){
          currentNode.right.left = currentNode.left;
          if(parentNode === null){
            this.parent = currentNode.right;
          }else{
            //if parent is greater than current data, make right child of the left the parent
            if(currentNode.data < parentNode.data){
              parentNode.left = currentNode.right;
            }
            //if parent is less than current data, make right child a right child of the parent
            if(currentNode.data > parentNode.data){
              parentNode.right = currentNode.right;
            }
          }
        }
        //if right child has a left child
        else{
          //find the right child's left most child first
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          
          while(leftmost.left !== null){
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //make subtree of parent leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null){
            // if tree is empty
            this.parent = leftmost;
          }else{
            if(currentNode.data < parentNode.data){
              parentNode.left = leftmost;
            }
            if(currentNode.data > parentNode.data){
              parentNode.right = leftmost;
            }
          }
        }
      }
      
      return true;
    }
    
    return false;
  }
}




