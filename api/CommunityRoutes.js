import express from "express";
import Community from "./models/Community";
import { getUserFromToken } from "./UserFunctions";
const router = express.Router();
router.post('/communities', (req,res)=>{
   const {name,desk,avatar,cover} = req.body;
   Community.exists({name})
   .then(exists => {
        if(exists){
            res.json('');
        }else{
        getUserFromToken(req.cookies.token).then(userInfo=> {
            community.save().then(()=>{
                res.status(201).json('');
            })
        }); 
        const community =new Community({name,desk,avatar,cover,author:userInfo.username})
        community.save().then(()=> res.status(201).json('ok'));
        }
    });
});
router.get('communities/:name',(req,res)=>{
const {name} = req.params;
Community.findOne({name}).then(community =>{
    res.json(community)
});
});
export default router;
