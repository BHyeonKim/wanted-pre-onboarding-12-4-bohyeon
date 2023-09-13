import MOCK_DATA from 'mocks/json/mock_data.json'
import { rest } from 'msw'

export const handlers = [
  rest.get('/data', (_, res, ctx) => res(ctx.status(200), ctx.json(MOCK_DATA))),
]
