import dummyData from './dummyData/dummyResTask.json'

export const projectLoader = ({params}) => {
    const data = dummyData.filter((item) => { 
        return item['projectId'] === params.id})

    return data
}