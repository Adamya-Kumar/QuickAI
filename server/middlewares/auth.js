import { clerkClient } from "@clerk/express";


export const auth = async(req,res,next)=>{
    try {
       const {userId,has} = await req.auth();
       console.log("clerk data: ",userId,has);
       const hasPermiumPlan = await has({plan:'premium'});
       const user =  await clerkClient.users.getUser(userId);

       if(!hasPermiumPlan && user.privateMetadata.free_usage){
        req.free_usage = user.privateMetadata.free_useage
       }else{
        await clerkClient.users.updateUserMetadata(userId,{
            privateMetadata:{
                free_usage:0
            }
        })
        req.free_usage=0;
       }
       console.log(hasPermiumPlan)
       req.plan=hasPermiumPlan ? 'Premium' : 'Free'
       next();
    } catch (error) {
        
    }
}