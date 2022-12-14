// la api  3 pods
// propiedades
    // clientes 3
    // prospectos - leads
//autenticacion
    // users
    // empresa
// dominio y subdominio
import { config } from "dotenv";
config();
import EnterpriseRoutes from "./autentication/enterprise/infrastructure/routes";
import UserRoutes from "./autentication/user/infrastructure/routes";
import appServer from "./shared/app";

const port = parseInt(process.env.PORT);
 /// server = levantar server, inicializar rutas, levantar puerto
 
 function getApp(){
    const appClass = new appServer(port);
    return appClass.getApp();
 }
 async function init() {    
    const app = getApp();
    new EnterpriseRoutes(app);
    new UserRoutes(app)


    
 }
 
 init();
 