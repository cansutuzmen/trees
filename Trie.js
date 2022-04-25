class TrieNode {
  constructor() {
    this.isEndOfWord = false;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

 insert(key, node = this.root) {
    if(key.length === 0) {
      node.isEndOfkey = true;
      return;
    } else if (!node.children[key[0]]) {
      node.children[key[0]] = new TrieNode();
      this.insert(key.substring(1), node.children[key[0]]);
    } else {
      this.insert(key.substring(1), node.children[key[0]]);
    }
  }

  search(key, node = this.root) {
    if(key.length === 0 && node.isEndOfkey) {
      return true;
    } else if(key.length === 0) {
      return false;
    } else if(!node.children[key[0]]) {
      return false;
    } else {
      return this.search(key.substring(1), node.children[key[0]]);
    }
  }

  startsWith(prefix, count, node = this.root) {
    if(prefix.length === 0) {
      return true;
    } else if(!node.children.hasOwnProperty(prefix[0])) {
      return false;
    } else {
      return this.startsWith(prefix.substring(1), count, node.children[prefix[0]]);
    }
  }
};

