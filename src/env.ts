/* configuration locale */
/* dans une app react les variables doivent être préfixées de "REACT_APP_" pour être prises en compte */

class Env{
  REACT_APP_URL_REDIS:string = "http://localhost:4000"
}

//Read environnement variable to override
var env:any = new Env()
Object.keys(env).forEach((item:any) => {
    if (process.env[item]){
      env[item] = process.env[item]
    }
})

export default env