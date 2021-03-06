const getFields = async (z, bundle)=>{
    const response = await z.request({
        method: 'GET',
        url: 'https://apis-dev.salesmate.io/v3/fields/getAllVisibleFields', 
    });
    console.log(response.json.Data.deal)
    const fields = response.json.Data.deal.map(element => {
        return { "key": element.fieldName, "label": element.displayName, required: element.isRequired ? true : false }
    })
    return fields
}

module.exports = getFields