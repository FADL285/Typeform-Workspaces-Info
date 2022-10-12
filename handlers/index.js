import { createClient } from '@typeform/api-client';

let typeformAPI = null;

const setClient = (token) => {
  typeformAPI = createClient({
    token
  });
};

export const getWorkspaces = async (token) => {
  setClient(token);
  try {
    const workspaces = await typeformAPI.workspaces.list();
    return workspaces;
  } catch (error) {
    throw new Error(error.message);
  }
};
