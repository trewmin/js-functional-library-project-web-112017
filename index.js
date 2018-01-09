fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          iteratee(collection[i], i, collection)
        }}
      else {
        for (const element in collection) {
          iteratee(collection[element], element, collection)
        }};
    },

    map: function(collection, iteratee) {
      if (Array.isArray(collection)) {
        const newCollection = []
        for (let i = 0; i < collection.length; i++) {
          newCollection.push(iteratee(collection[i], i, collection))
        }
        return newCollection
      }
      else {
        const newCollection = {}
        for (const element in collection) {
          newCollection[element] = iteratee(collection[element], element, collection)
        }
        return newCollection
      };
    },

    reduce: function(collection, iteratee, acc) {

      for (let i = 0; i < collection.length; i++) {
        acc = iteratee(acc, collection[i], collection)
      }
      return acc;
    },

    find: function(collection, predicate) {
        for (let i = 0; i < collection.length; i++) {
         if (predicate(collection[i])) {
           return collection[i];
        }
      }
    },

    filter: function(collection, predicate) {
        const newCollection = [];
        for (let i = 0; i < collection.length; i++) {
          if (predicate(collection[i])) {
          newCollection.push(collection[i])
         }
      }
      return newCollection;
    },

    size: function(collection) {
       let count = 0;
       for (const element in collection) {
         count++;
       }
        return count;
    },

    first: function(array, n=1) {
      return array.slice(0, n)
    },

    last: function(array, n=1) {
      return array.slice(-n)
    },

    compact: function(array) {
      const newArray = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
        newArray.push(array[i])
       }
      }
      return newArray;
    },

    // sortBy: function(array, iteratee) {
    //   const newArray = []
    //   for (let i = 0; i < array.length; i++) {
    //     a = iteratee(array[i], i, array)
    //     b = iteratee(array[i+1], i+1, array)
    //     if (a > b) {
    //       array[i] = newArray[i+1]
    //       array[i+1] = newArray[i]
    //     }
    //     else {
    //       array[i] = newArray[i]
    //       array[i+1] = newArray[i+1]
    //     }
    //   }
    //   return newArray
    // },

    // iSortLast: function(arr) {
    //   let currIdx = arr.length-1
    //   while(currIdx > 0 && arr[currIdx-1] > arr[currIdx]) {
    //     const temp = arr[currIdx-1]
    //     arr[currIdx-1] = arr[currIdx]
    //     arr[currIdx] = temp
    //     currIdx--
    //   }
    // },
    //
    // sortBy: function(collection, callback) {
    //   const newArr = []
    //   for (let val of collection) {
    //     newArr.push(callback(val))
    //     this.iSortLast(newArr)
    //   }
    //   return newArr
    // },

    keys: function (object) {
      const keyArray = [];
       for (const key in object) {
         keyArray.push(key)
       }
       return keyArray;
    },

    values: function (object) {
      const valueArray = [];
       for (const key in object) {
         valueArray.push(object[key])
       }
       return valueArray;
    },

    functions: function(fi) {
      return this.keys(fi).sort();
    },


  }
})()

fi.libraryMethod()
