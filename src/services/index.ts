import { AxiosPromise } from 'axios'
import { MockData } from 'types'
import Axios from 'utils/axios'

export default {
  getData(): AxiosPromise<MockData> {
    return Axios({ url: '/data', method: 'GET' })
  },
}
