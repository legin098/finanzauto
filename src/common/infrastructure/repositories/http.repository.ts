import Axios, {AxiosInstance} from 'axios';
import {IHttp, IRequestOption} from '@common/domain/repositories';

export class Http implements IHttp {
  axios: AxiosInstance;

  constructor() {
    const instanceAxios = Axios.create();
    this.axios = instanceAxios;
  }

  request = async <T>(requestOption: IRequestOption): Promise<T> => {
    const response = await this.axios.request({
      method: requestOption.method,
      url: requestOption.url,
      params: requestOption.params,
      data: requestOption.body,
      headers: {
        ...requestOption.headers,
      },
    });
    return response.data;
  };
}
