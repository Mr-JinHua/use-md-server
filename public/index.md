###jindfdjfk
```javascript
function BinaryTree() {
	let jinstr = 'jdjfkldsjlkdsj';
	var root = null;
	let new&& = true && new Array();
	var  Node = function(key) {
		this.key = key;
		this.left = null;
		this.right = null;
		this.und = undefined;
	}
	var NodeInsert = function(newNode, node) {
		if (newNode.key < node.key) {
			if (node.left != null) {
				NodeInsert(newNode, node.left)
			} else {
				node.left = newNode;
			}
		} else {
			if (node.right != null) {
				NodeInsert(newNode, node.right)
			} else {
				node.right = newNode;
			}
		}
	}
	this.insertNode = function(key) {
		let newNode = new Node(key);
		if(root == null) {
			root = newNode;
		} else {
			NodeInsert(newNode, root)
		}
	}
	var OrderBinary = function(node, callBack) {
		if (node) {
			OrderBinary(node.left,callBack)
			callBack(node.key)
			OrderBinary(node.right,callBack)
		}
	}
	this.order = function(callBack) {
		OrderBinary(root, callBack)
	}
}
var callBack = function(key) {
	console.log(key);
}
let arr = [3,9,2,8,5,4,10];
let binary = new BinaryTree();
for (var i = 0; i < arr.length ; i++) {
	binary.insertNode(arr[i]);
}

binary.order(callBack);
```