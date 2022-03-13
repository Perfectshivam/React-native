import { SessionManager } from "./SessionManager";

export class UserSession{
    static keys={
        UserInfo:"store_users_basic_info"
    }
    static async setUserLoggedIn(values)
    {
        const res=await SessionManager.set(this.keys.UserInfo,values)
        return res;
    }
    static async getUserLoggedIn()
    {
        return await SessionManager.get(this.keys.UserInfo)
    }
    static async logout()
    {
        return await SessionManager.clear()
    }
}