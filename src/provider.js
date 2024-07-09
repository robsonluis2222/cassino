import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://ws.suitpay.app/api/v1/gateway/request-qrcode',
  timeout: 10000,
  headers: {'ci': 'produtor_1716234502718',
            'cs': '9105e9589064e7ed11f89d50c3a59aecea122a9539fcd7bfd1d15ec7f03875fc75fb59f46dbf41fe9d92440a5ad1430f'
  }
});