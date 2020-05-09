var initState = {
    notFoundInfo: 'This is embarrassing we are not able to find this route'
}

var randomMessages = [
  "test1",
  "test2",
  "test3",
  "test4",
  "test5",
  "test6",
  "test7",
  "test8",
  "test9",
  'This is embarrassing we are not able to find this route',
  "test10",

]
const notFound = (state = initState, action) => {
    switch (action.type) {
      case 'CHANGE_MESSAGE':
        return (
          {
            notFoundInfo: randomMessages[Math.floor((Math.random() * 10) + 1)]
          }
        )
      default:
        return state
    }
  }
  
  export default notFound;