import jwt from 'jsonwebtoken'

export function validateToken(req, res, next){
  const accessToken = req.headers['authorization'] || req.query.accessToken
  if(!accessToken) {
    res.send('Access denied')
  }
  jwt.verify(accessToken, process.env.SECRET_TOKEN, (err, res ) =>{
    if(err){
      res.send('Access denied, token expired or incorrect')
    }else{
      next()
    }
  })
}

