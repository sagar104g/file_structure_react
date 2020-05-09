var initState = {
    "currentSelected": null,
    "root":{
        "folder1":{
            "uuid": 1,
            "type": "folder",
            "name": "testFolder1"
        },
        "file1":{
            "uuid": 1,
            "type": "file",
            "name": "testFile1"
        }
    }
}

const notFound = (state = initState, action) => {
    switch (action.type) {
      case 'SELECT_ITEM':
        return (
          {
            ...state,
            "currentSelected": action.uuid

          }
        )
      default:
        return state
    }
  }
  
  export default notFound;