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

    functions: function() {
    },


  }
})()

fi.libraryMethod()
