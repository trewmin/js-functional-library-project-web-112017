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

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
