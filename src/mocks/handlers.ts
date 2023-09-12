import { rest } from 'msw'

import MOCK_DATA from './mock_data.json'

export const handlers = [
  rest.get('/data', (req, res, ctx) => res(ctx.status(200), ctx.json(MOCK_DATA))),
]
