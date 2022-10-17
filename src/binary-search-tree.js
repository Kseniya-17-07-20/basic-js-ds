const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

 root() {
  this.root = null;
  }

 /*  module.exports = class BinarySearchTree{
    constructor(){
      this.root= null;
    } */

  add(data) {
    this.root = addWithin(this.root, data);
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }
      return node;
    }
  }

  has(data) {
    return searchWithin(this.root, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ?
        searchWithin(node.left, data) :
        searchWithin(node.right, data);
    }
  }

  find( data ) {
let node = this.rootNode;
while(node!==null){
  if(node.data === data){
    return node.data;
  } else if (data< node.data){
    node = node.left;
  } else{
    node = node.right;
  }
} 
return null;
  }

  remove(data) {
    this.root = removeNode(this.root, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // equal - should remove this item
        if (!node.left && !node.right) {
          // put null instead of item
          return null;
        }
        if (!node.left) {
          // set right child instead of child
          node = node.right;
          return node;

        }
        if (!node.right) {
          // set left child instead of child
          node = node.left;
          return node;
        }

        // both children exist for this item
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if(!this.root){
      return;
    }
    let node = this.root;
    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.root){
      return;
    }
    let node = this.root;
    while(node.right){
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};