const parseStringToArr = (input: string): any[] => {
  return input.split('\n');
};

type Data = {
  name: string;
  size: number | undefined;
  type?: 'directory' | 'file';
};

class Node {
  data: Data;
  children: Node[];

  constructor(data: Data) {
    this.data = data;
    this.children = [];
  }

  add(data: Data) {
    const node = new Node(data);
    this.children.push(node);
  }

  remove(name: Data['name']) {
    this.children = this.children.filter((node) => {
      return node.data.name !== name;
    });
  }
}

class Tree {
  root: Node;

  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  }

  findClosestParent(node: Node): Node {
    let closestParent = null;
    this.traverseBF((currentNode) => {
      if (currentNode.children.includes(node)) {
        closestParent = currentNode;
      }
    });
    return closestParent;
  }
}

function recursiveSum(tree: Tree, currentDirectory: Node) {
  if (currentDirectory.children.every((node) => node.data.size)) {
    const size = currentDirectory.children.reduce((acc, node) => {
      return acc + node.data.size;
    }, 0);

    currentDirectory.data.size = size;
    // here we know that currentDirectory is a directory
    currentDirectory.data.type = 'directory';

    const closestParent = tree.findClosestParent(currentDirectory);
    if (closestParent) {
      recursiveSum(tree, closestParent);
    }
  }
}

export const funA = (input: string) => {
  const arr = parseStringToArr(input).splice(1);

  const tree = new Tree();
  tree.root = new Node({ name: '/', size: undefined });

  let currentDirectory = tree.root;

  for (const command of arr) {
    if (command.startsWith('$ ls')) {
      void undefined;
    } else if (command.startsWith('$ cd')) {
      const [, newDirectory] = command.split('cd ');

      if (newDirectory === '..') {
        currentDirectory = tree.findClosestParent(currentDirectory);
      } else {
        const child = currentDirectory.children.find(
          (node) => node.data.name === newDirectory
        );

        if (child) {
          currentDirectory = child;
        }
      }
    } else {
      // dir abc
      if (command.startsWith('dir')) {
        const [, folderName] = command.split('dir ');
        currentDirectory.add({ name: folderName, size: undefined });
      } else {
        // 128 d.log
        const [size, fileName] = command.split(' ');
        currentDirectory.add({ name: fileName, size: parseInt(size) });
      }
    }

    // if all children are files, then return the sum of their sizes and set size of folder to sum of files size
    // and make this function recursive for closest parent

    recursiveSum(tree, currentDirectory);
  }

  return tree;
};

export const getSumOfAtMost100000 = (tree: Tree) => {
  const counters = [];
  tree.traverseBF((node) => {
    if (node.data.type === 'directory' && node.data.size < 100000) {
      counters.push(node.data.size);
    }
  });

  return counters.reduce((acc, size) => acc + size, 0);
};

const totalFilesystemDiskSpace = 70000000;
const neededUnusedSpace = 30000000;

export const findTheSmallestDirectory = (tree: Tree) => {
  const currentUnusedSpace = totalFilesystemDiskSpace - tree.root.data.size;
  const spaceNeeded = neededUnusedSpace - currentUnusedSpace;

  const allDirectories = [];
  tree.traverseBF((node) => {
    if (node.data.type === 'directory' && node.data.size > spaceNeeded) {
      allDirectories.push(node.data.size);
    }
  });

  return allDirectories.sort((a, b) => a - b)[0];
};
