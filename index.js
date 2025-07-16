require ('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  for (const userArray of args) {
   
    combinedObject.users = [...combinedObject.users, ...userArray];
  }
  const today = new Date();
    combinedObject.merge_date = today.toString("M/d/yyyy");
    
    return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};