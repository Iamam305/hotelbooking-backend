export const createError =(status, message)=>{
    const er = new Error()
    err.status = status
    err.message = message
    return err

}