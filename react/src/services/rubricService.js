import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  // timeout: 3000,

  // headers: {'Authorization': 'Bearer ' + localStorage.getItem('authToken')}
});

export const getAllItems = async() => {
  try {
    const { data: rubrics } = await axiosInstance.get("rubrics");

    const updatedRubrics = await Promise.all(rubrics.map(async (rubric) => {
      const { data: { project: { name: projectName } } } = await axiosInstance.get(`projects/${rubric.project_id}`);
      return { ...rubric, project_id: projectName };
    }));

    const sortedRubrics = updatedRubrics.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    // console.log(sortedRubrics);

    return sortedRubrics;

  } catch (error) {
    console.error(error);
    // manejo de errores aquí
  }

};

export const getItemById = (id) => {
  return axiosInstance
    .get(`rubrics/${id}`)
    .then((response) => {
      
      // console.log("Response data id rubrics: ", response);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const createItem = (data) => {
  return axiosInstance
    .post("rubrics", data)
    .then((response) => {
      // console.log("Response data: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const updateItem = (id, data) => {
  return axiosInstance
    .put(`rubrics/${id}`, data)
    .then((response) => {
      // console.log("Response data: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const deleteItem = (id) => {
  return axiosInstance
    .delete(`rubrics/${id}`)
    .then((response) => {
      // console.log("Response data: ", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
