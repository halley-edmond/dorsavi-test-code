export const QUERY_OWNER_NAME = "Bob";
export const QUERY_PET_NAME = "Garfield";

export const QUERY_RESULT_OWNER_PET_NAME = [{
  "name": "Bob",
  "gender": "Male",
  "age": 23,
  "pets": [{"name": "Garfield", "type": "Cat"}]
}];

export const MERGED_DATA_FROM_SYDNEY_MELBOURNE_RESPONSES = [{
  "name": "Bob",
  "gender": "Male",
  "age": 23,
  "pets": [{"name": "Garfield", "type": "Cat"}]
}, {"name": "Jennifer", "gender": "Female", "age": 18, "pets": [{"name": "Tom", "type": "Cat"}]}, {
  "name": "Steve",
  "gender": "Male",
  "age": 45,
  "pets": null
}, {
  "name": "Fred",
  "gender": "Male",
  "age": 40,
  "pets": [{"name": "Meong", "type": "Cat"}, {"name": "Jim", "type": "Cat"}, {"name": "Hulk", "type": "Dog"}]
}, {"name": "Samantha", "gender": "Female", "age": 30, "pets": [{"name": "Tabby", "type": "Cat"}]}, {
  "name": "Alice",
  "gender": "Female",
  "age": 64,
  "pets": [{"name": "Simba", "type": "Cat"}, {"name": "Nemo", "type": "Fish"}]
}, {"name": "Thomas", "gender": "Male", "age": 55, "pets": [{"name": "Loki", "type": "Fish"}]}, {
  "name": "Bond",
  "gender": "Male",
  "age": 28,
  "pets": [{"name": "Jerry", "type": "Bird"}, {"name": "Tom", "type": "Cat"}]
}, {"name": "Lara", "gender": "Female", "age": 35, "pets": null}, {
  "name": "Bruce",
  "gender": "Male",
  "age": 25,
  "pets": [{"name": "Peter", "type": "Cat"}, {"name": "Clark", "type": "Dog"}, {"name": "Tony", "type": "Cat"}]
}, {"name": "Steve", "gender": "Male", "age": 72, "pets": [{"name": "Scar", "type": "Cat"}]}, {
  "name": "Jame",
  "gender": "Female",
  "age": 29,
  "pets": [{"name": "Ani", "type": "Cat"}, {"name": "Barkshire", "type": "Dog"}]
}];

export const FEMALE_DATA_SYDNEY_QUERY_RESULT = [{"name": "Lara", "gender": "Female", "age": 35, "pets": null},{
  "name": "Jame",
  "gender": "Female",
  "age": 29,
  "pets": [{"name": "Ani", "type": "Cat"}, {"name": "Barkshire", "type": "Dog"}]
}];

export const PET_TYPE_BIRD_QUERY_RESULT = [{
  "name": "Bond",
  "gender": "Male",
  "age": 28,
  "pets": [{"name": "Jerry", "type": "Bird"}, {"name": "Tom", "type": "Cat"}]
}];