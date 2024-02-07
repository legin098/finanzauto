import {Method} from 'axios';

export interface IRequestOption {
  readonly method: Method;
  readonly url: string;
  readonly headers?: any;
  readonly body?: Record<string, any>;
  readonly params?: Record<string, any>;
}

export interface IHttp {
  request<T>(requestOption: IRequestOption): Promise<T>;
}
