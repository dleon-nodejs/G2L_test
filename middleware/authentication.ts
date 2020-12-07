import { NextFunction, Request, Response } from "express"

const getBearerToken = (authorization: any) => {
	if(!authorization) return false
	authorization = authorization.split("Bearer")
	if(authorization.length != 2) return false
	return authorization.pop().trim()
}

const checkBearerToken = (req: Request, res: Response, next: NextFunction) => {
    let token = getBearerToken(req.headers.authorization)
    if(!token || token != process.env.BEARER_TOKEN){
        return res.status(401).json({ error: "Your token are not Valid." })
    }
    return next()
}

export default checkBearerToken