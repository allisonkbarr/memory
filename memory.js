
var mem = Array(10)

//space functions
var stackHasSpace = function() {
  return mem.length > stack.index && stack.index != undefined
}

var heapHasSpace = function() {
  return true //placeholder for now
}

// stack functions

var stack = {
  index: 0,
  push: function(thing) {
    if (stackHasSpace()) {
      mem.splice(stack.index, 1, thing)
      stack.index++
    } else {
      throw new Error ("Stack overflow!!!")
    }
  },
  pop: function() {
    mem.splice(stack.index, 1, undefined)
    stack.index--
  }
}

// heap functions

var heap = {
  alloc: function() {

  },
  dealloc: function() {

  }
}

module.exports = {
  stack: stack,
  heap: heap,
  mem: mem
}

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)
stack.push(7)
stack.push(8)
stack.push(9)
stack.push(10)

console.log("All good",mem)
