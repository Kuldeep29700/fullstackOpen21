import axios from "axios";
const url = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(url);
  return request.then((response) => response.data);
};

const create = (addContact) => {
  const request = axios.post(url, addContact);
  return request.then((response) => response.data);
};

const update = (id, addContact) => {
  const request = axios.put(`${url}/${id}`, addContact);
  return request.then((response) => response.data);
};

const remove = (id, addContact) => {
  const request = axios.delete(`${url}/${id}`, addContact);
  return request.then((response) => response.data);
};
const personService = { getAll, create, update, remove };
export default personService;
