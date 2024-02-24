import dummyData from './dummyData/dummyResTask.json'

// export const projectLoader = ({params}) => {
//     const data = dummyData.filter((item) => { 
//         return item['projectId'] === params.id})

//     return data
// }

const URL = process.env.REACT_APP_URL

export const projectLoader = async ({params}) => {
    console.log(`${URL}/projects/${params.id}`)
    const response = await fetch(`${URL}/projects/${params.id}`)
    console.log(response)
    const data = await response.json()
    console.log(data)
    return data
}