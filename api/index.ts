import { NowRequest, NowResponse } from '@now/node'

export default (request: NowRequest, response: NowResponse) => {
  response.json(request.query)
}
