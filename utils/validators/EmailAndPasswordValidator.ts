const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

export const isValid = (email: string, password: string): boolean => {

    if (email == null || email.length == 0 || !validateEmail(email))
        return false;

    if (password == null || password.length == 0 || password.length < 8)
        return false;

    return true;
};