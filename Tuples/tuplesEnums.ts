const rgbColor: [number, number, number] = [255, 1, 255]

type HTTPResponse = [number, string]


const statusRes: HTTPResponse = [200, 'OK']

statusRes.push(123)


//Enums


enum StatusResponse {

  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}

const packageOne = StatusResponse.PENDING
function isDelivred(status: StatusResponse) {
  return status === StatusResponse.DELIVERED
}
isDelivred(StatusResponse.PENDING)

enum ArrowKey{
  UP='up',
  DOWN='down',
  LEFT='left',
  RIGHT='right',
}