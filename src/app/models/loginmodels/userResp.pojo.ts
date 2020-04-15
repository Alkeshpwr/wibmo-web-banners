import { reportPermissionsData } from './reportPermissionsData.pojo';

export class UserResp {
public id: number
public status: number
public badTryCount: number
public createdDt: number
public email: string
public name: string
public lastPasswordUpdated: number
public mobileNumber: number;
public lastLoginTime:string;
public loginName: string;
public userPassword: string
public userGroupList: string
public userProgramMappings:any = [];
public otpEnabled: number
public expiredDate: number
public isLoggedIn: number
public currentProgramIdSelected: string;
public geoId:string;
public reportPermissions: reportPermissionsData[]
}