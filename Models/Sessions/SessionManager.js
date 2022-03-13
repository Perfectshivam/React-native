import AsyncStorage from "@react-native-async-storage/async-storage"

export class SessionManager{
  static async set(key,values)
  {
    return await AsyncStorage.setItem(key,JSON.stringify(values));
  }
  static async get(key)
  {
    const result=await AsyncStorage.getItem(key);
    if(Boolean(result))
    {
      return JSON.parse(result);
    }
    return null;
  }
  static async clear()
  {
    return await AsyncStorage.clear();
  }
}