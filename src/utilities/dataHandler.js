//combine data into one array from one or multiple promises
export const getDataFromAPIResponses = (responses) => {

  const merged = [];

  if (responses && responses.length) {
    responses.forEach(response => {
      merged.push(...response.data)
    });
  }

  return merged;
};

//search data based on owner and pet name
export const filterDataByOwnerAndPetName = (data,query) =>{

  if(data && data.length && query){

    const queryString = query.toLowerCase();

    //check owner name
    const matchOwnerName = (name) =>{
      const ownerString = name.toLowerCase();
      return (ownerString.indexOf(queryString) !== -1)
    };

    //check pet name
    const matchPetName = (pets) => {
      return (pets && pets.some(pet => pet.name.toLowerCase().indexOf(queryString) !== -1))
    };

    return data.filter((item) => {
      const {name, pets} = item;
      return (
          matchOwnerName(name) || matchPetName(pets)
      )
    });
  }

  return data;
};

export const filterDataByGender = (data,gender) =>{

  if(gender && data && data.length){
    return data.filter(item=> item.gender===gender);
  }

  return data;
};

export const filterDataByPetType = (data,petType) => {
  const hasPets = (item) => item.pets && item.pets.length;
  const matchPetType = (item) => item.pets.some(pet=>pet.type===petType);

  if(petType && data && data.length){
    return data.filter(item=> hasPets(item) && matchPetType(item))
  }

  return data;
};