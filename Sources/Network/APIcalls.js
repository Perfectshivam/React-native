//A wrapper for making api calls


const baseUrl='https://dog.ceo/api/';

export const getRandomDogImage=async(limit=1)=>{
    let response={};
    try{
        // abortController.current=new AbortController();
        const res=await fetch(`${baseUrl}breeds/image/random/${limit}`,{
            // signal:abortController.current.signal,
            method:'GET',
            headers:{
                'content-type':'application/json',
            },
        })
        response=await res.json();
    }
    catch(ex){
        response.status='error'
    }
    finally{
        return response;
    }
}
export const getListAllBreeds=async(limit=1)=>{
    let response={};
    try{
        const res=await fetch(`${baseUrl}breeds/list/all`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
            },
        })
        let result=await res.json();
        response={status:result.status,message:Object.keys(result.message)}
    }
    catch(ex){
        response.status='error'
    }
    finally{
        return response;
    }
}

export const getSubBreed=async(limit=1)=>{
    let response={};
    try{
        const res=await fetch(`${baseUrl}breed/hound/list`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
            },
        })
        response=await res.json();
    }
    catch(ex){
        response.status='error'
    }
    finally{
        return response;
    }
}

export const getByBreed=async(limit=1)=>{
    let response={};
    try{
        const res=await fetch(`${baseUrl}breeds/image/random/${limit}`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
            },
        })
        response=await res.json();
    }
    catch(ex){
        response.status='error'
    }
    finally{
        return response;
    }
}
export const getBrowseBreed=async(limit=1,breedName)=>{
    let response={};
    try{
        const res=await fetch(`${baseUrl}breed/${breedName}/images/random/${limit}`,{
            method:'GET',
            headers:{
                'content-type':'application/json',
            },
        })
        response=await res.json();
    }
    catch(ex){
        response.status='error'
    }
    finally{
        return response;
    }
}