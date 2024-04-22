export interface Resource<T> {
  read: () => T;
}

export function wrapPromise<T>(promise: Promise<T>, timer: number): Resource<T> {
  type Status = 'pending' | 'success' | 'error';
  
  let status: Status = 'pending';
  let result: T | Error;

  let suspender = promise.then(
    r => setTimeout(() => {
        status = 'success';
        result = r;
    }, timer),
    e => setTimeout(() => { 
        status = 'error';
        result = e;
    }, timer)
);

  return {
      read(): T {
          if (status === 'pending') {
              throw suspender; 
          } else if (status === 'error') {
              throw result;
          } else {
              return result as T; 
          }
      },
  };
}
