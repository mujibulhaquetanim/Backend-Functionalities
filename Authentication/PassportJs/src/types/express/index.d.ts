// src/types/express/index.d.ts
import { User as CustomUser } from "./UserInterface"; 
declare global {
  namespace Express {
    interface User extends CustomUser {} // This extends Express.User with custom User type
  }
}
