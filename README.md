# DropdownMenu
node.js version of the DropdownMenu.

Adds a dropdown menu into your webpage. [Example.](https://raw.githack.com/anhr/DropdownMenu/master/Examples/html/)


## Packaged Builds
The easiest way to use DropdownMenu in your code is by using the built source at `build/dropdownmenu.js`. These built JavaScript files bundle all the necessary dependencies to run DropdownMenu.

In your `head` tag, include the following code:
```
<script src="https://raw.githack.com/anhr/DropdownMenu/master/build/dropdownMenu.js"></script>
```
or
```
<script src="https://raw.githack.com/anhr/DropdownMenu/master/build/dropdownMenu.min.js"></script>
```

Now you can use window.dropdownMenu for append your dropdown menu into your web page.

### dropdownMenu.create( arrayMenu, options )

Creates new menu.

* 
 * @param {String[]|Object[]} arrayMenu array of menu and submenu items. If string then menu item name. If object then options of the new menu item:
 * name - menu item name. Optional.
 * items - array of submenu items. Same as menu item. Optional.
 * onclick - function(event) called when user has clicked a menu item. event - event details. Optional.
 * drop - direction of drop of the submenu. Following directions is available: If string then "up" - drop submenu to up. "left" - shift submenu to left. If object then following members is available: "up: true" and "left: true".
 * @param {Object} [options] followed options is available. Optional.
 * @param {HTMLElement} [options.elParent] Parent element of new menu. Optional. Default is "body" element.
 * @param {HTMLElement} [options.canvas] canvas element. Use if you want put a menu inside a canvas. See "button inside canvas" example below for details. Optional.
 * @param {String} [options.decorations] Optional. You can decorate your menu by a built-in style or use your custom style. Currently two built-in styles is available:
 * 'Gradient' - use gradient.css file for decoration.
 * 'Transparent' - use transparent.css file for decoration.
 * Custom decoration:
 * 'Custom' please edit the custom.css file from my example if you want a custom decoration of your menu.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| arrayMenu | <code>String[] or Object[]</code> |  | array of menu and submenu items. If string then menu item name. If object then options of the new menu item:|
| [arrayMenuItem.name] | <code>String</code> | "" | menu item name. Optional. |
| [arrayMenuItem.items] | <code>Array</code> |  | array of submenu items. Same as menu item. Optional. |
| [arrayMenuItem.onclick] | <code>Function</code> |  | function(event) called when user has clicked a menu item. event - event details. Optional. |
| [arrayMenuItem.drop] | <code>String or Object</code> |  | direction of drop of the submenu. Following directions is available: If string then "up" - drop submenu to up. "left" - shift submenu to left. If object then following members is available: "up: true" and "left: true". |
| options | <code>Object</code> |  | Followed options is available: |
| [options.name] | <code>String</code> | "" | The name of the branch. |
| [options.title] | <code>String</code> |  | The title of the tag of the TreeElement. |
| [options.tagName] | <code>String</code> |  | The name of the branch tag. |
| [options.className] | <code>String</code> |  | The className of branch tag. |
| [options.id] | <code>String</code> |  | The id of branch tag. |
| [options.treeViewTagName] | <code>String</code> | "span" | The name of tag of the TreeElement. |
|  |  |  |  |
| options.params | <code>Object</code> |  | Followed params is available: |
| options.params.createBranch | <code>Function</code> |  | function (). creates and returns the branch element. |
| [options.params.remember] | <code>String</code> |  | The name of the branch that was opened before closing the web page. This branch will be opened immediately after opening the web page. |
| [options.params.noBranchLeft] | <code>boolean</code> |  | true - margin-left of the branch is 0 and not 10 pixels. |
| [options.params.onOpenBranch] | <code>event</code> |  | function ( element ). event is user has opened a branch. element is the "treeView" class. |
| [options.params.onCloseBranch] | <code>event</code> |  | function ( element ). event is user has closed a branch. element is the "treeView" class. |
| [options.params.animate] | <code>boolean</code> |  | true - animate of open/closing of the branch. |
| [options.params.branchId] | <code>String</code> |  | Identifier of the branch. |
| [options.params.branch] | <code>String or Function</code> |  | The name of the branch or function () - creates and returns the branch element. |
| [options.params.tree] | <code>Object[]</code> |  | Array of branches. Each item of the tree array is options of the branch. |
| [options.params.scrollIntoView] | <code>boolean</code> |  | true - scroll the opened branch into the visible area of the browser window. |

**Example. Simple tree.**  
```
<div id="SimpleTree"></div>
<script type="text/javascript">
	document.getElementById( "SimpleTree" ).appendChild( myTreeView.createBranch( {
		name: "Simple Tree",
		params:
		{
			createBranch: function () {
				var el = document.createElement( "div" );
				el.innerText = "Branch";
				return el;
			}
		}
	} ) );
</script>
```

**Example. Open branch and close branch events.**  
```
<div id="SimpleTree2"></div>
<script type="text/javascript">
	document.getElementById( "SimpleTree2" ).appendChild( myTreeView.createBranch( {
		name: "Open Branch",
		params:
		{
			noBranchLeft: true,
			createBranch: function () {
				var el = document.createElement( "div" );
				el.innerText = "Branch";
				return el;
			},
			onOpenBranch: function ( a ) { a.querySelector( ".name" ).innerText = "Close Branch"; },
			onCloseBranch: function ( a ) { a.querySelector( ".name" ).innerText = "Open Branch"; }
		}
	} ) );
</script>
```

### myTreeView.createTree( elTree, tree )

Create tree.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| elTree | <code>HTMLElement or string</code> |  | Parent element of the tree or class name of the new parent element. |
| tree | <code>Object[]</code> |  | Array of branches. Each item of the tree array is options of the branch. |
| [tree[].name] | <code>String</code> | "" | The name of the branch. |
| [tree[].branch] | <code>String or HTMLElement or Function</code> |  | The name of the branch or branch element or function () - creates and returns the branch element. |
| [tree[].animate] | <code>boolean</code> |  | true - animate of open/closing of the branch. |
| [tree[].title] | <code>String</code> |  | The title of the tag of the branch. |
| [tree[].tagName] | <code>String</code> | "div" | The name of the branch tag. |
| [tree[].tree] | <code>Object[]</code> |  | Array of child branches. Each item of the tree array is options of the branch. |
| [tree[].parentElement] | <code>String</code> |  | Id of the parentElement of the branch tag. A new branch can be not a child of the tree. Use the parentElement option if you want to create a branch anywhere on the web page. |
| [tree[].file] | <code>String</code> |  | The path to HTML file with code of the branch element. |
| [tree[].el] | <code>String</code> |  | The code of the branch element. |

**Example. Create tree.**  
```
<div id="ComplexTree"></div>
<script type="text/javascript">
	myTreeView.createTree(
		document.getElementById( "ComplexTree" ),
		[
			{
				name: "Animate Branch",
				branch: "branch 1",
				animate: true,
				tree: [
					{
						name: "tree 2.1",
						animate: true,
						tree: [
							{
								name: "tree 2.2",
								branch: "branch 2.2",
								animate: true
							}
						]
					},
					{
						file: "branch1.html",
					},
					{
						el: "<div>Branch from string</div>"
					},
				]
			},
			{
				name: "Complex Tree 2",
				branch: function () {
					var el = document.createElement( "div" );
					el.className = "branchLeft";
					el.appendChild( document.createElement( "input" ) );
					var elClose = document.createElement( "input" );
					elClose.type = "button";
					elClose.onclick = myTreeView.onclickCloseBranch;
					elClose.value = "Close Branch";
					el.appendChild( elClose );
					return el;
				},
				title: "inline-element",
				tagName: "span"
			},
			{
				name: "Complex Tree 3",
				branch: "branch 3",
				title: "inline-element",
				tagName: "span"
			},
		]
	);
</script>
```

### myTreeView.onclickBranch( a )

User has clicked a branch event.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| a | <code>HTMLElement</code> |  | The branch the user clicked on. |

### myTreeView.onclickCloseBranch( event )

User has closed a branch event.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>event</code> |  | event. |

### myTreeView.onCloseBranchAnywhere( event )

User has closed a branch event.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| event | <code>event</code> |  | event. |

### myTreeView.AddNewBranch( elTree, branch )

Adds a new branch to the tree.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| elTree | <code>string or HTMLElement</code> |  | id of the tree element or tree element to which the new branch will be added. |
| branch | <code>Object</code> |  | New branch options. |
| [branch.name] | <code>string</code> |  | The name of the branch. You can use a branch function instead branch name. |
| [branch.branch] | <code>Function</code> |  | function () returns an element of the new branch. |
| [branch.branchId] | <code>string</code> |  | Identifier of the new branch. Uses for find and remove branch. |

### myTreeView.removeBranch( branchId, elTree )

Removes a branch from the tree.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| branchId | <code>string</code> |  | identifier of the branch for removing. See [myTreeView.AddNewBranch( elTree, branch )](#mytreeviewaddnewbranch-eltree-branch-) function for details. |
| elTree | <code>HTMLElement</code> |  | The tree element from which the branch will be removed. |

### myTreeView.removeAllBranches( elTree )

Removes all branch from the tree.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| elTree | <code>HTMLElement</code> |  | The tree element from which all branches will be removed. |

## Directory Contents

```
└── build - Compiled source code.
```

## Building your own TreeElement

In the terminal, enter the following:

```
$ npm install
$ npm run build
```

## npm scripts

- npm run build - Build development and production version of scripts.


## On the following browsers have been successfully tested:

Windows 10

	IE 11

	Microsoft Edge 41

	Chrome 74

	Opera 60

	Safari 5.1.7 

	FireFox 56

Android 6.0.1

	Chrome 74

	Samsung Galaxy S5 Internet 9.2

	FireFox 67

	Opera 52

	Opera Mini 43

LG Smart tv

	Chrome 


## Thanks
The following libraries / open-source projects were used in the development of customController:
 * [Rollup](https://rollupjs.org)
 * [Node.js](http://nodejs.org/)

 ## Have a job for me?
Please read [About Me](https://anhr.github.io/AboutMe/).
