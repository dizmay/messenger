export const getErrorMessage = (error: any) => {
  const { data } = error.response;
  switch (data.constructor.name) {
    case 'Array':
      const message = data[0][0];
      return message;

    case 'Object':
      return data.message;
  }
}
