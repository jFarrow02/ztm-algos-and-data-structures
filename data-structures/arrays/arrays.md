# 4. Arrays

## 4.1 Arrays Introduction

### Array Operations Big O Time Complexity:
| Operation  | Big O  |
|------------|--------|
| Find       | O(1)   |
| Append     | O(1)   |
| Insert     | O(n)   |
| Delete     | O(n)   |

## 4.2 Static vs. Dynamic Arrays

**Static** arrays are fixed in size. **Dynamic** arrays can be re-sized (items can be added/deleted). When increasing the size of a dynamic array, the original array is **copied**, then moved to a new (larger) memory location with the new value added.

### Operations Big O Time Complexity for Dynamic Arrays:
| Operation  | Big O  |
|------------|--------|
| Find       | O(1)   |
| Append     | O(1)*  |
| Insert     | O(n)   |
| Delete     | O(n)   |

* can be O(n); the original array is copied to a new location, which means the computer must loop through and copy each item to a new location in memory.

## 4.3 Implementing Arrays

**Optional**: You probably won't be asked to implement an array in a real interview.

```
class MyArray {

    constructor(){
        this.length = 0;
        // data to be stored in array; keys will be numerical corresponding to array indices
        this.data = {}; 
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item; // add new 0-indexed key name and value to data
        this.length++; // increment length
        return this.length;
    }

    pop() {
        const target = this.data[this.length - 1];
        delete this.data[this.length -1];
        length --;
        return target;
    }

    delete(index) {
        const target = this.data[index];
        this.shiftItems(index)
    }

    shiftItems(index) {
        for(let i = index; i < this.length; i++) {
            this.data[i] = this.data[i+1]; // shift each item to the left by 1
        }
        delete this.data[this.length -1];
        this.length--;
    }
}
```javascript