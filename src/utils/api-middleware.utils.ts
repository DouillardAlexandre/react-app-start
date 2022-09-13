/**
 * API-MIDDLEWARE.UTILS
 * Behavior to apply for every API call
 * Format { error } message by triggering a response 
 */

import { instanceRedis } from "../App";


const apiMiddleware = () => (next:any) => (action:any) => {
  return new Promise(function(resolve) {
    next(action)

    if (action.type !== 'API') return;

    const { method, data, url } = action.payload
  
    //Utiliser méthode params pour les méthode GET et DELETE à la place de data (requis par axios)
    const dataOrParams = ["GET", "DELETE"].indexOf(method) > -1 ? "params" : "data";

    switch(action.type){
      case "API":
        //Envoyer données a redis
        instanceRedis.request({
          url,
          method,
          [dataOrParams]: data
        }).then((data:any) => {
          if (data.error){
            //toast(i18n.t("Api middleware error " + data.error ), { type : 'error' });
          }
          resolve(data); 
        })
        .catch((error:any) => { 
          if (error.response){

            var code: any = ""

            switch(error.response.status){
              case 401:
                code = 'user unauthorized'
              break
              case 403:
                code = 'auth expired'
              break
              case 404:
                code = 'page not found'
              break
              case 500:
                code = 'server error'
              break
              default:
                code = error.response.data.error
              break

            }
            
            //toast(i18n.t("Api middleware error " + code, error.response.data.details), { type : 'error' });
            resolve({ error : code })

          }
          else{
            //toast(i18n.t("Api middleware error network"), { type : 'error' });
            resolve({ error : 'network', details : error });
          }
        })

      break
      
      default :
        //toast(i18n.t("error_uncorrect_action_type"), { type : 'error' });
      break
    }

  });

};

export default apiMiddleware;