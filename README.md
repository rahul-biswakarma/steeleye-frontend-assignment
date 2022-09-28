# Steeleye - Frontend Engineer Assignment

Github Repo: https://github.com/rahul-biswakarma/steeleye-frontend-assignment <br/>
Web App: https://rahul-biswakarma.github.io/steeleye-frontend-assignment/

***

### 1. Explain what the simple List component does.
The simple **List component** is responsible for generating and returning the *unordered list*,  `<ul>` with the help of **WrappedListComponent** and **SingleListItem**. It generates the unordered list from the *items* array that contains objects with one key-value pair i.e., **text**, which accepts a string as its value.

Talking about the working of the **List Component**, it calls **WrappedListComponent** which maps through the items array, and for each index, it calls the **SingleListItem** component which in turn returns the `<li>` tag, and then WrappedListComponent  constructs the `<ul>`.
***
### 2. What problems/warnings are there with the code?
There are several typos and syntax errors in the code. Below listed are the errors and warnings I found.
1. The first error encountered was `prop_types_WEBPACK_INPORTED_MODULE__default(...).shapeOf is not a function`. The Fix for this is to rename the `Proptypes.shapeOf` to **`Proptypes.shape`** <br/>
2. The second error was similar to the first one, the error was **Invariant Violation**. The fix for this one is to rename `Proptypes.array` to **`Proptypes.arrayOf`**<br/>
3. The next error was `TypeError: Cannot read properties of null `. A simple fix for this is to check for the variable before mapping. **`itemsState?.map((item, index) => ())`**<br/>
4. A state-related error `TypeError: setSelectedIndex is not a function` This error has occurred because this variable name was given to the useState variable, but it was used to update the state. So to fix this, just replace that state variable and function names. **`const [selectedIndex, setSelectedIndex] = useState();`**<br/>
5. `WrappedListComponent.defaultProps` items were set to `null` which is not recommended. It is better to use **`undefined`** instead of `null`.<br/>
6. Function reference should be passed on `onClick` event, but a function call was made<br/>
7. `isSelected` is a boolean type, but the value passed is an integer.<br/>
8. Each child in a list should have a unique `key`.
***

### 3. Please fix, optimize, and/or modify the component as much as you think is necessary.
Above mentioned fixes were enough for the React app to run, but after analyzing the code, I found some logical errors, so I modified some parts of the code to make it work logically correctly.

1. Modified the items array.
```javascript
	// Items Array
	const items= [
	  {
	    text: string
	    selected: bool
	  }
	]
```

2. Changed the working and usage of state. Now it stores the whole items array as a state.
```javascript
	// State 
	const [itemsState, setItemsState] = useState([]);
	  useEffect(() => {
	  setItemsState(items);
	}, [items]);
```

3. Next, I modified the handleClick function to change the selected key value based on the previous value.
```javascript
	// Handle Click Function
	const handleClick = (targetIndex) => {
	  let updateItems = itemsState.map((item, index) => {
	    return targetIndex == index? { ...item, selected: !item.selected }: { ...item };
	  });
	  setItemsState(updateItems);
	};
```

4. I have also created different component files for the `WrappedSingleListItem` and `WrappedListComponent`.
5. Also, added some minor CSS.
6. Create a dummy items array to demonstrate the working of the app.
7. Assignment is available in: https://github.com/rahul-biswakarma/steeleye-frontend-assignment.
   
<br/>
With the help of the above modifications, now the app can track the change of selected state for every element in the array and then changes background accordingly.
