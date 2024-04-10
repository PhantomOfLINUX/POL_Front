export interface Resource<T> {
    read: () => T;
}

export function wrapPromise<T>(promise: Promise<T>):Resource<T> {
    type Status = 'pending' | 'success' | 'error';
    
    let status: Status = 'pending';
    let result: T | Error;
  
    let suspender = promise.then(
      (r: T) => {
        status = 'success';
        result = r;
      },
      (e: Error) => {
        status = 'error';
        result = e;
      }
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
  