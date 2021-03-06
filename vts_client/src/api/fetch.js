import axios from 'axios'

export const GetFetchQuotes = async (apiConfig) => {
  try {
    return await axios.get(apiConfig.uri).then((resolve) => {
      if (resolve.status === 200) {
        console.log(`${resolve.status}: ${apiConfig.msg} request success`)
        return resolve.data
      } else {
        console.log(`${resolve.status}: ${apiConfig.msg} request failed`)
        return
      }
    })
  } catch (err) {
    console.log(err)
  }
}

export const PostFetchQuotes = async (apiConfig) => {
  try {
    return await axios.post(apiConfig.uri, apiConfig.body).then((resolve) => {
      if (resolve.status === 200) {
        console.log(`${resolve.status}: ${apiConfig.msg} request success`)
        return resolve.data
      } else {
        console.log(`${resolve.status}: ${apiConfig.msg} request failed`)
        return
      }
    })
  } catch (err) {
    console.log(err)
  }
}
