async function storeSearchterm(term) {

    let resdata=await fetch(term);

    let data=await resdata.json()

    return data;

}

export default storeSearchterm