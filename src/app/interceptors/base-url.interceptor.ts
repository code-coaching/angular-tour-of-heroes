import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    url: `https://code-coaching.dev/api${req.url}`,
  });
  return next(req);
};
