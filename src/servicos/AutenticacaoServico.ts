import api from './api';

// Define a type for the function parameters
type LoginCredentials = {
  username: string;
  password: string;
};

export async function fazerLogin({ username, password }: LoginCredentials) {
  try {
    const resultado = await api.post('/auth/login', {
      username,
      password,
    });

    return resultado.data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error; // Re-throw the error so the login function can catch it and display a toast.
  }
}
