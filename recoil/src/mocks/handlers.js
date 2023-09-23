import { rest } from 'msw';

export default [
        rest.post("/user/login",(req,res,ctx) => {
            if(req.body.id && req.body.pw){
                return res(
                    ctx.json({
                        accessToken: "accessToken",
                    })
                )
            } else {
                return res(ctx.status(400));
            };
        }),
];